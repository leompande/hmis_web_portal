/**
 * Created by leo on 10/21/15.
 */

angular.module("hmisPortal")
    .controller("dashboardCtrl",function ($rootScope,$scope,$http,$location,$timeout,olData,olHelpers,shared) {

        $scope.cards = {};
        $scope.data = {};
        $rootScope.selectedOrgUnit = "m0frOspS7JY";
        $rootScope.selectedPeriod = "2014";
        $scope.selectedOrgUnitLevel = "2";
        $scope.population = {};
        $scope.population.displayTable = false;
        $scope.icons=[
            {name:'table',image:'table.jpg',action:''},
            {name:'bar',image:'bar.png',action:''},
            {name:'line',image:'line.png',action:''},
            {name:'combined',image:'combined.jpg',action:''},
            {name:'column',image:'column.png',action:''},
            {name:'area',image:'area.jpg',action:''},
            {name:'pie',image:'pie.png',action:''}
        ];
            $scope.prepareData = function(jsonObject){
            var structure = {};
            var data = [];
            var elements = [];
            elements.push({'name':'< 1','uid':'h8JRv8POdfy'},
                {'name':'1 - 4','uid':'LBipXEMD6mq'},
                {'name':'5 - 14','uid':'aZcKJ9XxvaF'},
                {'name':'15 - 49','uid':'FfN1mqXvpR7'},
                {'name':'50 - 60','uid':'HKU7NijIEIH'});

            angular.forEach(jsonObject.metaData.ou,function(region){
                data.push({'name':jsonObject.metaData.names[region],'id':region});
            });
            structure.regions = data;
            structure.elements = elements;
            return structure;

        };

        $scope.data.chartType = 'column';
        $scope.displayTable = false;
        $scope.changeChart = function($event,type){
            $scope.population.displayTable = false;
            var parent = angular.element($event.target).parent().parent().parent().prev('div');
            $scope.showReport = true;
            if(type == 'table'){

                parent.css('overflow','scroll');
                $scope.population.displayTable = true;
                $scope.data.chartType = 'table';
            }
            else{
                parent.removeAttr( 'style' );
                $scope.population.displayTable = false;
                $scope.data.chartType = type;
            }
            $scope.prepareSeries();
        };

        $scope.downloadExcel = function(){
            var url = "";
            if($scope.selectedOrgUnit == "m0frOspS7JY"){
                https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:ykShMtNgDB1&dimension=Cow9nZikDgD:LBipXEMD6mq;FfN1mqXvpR7;aZcKJ9XxvaF;HKU7NijIEIH;p1b4SYcdjJw;h8JRv8POdfy&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&outputIdScheme=NAME
                url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:ykShMtNgDB1&dimension=Cow9nZikDgD:LBipXEMD6mq;FfN1mqXvpR7;aZcKJ9XxvaF;HKU7NijIEIH;p1b4SYcdjJw;h8JRv8POdfy&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&outputIdScheme=NAME";
            }else{

                url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:ykShMtNgDB1&dimension=Cow9nZikDgD:LBipXEMD6mq;FfN1mqXvpR7;aZcKJ9XxvaF;HKU7NijIEIH;p1b4SYcdjJw;h8JRv8POdfy&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&outputIdScheme=NAME";
            }
            $http.get(url,{withCredentials: true, params : {
                j_username: "portal",
                j_password: "Portal123"
            },'Content-Type': 'application/csv;charset=UTF-8'}).success(function(data){
                var a = document.createElement('a');
                var blob = new Blob([data]);
                a.href = window.URL.createObjectURL(blob);
                a.download = "data.csv";
                a.click();
            });
        };

        $scope.prepareSeries = function(){
            $scope.chartConfig.title.text = "POPULATION BY AGE GROUP";
            $scope.area = [];
            if($scope.selectedOrgUnit == "m0frOspS7JY"){

                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=Cow9nZikDgD:FfN1mqXvpR7;HKU7NijIEIH;LBipXEMD6mq;aZcKJ9XxvaF;h8JRv8POdfy;p1b4SYcdjJw&dimension=dx:ykShMtNgDB1&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }else{
                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=Cow9nZikDgD:FfN1mqXvpR7;HKU7NijIEIH;LBipXEMD6mq;aZcKJ9XxvaF;h8JRv8POdfy;p1b4SYcdjJw&dimension=dx:ykShMtNgDB1&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }
            $scope.chartConfig.loading = true;
            $http.get($scope.url,{withCredentials: true, params : {
                j_username: "portal",
                j_password: "Portal123"

            }}).success(function(data){
                var useThisData = $scope.prepareData(data);
                angular.forEach(useThisData.regions,function(value){
                    $scope.area.push(value.name);
                });
                $scope.subCategory = useThisData.elements;
                $scope.chartConfig.xAxis.categories = $scope.area;

                $scope.normalseries = [];
                if($scope.data.chartType == "pie"){
                    delete $scope.chartConfig.chart;
                    var serie = [];
                    angular.forEach($scope.subCategory,function(value){
                        angular.forEach(useThisData.regions,function(val){
                            var number = $scope.getDataFromUrl(data.rows,val.id,value.uid);

                            serie.push({name: value.name+" - "+ val.name , y: parseInt(number)})
                        });
                    });
                    $scope.normalseries.push({type: $scope.data.chartType, name:$scope.UsedName , data: serie,showInLegend: true,
                        dataLabels: {
                            enabled: false
                        } })
                    $scope.chartConfig.series = $scope.normalseries;
                }
                else if($scope.data.chartType == "combined"){
                    delete $scope.chartConfig.chart;
                    var serie1 = [];
                    angular.forEach($scope.subCategory,function(value){
                        var serie = [];

                        angular.forEach(useThisData.regions,function(val){
                            var number = $scope.getDataFromUrl(data.rows,val.id,value.uid);
                            serie.push(parseInt(number));
                            serie1.push({name: value.name+" - "+ val.name , y: parseInt(number) })
                        });
                        $scope.normalseries.push({type: 'column', name: value.name, data: serie});
                        $scope.normalseries.push({type: 'spline', name: value.name, data: serie});
                    });
                    $scope.normalseries.push({type: 'pie', name: $scope.UsedName, data: serie1,center: [100, 80],size: 150,showInLegend: false,
                        dataLabels: {
                            enabled: false
                        }})
                    $scope.chartConfig.series = $scope.normalseries;
                }
                else if($scope.data.chartType == 'table'){
                    $scope.table ={}
                    $scope.table.headers = [];
                    $scope.table.colums =[];
                    angular.forEach($scope.subCategory,function(value){
                        var serie = [];
                        $scope.table.headers.push(value.name);
                    });
                    angular.forEach(useThisData.regions,function(val){
                        var seri = [];
                        angular.forEach($scope.subCategory,function(value){
                            var number = $scope.getDataFromUrl(data.rows,val.id,value.uid);
                            seri.push({name:value.name,value:parseInt(number)});
                        });
                        $scope.table.colums.push({name:val.name,values:seri});
                    });
                }
                else{
                    delete $scope.chartConfig.chart;
                    angular.forEach($scope.subCategory,function(value){
                        var serie = [];
                        angular.forEach(useThisData.regions,function(val){
                            var number = $scope.getDataFromUrl(data.rows,val.id,value.uid);
                            serie.push(number);
                        });
                        $scope.normalseries.push({type: $scope.data.chartType, name: value.name, data: serie})
                    });
                    $scope.chartConfig.series = $scope.normalseries;
                }
                $scope.chartConfig.loading = false
            });


        };


        //drawing some charts
        $scope.chartConfig = {
            title: {
                text: 'POPULATION BY AGE GROUP'
            },
            xAxis: {
                categories: [],
                labels:{
                    rotation: -45,
                    style:{ "color": "#000000", "fontWeight": "bold" }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population'
                },labels:{
                    style:{ "color": "#000000", "fontWeight": "bold" }
                }

            },
            labels: {
                items: [{
                    html: 'Population',
                    style: {
                        left: '50px',
                        top: '18px',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }]
            },
            series: []
        };
        $scope.getDataFromUrl  = function (arr,ou,de){
            var num = 0
            $.each(arr,function(k,v){
                if(v[2] == ou && v[0] == de ){
                    num = parseInt(v[3])
                }
            });
            return num;
        }
        $rootScope.firstClick1 = function(){
                $scope.prepareSeries();
        }
        $scope.firstClick1();


    })
    .factory('shared', function() {
        var shared = {
            "facility":0
        };
        return shared;
    });
var ogUnitsObjectConstruct=function(underOne,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underOne) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var undertwoObject=function(undertwo,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(undertwo) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underthreeObject=function(underthree,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underthree) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underfourObject=function(underfour,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underfour) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
