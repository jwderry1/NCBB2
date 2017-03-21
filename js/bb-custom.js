
   // will not run until DOM is finished loading
    dojo.require("esri/tasks/Date");
    dojo.require("dojo/date/locale");
   function captureGeoCodeOutputResults() {
      //window.alert(dojo.byId("search-widget_input").value);
      var user_return =  (dojo.byId("search-widget_input").value);
      var createDate = Date.now();


      //window.alert(lati);
      //window.alert(typeof lati);
      //window.alert(typeof matchAdress);

      //window.alert(lat);
      //window.alert(lng);
        //intfLayerObjID = parseInt(fLayerObjId);

        var updateFeaturesUrl = 'https://services.nconemap.gov/secure/rest/services/NCBB/NonServiceLocations/FeatureServer/0/updateFeatures?features='
        var jsonString = {"OBJECTID":fLayerObjId,"U_ADD":user_return,"API_ADD":matchAdress,"SCORE":matchScore,"DATE":createDate,"LONGITUDE":longi,"LATITUDE":lati};
        var second = JSON.stringify(jsonString);
        //  window.alert(second);
        var updateAttributesUrl1 = '[{"attributes":' + second + '}]'


      //test Update
      //var updateAttributesUrl1 = '[{"attributes":{"OBJECTID": 4012,"SCORE":50 }}]'
        var obj1 = encodeURIComponent(updateAttributesUrl1);

        var theUrl1 = updateFeaturesUrl + obj1;

        var xmlHttp = null;

        xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", theUrl1, false );
        xmlHttp.send( null );



  };
