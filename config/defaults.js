define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "4c7264ed543847a39e057d36a1ebc376",
    "form_layer": {
        "id": ""
    },
    "details": {
        "Title": "North Carolina Broadband",
        "Logo": "",
        "Description": "Non Service "
    },
    //"fields": {
    //},
    "fields": {
        "NonServiceLocations_6171": [{
          "name": "U_ADD",
          "alias": "User Physical Address",
          "fieldDescription": "User Physical Address", // help text
          "visible": false, // show this field?
          "typeField": false, // subtype field?
          //"tooltip": "test@test.com", // placeholder text
          //"displayType": "email" // text, checkbox, radio, textarea, url, email

        },
        { "name": "EMAIL","alias": "Email","fieldDescription": "Let us contact you.","visible": true,"tooltip": "john.doe@test.com","displayType": "email",},
        {  "name": "CONTR_SPEED","alias": "Contractual Broadband Speed","fieldDescription": "Your contractual speed. Please enter numeric values. If no service leave blank.","visible": true,"tooltip": "25.63","displayType": "text",},
        {  "name": "SPEED_DELIV","alias": "Broadband Speed Delivered","fieldDescription": "Actual Speed Delivered from speed test. Please enter numeric values. If no service leave blank.","visible": true, "tooltip": "25.63", "displayType": "text",},
        {  "name": "API_ADD","alias": "API_ADD","fieldDescription": "API_ADD","visible": false,},
      ]
    },


    "theme": "darkly", // see values in themes.js
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    // //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    "units": null,
    "useSmallHeader": true,
    "enableSharing": false,
    "defaultMapExtent": true,
    "pushpinColor": "red",
    "nextBasemap": "hybrid",
    "defaultBasemap": "streets",
    //"defaultBasemap": "satellite",
    "selectedTitleField": {},
    "disableViewer": true,
    "enableAttachments": false,
    "attachmentIsRequired": false,
    "attachmentLabel": "",
    "attachmentHelpText": "",
    "showLayer": false,
    "disableLogo": true,
    "enableBasemapToggle": true,
    "enableOfflineSupport": true,
    "locate":false,
    "locationSearchOptions": {
        "enableMyLocation": false,
        "enableSearch": true,
        "enableLatLng": true,
        "enableUSNG": false,
        "enableMGRS": false,
        "enableUTM": false
    },
    "locationSearch": true,
    //When searchExtent is true the locator will prioritize results within the current map extent.
    "searchExtent": true,
    "searchLayers":[{
        "id": "",
        "fields": []
    }],
    "attachmentInfo":{
    },
    "submitButtonText": "",
    "viewSubmissionsText": "",
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    },
    "bitlyLogin": "arcgis",
    "bitlyKey": "R_b8a169f3a8b978b9697f64613bf1db6d"
});
