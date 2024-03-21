sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

 ], (Controller,
	MessageToast,
	JSONModel,
	ResourceModel) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.App", {
               /**
        * @override
            */
        onInit: function() {
            // Controller.prototype.onInit.apply(this, arguments);
            var oData = {
                recipient: {
                    name :"UI5"
                }
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            //set i18n model on view
            var  i18nModel = new ResourceModel({
                bundleName :"ui5.walkthrough.i18n.i18n",
                supporteLocales : [""],
                fallbackLocales : [""]
            });
            this.getView().setModel(i18nModel,"i18n");

        },



       onShowHello() {

            //read msg from i18n Model

            var OBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = OBundle.getText("helloMsg",[sRecipient])


          // show a native JavaScript alert
          MessageToast.show(sMsg)
       },


    });
 });