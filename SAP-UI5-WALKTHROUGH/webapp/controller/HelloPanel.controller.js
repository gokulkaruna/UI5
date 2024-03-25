sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
 ], (Controller,
	MessageToast,
	Fragment) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
       onShowHello() {
          // read msg from i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);
 
          // show message
          MessageToast.show(sMsg);
       },
       onOpenDialog() {
			// create dialog lazily
			this.pDialog ??= this.loadFragment({
				name: "ui5.walkthrough.view.HelloDialog"
			});

			this.pDialog.then((oDialog) => oDialog.open());
		},

       onCloseDialog:function(){
         this.byId("helloDialog").close();
       }
    });
 });