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

        onSayButtonPress() {
          // show a native JavaScript alert

            //read msg from i18n Model

            var OBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = OBundle.getText("helloMsg",[sRecipient])

          MessageToast.show(sMsg)
       },


    });
 });