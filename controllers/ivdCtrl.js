/**
 * Created by leo on 10/21/15.
 */
angular.module("hmisPortal")
    .config(function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    })
    .controller("ivdCtrl",function ($rootScope,$scope,$http,$location,$timeout,mapService) {
//        jQuery(document).ready(function() {
//            $.post("https://dhis.moh.go.tz/dhis-web-commons-security/login.action?authOnly=true",
//                {withCredentials: true, params : {
//                    j_username: "portal", j_password: "Portal123"
//                }});
//            $.post("https://etl.moh.go.tz/dhis/dhis-web-commons-security/login.action?authOnly=true",
//                {withCredentials: true, params : {
//                    j_username: "portal", j_password: "Portal123"
//                }});
//        });
        $scope.cards = {};
        $scope.data = {};
        var map = this;
        $rootScope.selectedOrgUnit = "m0frOspS7JY";
        $rootScope.selectedPeriod = "2014";
        $scope.selectedOrgUnitLevel = "2";
        $scope.chartConfig = {
            title: {
                text: 'Combination chart'
            },
            xAxis: {
                categories: [],
                labels:{
                    rotation: -90,
                    style:{ "color": "#000000", "fontWeight": "normal" }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },labels:{
                    style:{ "color": "#000000", "fontWeight": "bold" }
                }
            },
            labels: {
                items: [{
                    html: 'doses',
                    style: {
                        left: '50px',
                        top: '18px',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }]
            },
            series: []
        };

        $scope.cards.malaria = [
            {
                title:'Measles vaccination  coverage to children under 1 year',
                description:'Maelezo ya Measles vaccination  coverage to children under 1 year',
                cardClass:"col m12 s12",
                cardSize:"medium",
                data:'c29EE9nH8gQ',
                icons:[
                    {name:'table',image:'table.jpg',action:''},
                    {name:'bar',image:'bar.png',action:''},
                    {name:'line',image:'line.png',action:''},
                    {name:'combined',image:'combined.jpg',action:''},
                    {name:'column',image:'column.png',action:''},
                    {name:'area',image:'area.jpg',action:''},
                    {name:'pie',image:'pie.png',action:''},
                    {name:'map',image:'map.jpg',action:''}
                ],
                dataSource:'',
                size:'small',
                displayTable:false,
                displayMap:false,
                chart:'line',
                chartObject:{
                    title: {
                        text: 'Combination chart'
                    },
                    xAxis: {
                        categories: [],
                        labels:{
                            rotation: -90,
                            style:{ "color": "#000000", "fontWeight": "normal" }
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: ''
                        },labels:{
                            style:{ "color": "#000000", "fontWeight": "bold" }
                        }
                    },
                    labels: {
                        items: [{
                            html: 'doses',
                            style: {
                                left: '50px',
                                top: '18px',
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                            }
                        }]
                    },
                    series: []
                }

            },
            {
                title:'ANC Proportion of pregnant women receiving TT2+',
                description:'Maelezo ya ANC Proportion of pregnant women receiving TT2+',
                cardClass:"col m6 s12",
                data:'DHP2lGgo4kH',
                icons:[
                    {name:'table',image:'table.jpg',action:''},
                    {name:'bar',image:'bar.png',action:''},
                    {name:'line',image:'line.png',action:''},
                    {name:'combined',image:'combined.jpg',action:''},
                    {name:'column',image:'column.png',action:''},
                    {name:'area',image:'area.jpg',action:''},
                    {name:'pie',image:'pie.png',action:''},
                    {name:'map',image:'map.jpg',action:''}
                ],
                dataSource:'',
                size:'large',
                displayTable:false,
                displayMap:false,
                chart:'combined',
                chartObject:{
                    title: {
                        text: 'Combination chart'
                    },
                    xAxis: {
                        categories: [],
                        labels:{
                            rotation: -90,
                            style:{ "color": "#000000", "fontWeight": "normal" }
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: ''
                        },labels:{
                            style:{ "color": "#000000", "fontWeight": "bold" }
                        }
                    },
                    labels: {
                        items: [{
                            html: 'doses',
                            style: {
                                left: '50px',
                                top: '18px',
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                            }
                        }]
                    },
                    series: []
                }

            },
            {
                title:'PENTA 3 Vaccination coverage to children under 1 year',
                description:'Maelezo ya PENTA 3 Vaccination coverage to children under 1 year',
                cardClass:"col m6 s12",
                data:'WhsP7nsuwnz',
                icons:[
                    {name:'table',image:'table.jpg',action:''},
                    {name:'bar',image:'bar.png',action:''},
                    {name:'line',image:'line.png',action:''},
                    {name:'combined',image:'combined.jpg',action:''},
                    {name:'column',image:'column.png',action:''},
                    {name:'area',image:'area.jpg',action:''},
                    {name:'pie',image:'pie.png',action:''},
                    {name:'map',image:'map.jpg',action:''}
                ],
                dataSource:'',
                size:'small',
                displayTable:false,
                displayMap:false,
                chart:'table',
                chartObject:{
                    title: {
                        text: 'Combination chart'
                    },
                    xAxis: {
                        categories: [],
                        labels:{
                            rotation: -90,
                            style:{ "color": "#000000", "fontWeight": "normal" }
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: ''
                        },labels:{
                            style:{ "color": "#000000", "fontWeight": "bold" }
                        }
                    },
                    labels: {
                        items: [{
                            html: 'doses',
                            style: {
                                left: '50px',
                                top: '18px',
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                            }
                        }]
                    },
                    series: []
                }

            }
        ]

        $scope.prepareData = function(jsonObject){
            var data = [];
            data.push({'name':jsonObject.metaData.names[$rootScope.selectedOrgUnit],'id':$rootScope.selectedOrgUnit,'value':getDataFromUrl(jsonObject.rows,$rootScope.selectedOrgUnit)});

            angular.forEach(jsonObject.metaData.ou,function(region){
                if(region != $rootScope.selectedOrgUnit ){
                    data.push({'name':jsonObject.metaData.names[region],'id':region,'value':getDataFromUrl(jsonObject.rows,region)});
                }
            });
            return data;

        };






        //var datads = {"headers":[{"name":"dx","column":"Data","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"pe":["2014"],"co":[],"ou":["lnOyHhoLzre","Cpd5l15XxwA","yyW17iCz9As","qg5ySBw9X5l","LGTVRhKSn1V","Crkg9BoUo5w","qarQhOt2OEh","DWSo42hunXH","vYT08q7Wo33","EO3Ps3ny0Nr","vU0Qt1A5IDz","RD96nI1JXVV","ZYYX8Q9SGoV","acZHYslyJLt","MAL4cfZoFhJ","VMgrQWSVIYn","bN5q5k5DgLA","Sj50oz9EHvD","IgTAEKMqKRe","YtVMnut7Foe","sWOWPBvwNY2","hAFRrgDK0fy","kZ6RlMnt2bp","A3b5mw8DJYC","vAtZ8a924Lx"],"names":{"2014":"2014","yyW17iCz9As":"Pwani Region","vU0Qt1A5IDz":"Tanga Region","dx":"Data","vYT08q7Wo33":"Mara Region","ZYYX8Q9SGoV":"Ruvuma Region","vAtZ8a924Lx":"Rukwa Region","RD96nI1JXVV":"Kigoma Region","Crkg9BoUo5w":"Kagera Region","Cpd5l15XxwA":"Dodoma Region","MAL4cfZoFhJ":"Geita Region","kZ6RlMnt2bp":"Tabora Region","hAFRrgDK0fy":"Mwanza Region","tit1C1VPIV7":"ANC Proportion of pregnant women receiving ITN Voucher","acZHYslyJLt":"Dar Es Salaam Region","ou":"Organisation unit","qg5ySBw9X5l":"Manyara Region","A3b5mw8DJYC":"Mbeya Region","sWOWPBvwNY2":"Iringa Region","EO3Ps3ny0Nr":"Shinyanga Region","lnOyHhoLzre":"Kilimanjaro Region","pe":"Period","bN5q5k5DgLA":"Mtwara Region","Sj50oz9EHvD":"Morogoro Region","VMgrQWSVIYn":"Lindi Region","YtVMnut7Foe":"Arusha Region","DWSo42hunXH":"Katavi Region","IgTAEKMqKRe":"Simiyu Region","LGTVRhKSn1V":"Singida Region","qarQhOt2OEh":"Njombe Region"}},"rows":[["tit1C1VPIV7","lnOyHhoLzre","38.3"],["tit1C1VPIV7","Cpd5l15XxwA","32.9"],["tit1C1VPIV7","yyW17iCz9As","40.0"],["tit1C1VPIV7","qg5ySBw9X5l","27.6"],["tit1C1VPIV7","LGTVRhKSn1V","42.6"],["tit1C1VPIV7","Crkg9BoUo5w","38.0"],["tit1C1VPIV7","qarQhOt2OEh","34.0"],["tit1C1VPIV7","DWSo42hunXH","21.9"],["tit1C1VPIV7","vYT08q7Wo33","30.8"],["tit1C1VPIV7","EO3Ps3ny0Nr","19.6"],["tit1C1VPIV7","vU0Qt1A5IDz","37.9"],["tit1C1VPIV7","RD96nI1JXVV","36.4"],["tit1C1VPIV7","ZYYX8Q9SGoV","36.9"],["tit1C1VPIV7","acZHYslyJLt","20.8"],["tit1C1VPIV7","MAL4cfZoFhJ","21.4"],["tit1C1VPIV7","VMgrQWSVIYn","41.7"],["tit1C1VPIV7","bN5q5k5DgLA","33.9"],["tit1C1VPIV7","Sj50oz9EHvD","35.4"],["tit1C1VPIV7","IgTAEKMqKRe","23.1"],["tit1C1VPIV7","YtVMnut7Foe","33.9"],["tit1C1VPIV7","sWOWPBvwNY2","32.4"],["tit1C1VPIV7","hAFRrgDK0fy","25.5"],["tit1C1VPIV7","kZ6RlMnt2bp","26.3"],["tit1C1VPIV7","A3b5mw8DJYC","27.9"],["tit1C1VPIV7","vAtZ8a924Lx","25.3"]],"width":3,"height":25};
//       var datads = {"headers":[{"name":"dx","column":"Data","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"pe":["2014"],"co":[],"ou":["QKEr8DFutO8","lgZ6HfZaj3f","aQEZnk4RzKv","uafqZbOYpVL","zHa2ohFrpPM","PHWaJvzTmL8","D21VsjNL2LB"],"names":{"2014":"2014","pe":"Period","lgZ6HfZaj3f":"Arusha City Council","ou":"Organisation unit","dx":"Data","uafqZbOYpVL":"Meru District Council","D21VsjNL2LB":"Monduli District Council","QKEr8DFutO8":"Karatu District Council","zHa2ohFrpPM":"Arusha District Council","tit1C1VPIV7":"ANC Proportion of pregnant women receiving ITN Voucher","aQEZnk4RzKv":"Longido District Council","PHWaJvzTmL8":"Ngorongoro District Council"}},"rows":[["tit1C1VPIV7","QKEr8DFutO8","35.3"],["tit1C1VPIV7","lgZ6HfZaj3f","32.6"],["tit1C1VPIV7","aQEZnk4RzKv","33.6"],["tit1C1VPIV7","uafqZbOYpVL","42.1"],["tit1C1VPIV7","zHa2ohFrpPM","30.7"],["tit1C1VPIV7","PHWaJvzTmL8","27.7"],["tit1C1VPIV7","D21VsjNL2LB","36.8"]],"width":3,"height":7};


        $scope.data.chartType = 'column';
        $scope.displayTable = false;
        $scope.changeChart = function(type,card){
            card.displayTable = false;

            $scope.showReport = true;
            if(type == 'table'){
                card.displayTable = true;
                card.displayMap = false;
                card.chart = 'table';
                $scope.data.chartType = 'table';
            }else if(type == 'map'){
                card.displayMap = true;
                card.displayTable = false;
                card.chart = 'map';
                $scope.data.chartType = 'map';
            }
            else{
                card.displayMap = false;
                card.displayTable = false;
                card.chart = type;
                $scope.data.chartType = type;
            }
            $scope.prepareSeries(card,$scope.data.chartType);
        };

        $scope.downloadExcel = function(id){
            var url = "";
            if($scope.selectedOrgUnit == "m0frOspS7JY"){
                url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:"+id+"&dimension=pe:"+$scope.selectedPeriod+"&dimension=ou:LEVEL-1;LEVEL-2;"+$scope.selectedOrgUnit+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=pe;ou";
            }else{

                url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:"+id+"&dimension=pe:"+$scope.selectedPeriod+"&dimension=ou:LEVEL-2;LEVEL-3;"+$scope.selectedOrgUnit+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=pe;ou";
            }
            $http.get(url,{withCredentials: true, params : {
                j_username: "portal",
                j_password: "Portal123"
            },'Content-Type': 'application/csv;charset=UTF-8'}).success(function(data){
                var a = document.createElement('a');
                var blob = new Blob([data]);
                a.href = window.URL.createObjectURL(blob);
                a.download = "data.xls";
                a.click();
            });
        }

        $scope.prepareSeries = function(cardObject,chart){
            if(chart == 'table'){
                cardObject.displayTable = true;
                cardObject.displayMap = false;
            }else if(chart == 'map'){
                cardObject.displayMap = true;
                cardObject.displayTable = false;
            }
            else{
                cardObject.displayMap = false;
                cardObject.displayTable = false;
            }
            cardObject.chartObject.title.text = cardObject.title;
            cardObject.chartObject.yAxis.title.text = cardObject.title.toLowerCase();

            if($scope.selectedOrgUnit == "m0frOspS7JY"){
                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-1;LEVEL-2;m0frOspS7JY&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }else{
                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-2;LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }
            cardObject.chartObject.loading = true;
            $http.get($scope.url,{withCredentials: true, params : {
                j_username: "portal",
                j_password: "Portal123"

            }}).success(function(data){
                $scope.area = [];
                cardObject.chartObject.xAxis.categories = [];
                //
                var dataToUse = $scope.prepareData(data);
                //
                angular.forEach(dataToUse,function(val){
                    cardObject.chartObject.xAxis.categories.push(val.name);
                });
                $scope.normalseries = [];
                if(chart == "pie"){
                    delete cardObject.chartObject.chart;
                    var serie = [];
                    angular.forEach(dataToUse,function(val){
                        serie.push({name: val.name, y: parseInt(val.value)})
                    });
                    $scope.normalseries.push({type: chart, name:cardObject.title , data: serie,showInLegend: true,
                        dataLabels: {
                            enabled: false
                        } });
                    cardObject.chartObject.series = $scope.normalseries;
                }
                else if(chart == "combined"){
                    delete cardObject.chartObject.chart;
                    var serie1 = [];
                    var serie = [];

                    angular.forEach(dataToUse,function(val){
                        serie.push(parseInt(val.value));
                        serie1.push({name: val.name , y: parseInt(val.value) })
                    });
                    $scope.normalseries.push({type: 'column', name: cardObject.title, data: serie});
                    $scope.normalseries.push({type: 'spline', name: cardObject.title, data: serie});
                    $scope.normalseries.push({type: 'pie', name: cardObject.title, data: serie1,center: [100, 80],size: 150,showInLegend: false,
                        dataLabels: {
                            enabled: false
                        }})
                    cardObject.chartObject.series = $scope.normalseries;
                }
                else if(chart == 'table'){
                    cardObject.table = {};
                    cardObject.table.colums =[];
                    angular.forEach(dataToUse,function(val){
                        cardObject.table.colums.push({name:val.name,value:parseInt(val.value)});
                    });
                }else if(chart == 'map'){
                    if($scope.selectedOrgUnit == "m0frOspS7JY"){
                        angular.forEach(dataToUse,function(val){
                            cardObject.chartObject.series.push({id:val.id,name:val.name,value:parseInt(val.value)});
                        });
                        map.drawMap($scope.selectedOrgUnit,2,cardObject);
                    }else{
                        angular.forEach(dataToUse,function(val){
                            cardObject.chartObject.series.push({id:val.id,name:val.name,value:parseInt(val.value)});
                        });
                        map.drawMap($scope.selectedOrgUnit,3,cardObject);
                    }
                }
                else{
                    delete cardObject.chartObject.chart;
                    var serie = [];
                    angular.forEach(dataToUse,function(val){
                        serie.push(val.value);
                    });
                    cardObject.chartObject.chart={};
                    cardObject.chartObject.chart.type=chart;
                    $scope.normalseries.push({type: chart, name: cardObject.title, data: serie})
                    cardObject.chartObject.series = $scope.normalseries;
                }
                cardObject.chartObject.loading = false
            });


        };
        $rootScope.lastCard=function(){
            $scope.loadingImage=true;
            if($scope.selectedOrgUnit == "m0frOspS7JY"){
                var lastUrl="https://dhis.moh.go.tz/api/analytics.json?dimension=dx:c29EE9nH8gQ;JXJ6K85BwHb;DHP2lGgo4kH;RyNkn76uTJo;WAdaCligbNP;ykDWUlQzexW;WhsP7nsuwnz;V2ZzQl7dgVF&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }else{
                var lastUrl="https://dhis.moh.go.tz/api/analytics.json?dimension=dx:c29EE9nH8gQ;JXJ6K85BwHb;DHP2lGgo4kH;RyNkn76uTJo;WAdaCligbNP;ykDWUlQzexW;WhsP7nsuwnz;V2ZzQl7dgVF&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }
            $http.get(lastUrl,{withCredentials: true, params : {
                j_username: "portal",
                j_password: "Portal123"
            }}).success(function(dataTable){
                var generalArray=[];
                var underOne="Measles vaccination coverage to children under 1 year";
                var undertwo="Surua (Measles) zilizotolewa";
                var underANC="ANC Proportion of pregnant women receiving TT2+";
                var underthree="Wajawazito Waliopata Chanjo ya TT2+";
                var underfour="Hudhurio la Kwanza ANC Ujauzito chini ya Wiki 12";
                var underANC2="Hudhurio la Kwanza ANC Ujauzito Wiki 12 au Zaidi";
                var underPENTA="PENTA 3 vaccination coverage children under 1 year";
                var underPenta="Watoto Waliochanjwa Penta";
                 $scope.arrayed=[{'underOne':'Measles vaccination coverage to children under 1 year','undertwo':'Measles Doses to Children under one year of age','underANC':'ANC Proportion of pregnant women receiving TT2+',
                    'underthree':'ANC tetanus two doses plus+','underfour':'ANC first visit before 12 weeks',
                    'underANC2': 'ANC first visit after 12 weeks','underPENTA':'PENTA 3 vaccination coverage children under 1 year','underPenta':'PENTA 3 under 1 year Coverage'
                  }];
                angular.forEach(dataTable.metaData.ou,function(region){
                    generalArray.push({"orgUnit":dataTable.metaData.names[region],underOne:ogUnitsObjectConstruct(underOne,dataTable,dataTable.rows,region),
                        undertwo:undertwoObject(undertwo,dataTable,dataTable.rows,region),underANC:underANCObject(underANC,dataTable,dataTable.rows,region),
                        underthree:underthreeObject(underthree,dataTable,dataTable.rows,region),underfour:underfourObject(underfour,dataTable,dataTable.rows,region),
                        underANC2:underANC2Object(underANC2,dataTable,dataTable.rows,region),underPENTA:underPENTAObject(underPENTA,dataTable,dataTable.rows,region),
                        underPenta:underPentaObject(underPenta,dataTable,dataTable.rows,region)
                    });

                });
                $scope.loadingImage=false;
                $scope.tableContent=generalArray;
                console.log($scope.tableContent);
                //},2000);
            }).error(function(error){
                //$scope.loadingImage=false;
                $scope.authenticationFailed=error;
                console.log($scope.authenticationFailed);
            });

        }
        $scope.downloadIvdExcelTotal = function(){
            if($scope.selectedOrgUnit == "m0frOspS7JY"){
                var lastUrl="https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:c29EE9nH8gQ;JXJ6K85BwHb;DHP2lGgo4kH;RyNkn76uTJo;WAdaCligbNP;ykDWUlQzexW;WhsP7nsuwnz;V2ZzQl7dgVF&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=ou";
            }else{
                var lastUrl="https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:c29EE9nH8gQ;JXJ6K85BwHb;DHP2lGgo4kH;RyNkn76uTJo;WAdaCligbNP;ykDWUlQzexW;WhsP7nsuwnz;V2ZzQl7dgVF&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=ou";
            }
            $http.get(lastUrl,{withCredentials: true, params : {
                j_username: "portal",
                j_password: "Portal123"
            },'Content-Type': 'application/octet-stream'}).success(function(data){
                var a = document.createElement('a');
                var blob = new Blob([data]);
                a.href = window.URL.createObjectURL(blob);
                a.download = "data.xls";
                a.click();
            });
        }


        $rootScope.firstClick = function(){
            angular.forEach($scope.cards.malaria,function(value){
//              $scope.data.chartType = value.chart;
                $scope.prepareSeries(value,value.chart);
            });
            $rootScope.lastCard();
        }
        $scope.firstClick();




        /**
         *
         * DRAW MAP
         * */
        map.drawMap = function(parentUid,level,card){
           mapService.renderMap(parentUid,level,card);
        }


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

var underANCObject=function(underANC,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underANC) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underANC2Object=function(underANC2,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underANC2) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underPENTAObject=function(underPENTA,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underPENTA) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underPentaObject=function(underPenta,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underPenta) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
function getDataFromUrl(arr,ou){
    var num = 0
    $.each(arr,function(k,v){
        if(v[1] == ou){
            num = parseInt(v[2])
        }
    });
    return num;
}