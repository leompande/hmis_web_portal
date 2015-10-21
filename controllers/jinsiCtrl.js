/**
 * Created by leo on 10/21/15.
 */

angular.module("hmisPortal")
    .controller("jinsiCtrl",function ($rootScope,$scope,$http,$location,$timeout,olData,olHelpers,shared) {

        $scope.cards = {};
        $scope.data = {};
        $rootScope.selectedOrgUnit = "m0frOspS7JY";
        $rootScope.selectedPeriod = "2014";
        $scope.selectedOrgUnitLevel = "2";
        $scope.jinsi = {};
        $scope.jinsi.displayTable = false;
        $scope.icons=[
            {name:'table',image:'table.jpg',action:''},
            {name:'bar',image:'bar.png',action:''},
            {name:'line',image:'line.png',action:''},
            {name:'combined',image:'combined.jpg',action:''},
            {name:'column',image:'column.png',action:''},
            {name:'area',image:'area.jpg',action:''},
            {name:'pie',image:'pie.png',action:''}
        ];
        $scope.prepareJinsiData = function(jsonObject){
            var structure = {};
            var data = [];
            var elements = [];
             elements.push({'name':'Male','uid':"mtUMlCLFTTz"},{'name':'Female','uid':"syxWmui9UMq"})
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
                $scope.jinsi.displayTable = true;
                $scope.data.chartType = 'table';
            }
            else{
                parent.removeAttr( 'style' );
                $scope.jinsi.displayTable = false;
                $scope.data.chartType = type;
            }
            $scope.preparejinsiSeries();
        };

        $scope.downloadjinsiExcel = function(){
            var url = "";
            if($scope.selectedOrgUnit == "m0frOspS7JY"){

                url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:ykShMtNgDB1&dimension=hENn80Fmmlf:mtUMlCLFTTz;syxWmui9UMq&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx;hENn80Fmmlf&rows=ou";
            }else{

                url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:ykShMtNgDB1&dimension=hENn80Fmmlf:mtUMlCLFTTz;syxWmui9UMq&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx;hENn80Fmmlf&rows=ou";
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

        $scope.preparejinsiSeries = function(){
            $scope.jinsichartConfig.title.text = "POPULATION BY GENDER";
            $scope.area = [];
            if($scope.selectedOrgUnit == "m0frOspS7JY"){
                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:ykShMtNgDB1&dimension=hENn80Fmmlf:mtUMlCLFTTz;syxWmui9UMq&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }else{
                $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:ykShMtNgDB1&dimension=hENn80Fmmlf:mtUMlCLFTTz;syxWmui9UMq&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }
            $scope.jinsichartConfig.loading = true;
            $http.get($scope.url,{withCredentials: true, params : {
                j_username: "portal",
                j_password: "Portal123"
            }}).success(function(data){
                var useThisData = $scope.prepareJinsiData(data);
                angular.forEach(useThisData.regions,function(value){
                    $scope.area.push(value.name);
                });
                $scope.subCategory = useThisData.elements;
                $scope.jinsichartConfig.xAxis.categories = $scope.area;

                $scope.normalseries = [];
                if($scope.data.chartType == "pie"){
                    delete $scope.jinsichartConfig.chart;
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
                    $scope.jinsichartConfig.series = $scope.normalseries;
                }
                else if($scope.data.chartType == "combined"){
                    delete $scope.jinsichartConfig.chart;
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
                    $scope.jinsichartConfig.series = $scope.normalseries;
                }
                else if($scope.data.chartType == 'table'){
                    $scope.jinsitable ={}
                    $scope.jinsitable.headers = [];
                    $scope.jinsitable.colums =[];
                    angular.forEach($scope.subCategory,function(value){
                        var serie = [];
                        $scope.jinsitable.headers.push(value.name);
                    });
                    angular.forEach(useThisData.regions,function(val){
                        var seri = [];
                        angular.forEach($scope.subCategory,function(value){
                            var number = $scope.getDataFromUrl(data.rows,val.id,value.uid);
                            seri.push({name:value.name,value:parseInt(number)});
                        });
                        $scope.jinsitable.colums.push({name:val.name,values:seri});
                    });
                }
                else{
                    delete $scope.jinsichartConfig.chart;
                    angular.forEach($scope.subCategory,function(value){
                        var serie = [];
                        angular.forEach(useThisData.regions,function(val){
                            var number = $scope.getDataFromUrl(data.rows,val.id,value.uid);
                            serie.push(number);
                        });
                        $scope.normalseries.push({type: $scope.data.chartType, name: value.name, data: serie})
                    });
                    $scope.jinsichartConfig.series = $scope.normalseries;
                }
                $scope.jinsichartConfig.loading = false
            });


        };


        //drawing some charts
        $scope.jinsichartConfig = {
            title: {
                text: 'Population'
            },
            xAxis: {
                categories: [],
                labels:{
                    rotation: -45,
                    style:{ "color": "#000000", "fontWeight": "bold" }
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
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
                if(v[2] == ou && v[1] == de ){
                    num = parseInt(v[3])
                }
            });
            return num;
        }



        //
        $scope.cards.malaria = [{
            title:'HIV DATA',
            description:'HIV DATA',
            cardClass:"col s12 m12",
            data:'Hwcn7ajwZ1p;Dp0VF7ssmcH;CxaDPrjhmax;db4lfMnttc6;',
            icons:[
                {name:'table',image:'table.jpg',action:''},
                {name:'bar',image:'bar.png',action:''},
                {name:'line',image:'line.png',action:''},
                {name:'combined',image:'combined.jpg',action:''},
                {name:'column',image:'column.png',action:''},
                {name:'area',image:'area.jpg',action:''},
                {name:'pie',image:'pie.png',action:''}
            ],
            dataSource:'dhis',
            size:'small',
            displayTable:false,
            displayMap:false,
            chart:'bar',
            chartObject:{
                title: {
                    text: 'HIV DATA'
                },
                xAxis: {
                    categories: [],
                    labels:{
                        rotation: -70,
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
                        html: 'HIV DATA',
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
                title:'RCHS DATA',
                description:'RCHS DATA',
                cardClass:"col m12 s12",
                cardSize:"medium",
                data:'GzvLb3XVZbR;TfoI3vTGv1f;cap79mdf6Co;QntdhuQfgvT;zeEp4Xu2GOm',
                icons:[
                    {name:'table',image:'table.jpg',action:''},
                    {name:'bar',image:'bar.png',action:''},
                    {name:'line',image:'line.png',action:''},
                    {name:'combined',image:'combined.jpg',action:''},
                    {name:'column',image:'column.png',action:''},
                    {name:'area',image:'area.jpg',action:''},
                    {name:'pie',image:'pie.png',action:''}
                ],
                dataSource:'dhis',
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
                            rotation: -70,
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
                title:'HMIS DATA',
                description:'HMIS DATA',
                cardClass:"col m12 s12",
                cardSize:"medium",
                data:'ZOvFj2vtlor;qpcwPcj8D6u;v6wdME3ouXu',
                icons:[
                    {name:'table',image:'table.jpg',action:''},
                    {name:'bar',image:'bar.png',action:''},
                    {name:'line',image:'line.png',action:''},
                    {name:'combined',image:'combined.jpg',action:''},
                    {name:'column',image:'column.png',action:''},
                    {name:'area',image:'area.jpg',action:''},
                    {name:'pie',image:'pie.png',action:''}
                ],
                dataSource:'dhis',
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
                            rotation: -70,
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
                title:'RCH DATA',
                description:'RCH DATA',
                cardClass:"col m12 s12",
                cardSize:"medium",
                data:'GzvLb3XVZbR;TfoI3vTGv1f;cap79mdf6Co;rm3y3VHPiFD;QntdhuQfgvT;zeEp4Xu2GOm',
                icons:[
                    {name:'table',image:'table.jpg',action:''},
                    {name:'bar',image:'bar.png',action:''},
                    {name:'line',image:'line.png',action:''},
                    {name:'combined',image:'combined.jpg',action:''},
                    {name:'column',image:'column.png',action:''},
                    {name:'area',image:'area.jpg',action:''},
                    {name:'pie',image:'pie.png',action:''}
                ],
                dataSource:'dhis',
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
                            rotation: -70,
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
                title:'NTLP DATA',
                description:'NTLP DATA',
                cardClass:"col m12 s12",
                cardSize:"medium",
                data:'UHDfKY2mUOQ;ykDbDeDvTcx;ZOkoQ7BtbVQ;IzUZXETYoyB',
                icons:[
                    {name:'table',image:'table.jpg',action:''},
                    {name:'bar',image:'bar.png',action:''},
                    {name:'line',image:'line.png',action:''},
                    {name:'combined',image:'combined.jpg',action:''},
                    {name:'column',image:'column.png',action:''},
                    {name:'area',image:'area.jpg',action:''},
                    {name:'pie',image:'pie.png',action:''}
                ],
                dataSource:'etl',
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
                            rotation: -70,
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
        ];
        $scope.preparecompletenesData = function(jsonObject,card){
            var structure = {};
            var data = [];
            var elements = [];
            var arr = card.data.split(";")
            angular.forEach(arr,function(val){
                elements.push({'name':jsonObject.metaData.names[val],'uid':val})
            });

            angular.forEach(jsonObject.metaData.ou,function(region){
                data.push({'name':jsonObject.metaData.names[region],'id':region});
            });
            structure.regions = data;
            structure.elements = elements;
            return structure;

        };

        $scope.downloadcompletenesExcel = function(card){
            var url = "";
            if(card.dataSource == 'etl'){
                if($scope.selectedOrgUnit == "m0frOspS7JY"){
                    url = "https:/etl.moh.go.tz/dhis/api/analytics.csv?dimension=dx:"+card.data+"&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx;hENn80Fmmlf&rows=ou";
                }else{
                    url = "https://etl.moh.go.tz/dhis/api/analytics.csv?dimension=dx:"+card.data+"&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx;hENn80Fmmlf&rows=ou";
                }
            }else if(card.dataSource == 'dhis'){
                if($scope.selectedOrgUnit == "m0frOspS7JY"){
                    url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:"+card.data+"&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx;hENn80Fmmlf&rows=ou";
                }else{
                    url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:"+card.data+"&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx;hENn80Fmmlf&rows=ou";
                }
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

        $scope.changecompletenesChart = function($event,type,card){
            card.displayTable = false;
            var parent = angular.element($event.target).parent().parent().parent().prev('div');
            $scope.showReport = true;
            if(type == 'table'){
                parent.css('overflow','scroll');
                card.displayTable = true;
                card.chart = type;
            }
            else{
                parent.removeAttr( 'style' );
                card.displayTable = false;
                card.chart = type;
            }
            $scope.preparecompletenesSeries(card,type);
        };

        $scope.preparecompletenesSeries = function(cardObject,chart){
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

            $scope.area = [];
            if(cardObject.dataSource == 'etl'){
                if($scope.selectedOrgUnit == "m0frOspS7JY"){
                    $scope.url = "https://etl.moh.go.tz/dhis/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
                }else{
                    $scope.url = "https://etl.moh.go.tz/dhis/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
                }
            }else if(cardObject.dataSource == 'dhis'){
                if($scope.selectedOrgUnit == "m0frOspS7JY"){

                    $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-2;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
                }else{
                    $scope.url = "https://dhis.moh.go.tz/api/analytics.json?dimension=dx:"+cardObject.data+"&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
                }
            }

            cardObject.chartObject.loading = true;
            $http.get($scope.url,{withCredentials: true, params : {
                j_username: "portal",
                j_password: "Portal123"

            }}).success(function(data){
                var useThisData = $scope.preparecompletenesData(data,cardObject);
                angular.forEach(useThisData.regions,function(value){
                    $scope.area.push(value.name);
                });
                $scope.subCategory = useThisData.elements;
                cardObject.chartObject.xAxis.categories = $scope.area;

                $scope.normalseries = [];
                if($scope.data.chartType == "pie"){
                    delete cardObject.chartObject.chart;
                    var serie = [];
                    angular.forEach(useThisData.elements,function(value){
                        angular.forEach(useThisData.regions,function(val){
                            var number = $scope.getcompletenesDataFromUrl(data.rows,val.id,value.uid);

                            serie.push({name: value.name+" - "+ val.name , y: parseInt(number)})
                        });
                    });
                    $scope.normalseries.push({type: chart, name:$scope.UsedName , data: serie,showInLegend: true,
                        dataLabels: {
                            enabled: false
                        } })
                    cardObject.chartObject.series = $scope.normalseries;
                }
                else if(chart == "combined"){
                    delete cardObject.chartObject.chart;
                    var serie1 = [];
                    angular.forEach(useThisData.elements,function(value){
                        var serie = [];

                        angular.forEach(useThisData.regions,function(val){
                            var number = $scope.getcompletenesDataFromUrl(data.rows,val.id,value.uid);
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
                    cardObject.chartObject.series = $scope.normalseries;
                }
                else if(chart == 'table'){
                    cardObject.table ={}
                    cardObject.table.headers = [];
                    cardObject.table.colums =[];
                    angular.forEach(useThisData.elements,function(value){
                        var serie = [];
                        cardObject.table.headers.push(value.name);
                    });
                    angular.forEach(useThisData.regions,function(val){
                        var seri = [];
                        angular.forEach(useThisData.elements,function(value){
                            var number = $scope.getcompletenesDataFromUrl(data.rows,val.id,value.uid);
                            seri.push({name:value.name,value:parseInt(number)});
                        });
                        cardObject.table.colums.push({name:val.name,values:seri});
                    });
                }
                else{
                    delete cardObject.chartObject.chart;
                    angular.forEach(useThisData.elements,function(value){
                        var serie = [];
                        angular.forEach(useThisData.regions,function(val){
                            var number = $scope.getcompletenesDataFromUrl(data.rows,val.id,value.uid);
                            serie.push(number);
                        });
                        $scope.normalseries.push({type: chart, name: value.name, data: serie})
                    });
                    cardObject.chartObject.series = $scope.normalseries;
                }
                cardObject.chartObject.loading = false
            });

        };
        $scope.getcompletenesDataFromUrl  = function (arr,ou,de){
            var num = 0
            $.each(arr,function(k,v){
                if(v[1] == ou && v[0] == de ){
                    num = parseInt(v[2])
                }
            });
            return num;
        }

        $rootScope.firstClick1 = function(){
            $scope.preparejinsiSeries();
            $scope.prepareSeries();
            angular.forEach($scope.cards.malaria,function(value){
                $scope.preparecompletenesSeries(value,value.chart);
            });
        }
        $scope.firstClick1();

    });
