sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent,
	JSONModel,
	ResourceModel) {
	'use strict';

	return UIComponent.extend("ui5.walkthrough.Component",{
		metadata : {
			manifest : "json"
		},

		init: function () {
			//call ini tog parent
		
			UIComponent.prototype.init.apply(this,arguments);	
			
			var oData = {
				recipient: {
					name :"Goku"
				}
			};

			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			//set i18n model on view
			// var  i18nModel = new ResourceModel({
			// 	bundleName :"ui5.walkthrough.i18n.i18n",
			// 	supporteLocale : [""],
			// 	fallbackLocale : ""
			// });
			// this.setModel(i18nModel,"i18n");
		
		}
	});
	
});