/**
 * Created by kelvin on 10/21/15.
 */

/**
 * Created by kelvin on 10/20/15.
 */

angular.module("hmisPortal")
    .config(function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    })
    .controller("tracermedicineCtrl",function ($rootScope,$scope,$http,$location,$timeout,mapService) {
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

        $scope.cards.malaria = [{
            title:'Total Tracers available',
            description:'Total Tracers available',
            cardClass:"col s12 m12",
            data:'PlatsD7r6BI',
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
            chart:'bar',
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
                title:'Normal saline Availability',
                description:'Normal saline Availability',
                cardClass:"col m6 s12",
                cardSize:"medium",
                data:'Y6gfcTiQcis',
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
                title:'Disposable Syringe Availability',
                description:'Disposable Syringe Availability',
                cardClass:"col m6 s12",
                data:'sZYr1CWDW8Y',
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
                title:'Depo-Prover Availability',
                description:'Depo-Prover Availability',
                cardClass:"col m6 s12",
                data:'TFORL9LBEDP',
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

            },
            {
                title:'Oral Rehydration Availability',
                description:'Oral Rehydration Availability',
                cardClass:"col m6 s12",
                data:'Y0HAPpe3X8A',
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
                chart:'map',
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
                title:'Penta Valent Availability',
                description:'Penta Valent Availability',
                cardClass:"col m12 s12",
                data:'BRS6sUj8FJa',
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
                title:'Albendazole Availability',
                description:'Albendazole Availability',
                cardClass:"col m6 s12",
                data:'AHcdWDFaeZi',
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
                chart:'area',
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
                title:'Ergometrine Availability',
                description:'Ergometrine Availability',
                cardClass:"col m6 s12",
                data:'EX233CR1k1T',
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
                chart:'bar',
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
                title:'Amoxycillin Availability',
                description:'Amoxycillin Availability',
                cardClass:"col m6 s12",
                data:'KxS8b24bAZC',
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
                title:'Artemether / Lumefantrine Oral Available',
                description:'Artemether / Lumefantrine Oral Available',
                cardClass:"col m6 s12",
                data:'wjGjt5bacv6',
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
                chart:'pie',
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
                title:'Mean number of Tracers available By Quarter',
                description:'Mean number of Tracers available By Quarter',
                cardClass:"col m12 s12",
                data:'YKtXjwwuFA3',
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
                title:'Mean Parastatal Facility Tracers available By Quarter',
                description:'Mean Parastatal Facility Tracers available By Quarter',
                cardClass:"col m6 s12",
                data:'UCmAgEwrtnL',
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
                title:'Mean FBO Facility Tracers available By Quarter',
                description:'Mean FBO Facility Tracers available By Quarter',
                cardClass:"col m6 s12",
                data:'eRGYpbsCTjL',
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
                chart:'area',
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
                title:'Mean Public Facility Tracers available By Quarter',
                description:'Mean Public Facility Tracers available By Quarter',
                cardClass:"col m6 s12",
                data:'GfA6IHXRUyb',
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
                chart:'map',
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
                title:'Mean Private Facility Tracers available By Quarter',
                description:'Mean Private Facility Tracers available By Quarter',
                cardClass:"col m6 s12",
                data:'TJKlz62awvr',
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
                chart:'pie',
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
            $http.get(url,{withCredentials: true,'Content-Type': 'application/csv;charset=UTF-8'}).success(function(data){
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
            $http.get($scope.url,{withCredentials: true}).success(function(data){
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
                var lastUrl="https://dhis.moh.go.tz/api/analytics.json?dimension=dx:PlatsD7r6BI;Y6gfcTiQcis;n0X9iB1Z5uS;R5wsRAcTOtA;sZYr1CWDW8Y;AT7PchtF6Jy;evvqSpYy99J;TFORL9LBEDP;gOnXFvuLClY;DPxobo6eezJ;Y0HAPpe3X8A;IctQGELdKnU;YdumyTaJeaY;BRS6sUj8FJa;sA9bxsRppLr;HKYab4TIAXs;AHcdWDFaeZi;Kj2VNr4bNmK;D9UegHR72F7;EX233CR1k1T;ySw4xVVyeJm;KhlPt64ioMc;KxS8b24bAZC;ZrjzeUlhXGt;W9g7M8URMFw;wjGjt5bacv6;cCCL5yNl301;P6nVr0o4O8O;YKtXjwwuFA3;UCmAgEwrtnL;eRGYpbsCTjL;GfA6IHXRUyb;TJKlz62awvr&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }else{
                var lastUrl="https://dhis.moh.go.tz/api/analytics.json?dimension=dx:PlatsD7r6BI;Y6gfcTiQcis;n0X9iB1Z5uS;R5wsRAcTOtA;sZYr1CWDW8Y;AT7PchtF6Jy;evvqSpYy99J;TFORL9LBEDP;gOnXFvuLClY;DPxobo6eezJ;Y0HAPpe3X8A;IctQGELdKnU;YdumyTaJeaY;BRS6sUj8FJa;sA9bxsRppLr;HKYab4TIAXs;AHcdWDFaeZi;Kj2VNr4bNmK;D9UegHR72F7;EX233CR1k1T;ySw4xVVyeJm;KhlPt64ioMc;KxS8b24bAZC;ZrjzeUlhXGt;W9g7M8URMFw;wjGjt5bacv6;cCCL5yNl301;P6nVr0o4O8O;YKtXjwwuFA3;UCmAgEwrtnL;eRGYpbsCTjL;GfA6IHXRUyb;TJKlz62awvr&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
            }
            $http.get(lastUrl,{withCredentials: true }).success(function(dataTable){
                var generalArray=[];
                var underOne="Total Tracers available";
                var undertwo="Normal saline Availability";
                var underpop="Normal Saline/Dextrose 5%/Dextrose Saline Iv Solution - Available";
                var underthree="Normal Saline/Dextrose 5%/Dextrose Saline Iv Solution - Eligible";
                var underfour="Disposable Syringe Availability";
                var underANC="Disposable Syringe And Needles - Available";
                var underDe="Disposable Syringe And Needles - Eligible";
                var underMeb="Depo-Prover Availability";
                var underCov="Depo - Provera Available";
                var underSy="Depo-Provera Eligible";
                var underSyP="Oral Rehydration Availability";
                var underSyT="Oral Rehydration Salts - Available";
                var underHIV="Oral Rehydration Salts - Eligible";
                var underHIVTest="Penta Valent Availability";
                var underHIVTestDone="Penta Valent – Available";
                var underHIVTestRate="Penta Valent - Eligible";
                var underHIVTestDev="Albendazole Availability";
                var underHIVTestDevS="Albendazole / Mebendazole Oral - Available";
                var underHIVTestDevP="Albendazole / Mebendazole Oral - Eligible";
                var underHIVTestDevPone="Ergometrine Availability";
                var underHIVTestDevPtwo="Ergometrine/Oxytocin Injectable/Misoprostol - Available";
                var underHIVTestDevPthree="Ergometrine/Oxytocin Injectable/Misoprostol - Eligible";
                var underHIVTestDevPfour="Amoxycillin Availability";
                var underHIVTestDevPfone="Amoxycillin / Cotrimoxazole oral Available";
                var underHIVTestDevPfive="Amoxycillin / Cotrimoxazole oral Eligible";
                var underHIVTestDevPsix="Artemether / Lumefantrine Oral Available";
                var underHIVTestDevPsev="Artemether / Lumefantrine Oral (ALU) - Available";
                var underHIVTestDevPeight="Artemether / Lumefantrine Oral (ALU) - Eligible";
                var underHIVTestDevPnine="Mean number of Tracers available By Quarter";
                var underHIVTestDevPtwenty="Mean Parastatal Facility Tracers available By Quarter";
                var underHIVTestDevPtwentyOne="Mean FBO Facility Tracers available By Quarter";
                var underHIVTestDevPtwentytwo="Mean Public Facility Tracers available By Quarter";
                var underHIVTestDevPtwentythree="Mean Private Facility Tracers available By Quarter";
                $scope.arrayed=[{'underOne':'Total Tracers available','undertwo':'Normal saline Availability','underpop':'Normal Saline/Dextrose 5%/Dextrose Saline Iv Solution - Available',
                    'underthree':'Normal Saline/Dextrose 5%/Dextrose Saline Iv Solution - Eligible','underfour':'Disposable Syringe Availability',
                    'underANC': 'Disposable Syringe And Needles - Available',
                    'underDe':'Disposable Syringe And Needles - Eligible','underMeb':'Depo-Prover Availability',
                    'underCov':'Depo - Provera Available','underSy':'Depo-Provera Eligible',
                    'underSyP':'Oral Rehydration Availability','underSyT':'Oral Rehydration Salts - Available','underHIV':'Oral Rehydration Salts - Eligible',
                    'underHIVTest':'Penta Valent Availability','underHIVTestDone':'Penta Valent - Available','underHIVTestRate':'Penta Valent - Eligible',
                    'underHIVTestDev':'Albendazole Availability','underHIVTestDevS':'Albendazole / Mebendazole Oral- Available',
                    'underHIVTestDevP':'Albendazole / Mebendazole Oral - Eligible','underHIVTestDevPone':'Ergometrine Availability',
                    'underHIVTestDevPtwo':'Ergometrine/Oxytocin Injectable/Misoprostol - Available',
                    'underHIVTestDevPthree':'Ergometrine/Oxytocin Injectable/Misoprostol - Eligible',
                    'underHIVTestDevPfour':'Amoxycillin Availability',
                    'underHIVTestDevPfone':'Amoxycillin / Cotrimoxazole oral Available','underHIVTestDevPfive':'Amoxycillin / Cotrimoxazole oral Eligible',
                    'underHIVTestDevPsix':'Artemether / Lumefantrine Oral Available','underHIVTestDevPsev':'Artemether / Lumefantrine Oral (ALU) - Available',
                    'underHIVTestDevPeight':'Artemether / Lumefantrine Oral (ALU) - Eligible','underHIVTestDevPnine':'Mean number of Tracers available By Quarter',
                    'underHIVTestDevPtwenty':'Mean Parastatal Facility Tracers available By Quarter','underHIVTestDevPtwentyOne':'Mean FBO Facility Tracers available By Quarter',
                    'underHIVTestDevPtwentytwo':'Mean Public Facility Tracers available By Quarter','underHIVTestDevPtwentythree':'Mean Private Facility Tracers available By Quarter'
                  }];
                angular.forEach(dataTable.metaData.ou,function(region){
                    generalArray.push({"orgUnit":dataTable.metaData.names[region],underOne:ogUnitsObjectConstruct(underOne,dataTable,dataTable.rows,region),
                        undertwo:undertwoObject(undertwo,dataTable,dataTable.rows,region),underpop:underpopObject(underpop,dataTable,dataTable.rows,region),
                        underthree:underthreeObject(underthree,dataTable,dataTable.rows,region),underfour:underfourObject(underfour,dataTable,dataTable.rows,region),
                        underANC:underANCObject(underANC,dataTable,dataTable.rows,region),
                        underDe:underDeObject(underDe,dataTable,dataTable.rows,region),underMeb:underMebObject(underMeb,dataTable,dataTable.rows,region),
                        underCov:underCovObject(underCov,dataTable,dataTable.rows,region),underSy:underSyObject(underSy,dataTable,dataTable.rows,region),
                        underSyP:underSyPObject(underSyP,dataTable,dataTable.rows,region),underSyT:underSyTObject(underSyT,dataTable,dataTable.rows,region),
                        underHIV:underHIVObject(underHIV,dataTable,dataTable.rows,region),underHIVTest:underHIVTestObject(underHIVTest,dataTable,dataTable.rows,region),
                        underHIVTestDone:underHIVTestDoneObject(underHIVTestDone,dataTable,dataTable.rows,region),underHIVTestRate:underHIVTestRateObject(underHIVTestRate,dataTable,dataTable.rows,region),
                        underHIVTestDev:underHIVTestDevObject(underHIVTestDev,dataTable,dataTable.rows,region),underHIVTestDevS:underHIVTestDevSObject(underHIVTestDevS,dataTable,dataTable.rows,region),
                        underHIVTestDevP:underHIVTestDevPObject(underHIVTestDevP,dataTable,dataTable.rows,region),
                        underHIVTestDevPone:underHIVTestDevPoneObject(underHIVTestDevPone,dataTable,dataTable.rows,region),
                        underHIVTestDevPtwo:underHIVTestDevPtwoObject(underHIVTestDevPtwo,dataTable,dataTable.rows,region),
                        underHIVTestDevPthree:underHIVTestDevPthreeObject(underHIVTestDevPthree,dataTable,dataTable.rows,region),
                        underHIVTestDevPfour:underHIVTestDevPfourObject(underHIVTestDevPfour,dataTable,dataTable.rows,region),
                        underHIVTestDevPfone:underHIVTestDevPfoneObject(underHIVTestDevPfone,dataTable,dataTable.rows,region),
                        underHIVTestDevPfive:underHIVTestDevPfiveObject(underHIVTestDevPfive,dataTable,dataTable.rows,region),
                        underHIVTestDevPsix:underHIVTestDevPsixObject(underHIVTestDevPsix,dataTable,dataTable.rows,region),
                        underHIVTestDevPsev:underHIVTestDevPsevObject(underHIVTestDevPsev,dataTable,dataTable.rows,region),
                        underHIVTestDevPeight:underHIVTestDevPeightObject(underHIVTestDevPeight,dataTable,dataTable.rows,region),
                        underHIVTestDevPnine:underHIVTestDevPnineObject(underHIVTestDevPnine,dataTable,dataTable.rows,region),
                        underHIVTestDevPtwenty:underHIVTestDevPtwentyObject(underHIVTestDevPtwenty,dataTable,dataTable.rows,region),
                        underHIVTestDevPtwentyOne:underHIVTestDevPtwentyOneObject(underHIVTestDevPtwentyOne,dataTable,dataTable.rows,region),
                        underHIVTestDevPtwentytwo:underHIVTestDevPtwentytwoObject(underHIVTestDevPtwentytwo,dataTable,dataTable.rows,region),
                        underHIVTestDevPtwentythree:underHIVTestDevPtwentythreeObject(underHIVTestDevPtwentythree,dataTable,dataTable.rows,region)
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
        $scope.downloadExcelMedicineTotal = function(){
            if($scope.selectedOrgUnit == "m0frOspS7JY"){
                var lastUrl="https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:PlatsD7r6BI;Y6gfcTiQcis;n0X9iB1Z5uS;R5wsRAcTOtA;sZYr1CWDW8Y;AT7PchtF6Jy;evvqSpYy99J;TFORL9LBEDP;gOnXFvuLClY;DPxobo6eezJ;Y0HAPpe3X8A;IctQGELdKnU;YdumyTaJeaY;BRS6sUj8FJa;sA9bxsRppLr;HKYab4TIAXs;AHcdWDFaeZi;Kj2VNr4bNmK;D9UegHR72F7;EX233CR1k1T;ySw4xVVyeJm;KhlPt64ioMc;KxS8b24bAZC;ZrjzeUlhXGt;W9g7M8URMFw;wjGjt5bacv6;cCCL5yNl301;P6nVr0o4O8O;YKtXjwwuFA3;UCmAgEwrtnL;eRGYpbsCTjL;GfA6IHXRUyb;TJKlz62awvr&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=ou";
            }else{
                var lastUrl="https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:PlatsD7r6BI;Y6gfcTiQcis;n0X9iB1Z5uS;R5wsRAcTOtA;sZYr1CWDW8Y;AT7PchtF6Jy;evvqSpYy99J;TFORL9LBEDP;gOnXFvuLClY;DPxobo6eezJ;Y0HAPpe3X8A;IctQGELdKnU;YdumyTaJeaY;BRS6sUj8FJa;sA9bxsRppLr;HKYab4TIAXs;AHcdWDFaeZi;Kj2VNr4bNmK;D9UegHR72F7;EX233CR1k1T;ySw4xVVyeJm;KhlPt64ioMc;KxS8b24bAZC;ZrjzeUlhXGt;W9g7M8URMFw;wjGjt5bacv6;cCCL5yNl301;P6nVr0o4O8O;YKtXjwwuFA3;UCmAgEwrtnL;eRGYpbsCTjL;GfA6IHXRUyb;TJKlz62awvr&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=ou";
            }
            $http.get(lastUrl,{withCredentials: true,'Content-Type': 'application/csv;charset=UTF-8'}).success(function(data){
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
var underpopObject=function(underpop,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underpop) >= 0) {
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
var underDeObject=function(underDe,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underDe) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underMebObject=function(underMeb,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underMeb) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underCovObject=function(underCov,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underCov) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underSyObject=function(underSy,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underSy) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underSyPObject=function(underSyP,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underSyP) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underSyTObject=function(underSyT,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underSyT) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVObject=function(underHIV,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIV) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestObject=function(underHIVTest,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTest) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDoneObject=function(underHIVTestDone,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDone) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestRateObject=function(underHIVTestRate,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestRate) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevObject=function(underHIVTestDev,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDev) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevSObject=function(underHIVTestDevS,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevS) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPoneObject=function(underHIVTestDevPone,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPone) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPtwoObject=function(underHIVTestDevPtwo,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPtwo) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPthreeObject=function(underHIVTestDevPthree,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPthree) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPfourObject=function(underHIVTestDevPfour,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPfour) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPfoneObject=function(underHIVTestDevPfone,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPfone) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPfiveObject=function(underHIVTestDevPfive,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPfive) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPsixObject=function(underHIVTestDevPsix,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPsix) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPsevObject=function(underHIVTestDevPsev,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPsev) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPeightObject=function(underHIVTestDevPeight,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPeight) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPnineObject=function(underHIVTestDevPnine,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPnine) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPtwentyObject=function(underHIVTestDevPtwenty,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPtwenty) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPtwentyOneObject=function(underHIVTestDevPtwentyOne,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPtwentyOne) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPtwentytwoObject=function(underHIVTestDevPtwentytwo,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPtwentytwo) >= 0) {
                num = value[2];
            }
        }
    });
    return num;
}
var underHIVTestDevPtwentythreeObject=function(underHIVTestDevPtwentythree,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevPtwentythree) >= 0) {
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