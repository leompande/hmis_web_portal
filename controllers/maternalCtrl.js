/**
 * Created by kelvin on 10/20/15.
 */

angular.module("hmisPortal")
    .config(function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    })
<<<<<<< HEAD
    .controller("maternalCtrl",function ($rootScope,$scope,$http,$location,$timeout,mapService) {
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
=======
    .controller("maternalCtrl",function ($rootScope,$scope,$http,$location,$timeout,olData,olHelpers,shared,portalService) {
        //displaying loading during page change
        $rootScope.$on("$routeChangeStart",
            function (event, current, previous, rejection) {
                $rootScope.showLoader = true;
            });
        $rootScope.$on("$routeChangeSuccess",
            function (event, current, previous, rejection) {
                $rootScope.showLoader = false
            });
        $scope.cards = {};
        $scope.data = {};
        portalService.orgUnitId = "m0frOspS7JY";
        portalService.period = "2014";
>>>>>>> b345a9a3d0eeaa7d6400bcdaac2475d24181c58b
        $scope.selectedOrgUnitLevel = "2";

        $scope.cards.malaria = [{
            title:'Antenatal Care Coverage',
            description:'Antenatal Care Coverage',
            cardClass:"col s12 m6",
            data:'XjbKrjgOFMp',
            icons:angular.copy(portalService.icons),
            displayTable:false,
            displayMap:false,
            chart:'bar',
            chartObject:angular.copy(portalService.chartObject)

        },
            {
                title:'ANC 4th Visit Coverage',
                description:'ANC 4th Visit Coverage',
                cardClass:"col m6 s12",
                cardSize:"medium",
                data:'QiA9L6tNHFy',
                icons:angular.copy(portalService.icons),
                displayTable:false,
                displayMap:false,
                chart:'line',
                chartObject:angular.copy(portalService.chartObject)

            },
            {
                title:' ANC 1st Visit before 12 weeks rate',
                description:' ANC 1st Visit before 12 weeks rate',
                cardClass:"col m12 s12",
                data:'TRoamv0YPt3',
                icons:angular.copy(portalService.icons),
                displayTable:false,
                displayMap:false,
                chart:'combined',
                chartObject:angular.copy(portalService.chartObject)

            },
            {
                title:'ANC De- worming rate',
                description:'ANC De- worming rate',
                cardClass:"col m6 s12",
                data:'ovRcOHNO7qZ',
                icons:angular.copy(portalService.icons),
                displayTable:false,
                displayMap:false,
                chart:'table',
                chartObject:angular.copy(portalService.chartObject)

            },
            {
                title:'ANC Syphilis prevelance',
                description:'ANC Syphilis prevelance',
                cardClass:"col m6 s12",
                data:'aEcdPpCOi3k',
                icons:angular.copy(portalService.icons),
                displayTable:false,
                displayMap:false,
                chart:'map',
                chartObject:angular.copy(portalService.chartObject)

            },
            {
                title:'ANC Coverage for women under 20 years',
                description:'ANC Coverage for women under 20 years',
                cardClass:"col m12 s12",
                data:'JeIe5FgaGTX',
                icons:angular.copy(portalService.icons),
                displayTable:false,
                displayMap:false,
                chart:'combined',
                chartObject:angular.copy(portalService.chartObject)

            },
            {
                title:'ANC HIV Prevelance ( 15 - 24)',
                description:'ANC HIV Prevelance ( 15 - 24)',
                cardClass:"col m6 s12",
                data:'TdxVgoa08tn',
                icons:angular.copy(portalService.icons),
                displayTable:false,
                displayMap:false,
                chart:'area',
                chartObject:angular.copy(portalService.chartObject)

            },
            {
                title:'Health Facility Delivery Rate',
                description:'Health Facility Delivery Rate',
                cardClass:"col m6 s12",
                data:'OLWz8aiTGYd',
                icons:angular.copy(portalService.icons),
                displayTable:false,
                displayMap:false,
                chart:'bar',
                chartObject:angular.copy(portalService.chartObject)

            },
            {
                title:'Contraceptive  prevalence rate',
                description:'Contraceptive  prevalence rate',
                cardClass:"col m6 s12",
                data:'lcOiUC6RdPw',
                icons:angular.copy(portalService.icons),
                displayTable:false,
                displayMap:false,
                chart:'line',
                chartObject:angular.copy(portalService.chartObject)

            },
            {
                title:'Deliveries by skilled attendants',
                description:'Deliveries by skilled attendants',
                cardClass:"col m6 s12",
                data:'vVRVLjgU10c',
                icons:angular.copy(portalService.icons),
                displayTable:false,
                displayMap:false,
                chart:'pie',
                chartObject:angular.copy(portalService.chartObject)

            }
        ];

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
            portalService.prepareSeries(card,$scope.data.chartType);
        };

        $scope.downloadExcel = function(id){
            var base = "https://dhis.moh.go.tz/";
            $.post( base + "dhis-web-commons-security/login.action?authOnly=true", {
                j_username: "portal", j_password: "Portal123"
            },function(){
                var url = "";
                if($scope.selectedOrgUnit == "m0frOspS7JY"){
                    url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:"+id+"&dimension=pe:"+$scope.selectedPeriod+"&dimension=ou:LEVEL-1;LEVEL-2;"+$scope.selectedOrgUnit+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=pe;ou";
                }else{
                    url = "https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:"+id+"&dimension=pe:"+$scope.selectedPeriod+"&dimension=ou:LEVEL-2;LEVEL-3;"+$scope.selectedOrgUnit+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=pe;ou";
                }
                $http.get(url,{'Content-Type': 'application/csv;charset=UTF-8'}).success(function(data){
                    var a = document.createElement('a');
                    var blob = new Blob([data]);
                    a.href = window.URL.createObjectURL(blob);
                    a.download = "data.xls";
                    a.click();
                });
            });
        }

<<<<<<< HEAD
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
=======
        $scope.lastCard=function(){
            var base = "https://dhis.moh.go.tz/";
            $.post( base + "dhis-web-commons-security/login.action?authOnly=true", {
                j_username: "portal", j_password: "Portal123"
            },function(){
                if($scope.selectedOrgUnit == "m0frOspS7JY"){
                    var lastUrl="https://dhis.moh.go.tz/api/analytics.json?dimension=dx:TRoamv0YPt3;WAdaCligbNP;ykShMtNgDB1;XjbKrjgOFMp;QiA9L6tNHFy;yqA1CfsfBHQ;ovRcOHNO7qZ;m1PpRCnZF4l;JeIe5FgaGTX;aEcdPpCOi3k;VSXdXdsSUd3;PmSZNZHac3t;TdxVgoa08tn;F99dNfvn18N;s4zyCyJ7EjQ;OLWz8aiTGYd;kLI4iGDbN3p;vVRVLjgU10c;DPLR0aQemYC&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
                }else{
                    var lastUrl="https://dhis.moh.go.tz/api/analytics.json?dimension=dx:TRoamv0YPt3;WAdaCligbNP;ykShMtNgDB1;XjbKrjgOFMp;QiA9L6tNHFy;yqA1CfsfBHQ;ovRcOHNO7qZ;m1PpRCnZF4l;JeIe5FgaGTX;aEcdPpCOi3k;VSXdXdsSUd3;PmSZNZHac3t;TdxVgoa08tn;F99dNfvn18N;s4zyCyJ7EjQ;OLWz8aiTGYd;kLI4iGDbN3p;vVRVLjgU10c;DPLR0aQemYC&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME";
>>>>>>> b345a9a3d0eeaa7d6400bcdaac2475d24181c58b
                }
                $http.get(lastUrl).success(function(dataTable){
                    var generalArray=[];
                    var underOne="ANC 1st Visit Before 12 weeks rate";
                    var undertwo="Hudhurio la Kwanza ANC Ujauzito chini ya Wiki 12";
                    var underpop="Idadi ya Watu";
                    var underthree="Antenatal care coverage";
                    var underfour="ANC 4th visits Coverage";
                    var underANC="Wajawazito Hudhurio la nne";
                    var underDe="ANC de-worming rate";
                    var underMeb="Wajawazito Waliopewa Dawa ya minyoo (Mebendazole / Albendazole )";
                    var underCov="ANC Coverage for Women of Under 20 years";
                    var underSy="ANC Syphilis Prevalance";
                    var underSyP="Wajawazito Wenye Maambukizi ya Kaswende";
                    var underSyT="Wajawazito Waliopima Kaswende";
                    var underHIV="ANC HIV prevalence (15-24 years)";
                    var underHIVTest="Waliokutwa na Maambukizi ya VVU-Umri Chini ya Miaka 25";
                    var underHIVTestDone="Wajawazito waliopimwa VVU kipimo cha kwanza chini ya umri wa miaka 25";
                    var underHIVTestRate="Health Facility Delivery Rate";
                    var underHIVTestDev="Waliojifungulia kituoni";
                    var underHIVTestDevS="Deliveries by skilled attendants";
                    var underHIVTestDevP="Waliozalishwa na Watoa Huduma Wenye Ujuzi";
                    $scope.arrayed=[{'underOne':'ANC 1st Visit Before 12 weeks rate','undertwo':'ANC First Visit Attendances','underpop':'Population',
                        'underthree':'Antenatal care coverage','underfour':'ANC 4th Visit Coverage',
                        'underANC': 'ANC 4th Visit','underDe':'ANC de-worming rate','underMeb':'ANC mebendazole tablets given',
                        'underCov':'ANC Coverage for Women of Under 20 years','underSy':'ANC Syphilis Prevalance',
                        'underSyP':'ANC Syphilis Positive','underSyT':'ANC Syphilis Tested','underHIV':'ANC HIV prevalence (15-24 years)',
                        'underHIVTest':'ANC HIV tests positive (15-24 years)','underHIVTestDone':'ANC HIV test done','underHIVTestRate':'Health Facility Delivery Rate',
                        'underHIVTestDev':'Deliveries at health facilities','underHIVTestDevS':'Deliveries by skilled attendants',
                        'underHIVTestDevP':'Deliveries by skilled personnel'
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
                            underHIVTestDevP:underHIVTestDevPObject(underHIVTestDevP,dataTable,dataTable.rows,region)
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
            });

        }
        $scope.downloadExcelMaternalTotal = function(){
            var base = "https://dhis.moh.go.tz/";
            $.post( base + "dhis-web-commons-security/login.action?authOnly=true", {
                j_username: "portal", j_password: "Portal123"
            },function(){
                if($scope.selectedOrgUnit == "m0frOspS7JY"){
                    var lastUrl="https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:i47jm4Pkkq6;vfaY7k6TINl;tit1C1VPIV7;aw1jQ1tJTmE&dimension=ou:LEVEL-2;m0frOspS7JY&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=ou";
                }else{
                    var lastUrl="https://dhis.moh.go.tz/api/analytics.csv?dimension=dx:i47jm4Pkkq6;vfaY7k6TINl;tit1C1VPIV7;aw1jQ1tJTmE&dimension=ou:LEVEL-3;"+$scope.selectedOrgUnit+"&filter=pe:"+$scope.selectedPeriod+"&displayProperty=NAME&tableLayout=true&columns=dx&rows=ou";
                }
                $http.get(lastUrl,{'Content-Type': 'application/csv;charset=UTF-8'}).success(function(data){
                    var a = document.createElement('a');
                    var blob = new Blob([data]);
                    a.href = window.URL.createObjectURL(blob);
                    a.download = "data.xls";
                    a.click();
                });
            });
        }


        $rootScope.firstClick = function(){
            angular.forEach($scope.cards.malaria,function(value){
//              $scope.data.chartType = value.chart;
                portalService.prepareSeries(value,value.chart);
            });
            $scope.lastCard();
        }
        $scope.firstClick();




        /**
         *
         * DRAW MAP
         * */
        map.drawMap = function(parentUid,level,card){
            mapService.renderMap();
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
var underHIVTestDevPObject=function(underHIVTestDevP,ObjectNames,ObectData,orgUnits){
    var num='';
    angular.forEach(ObectData,function(value) {
        if(value[1]==orgUnits) {
            if (ObjectNames.metaData.names[value[0]].indexOf(underHIVTestDevP) >= 0) {
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