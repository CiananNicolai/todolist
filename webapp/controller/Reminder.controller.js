sap.ui.define([
	"sap/ui/core/library",
	"sap/ui/core/Fragment",
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/format/DateFormat",
	"sap/ui/model/json/JSONModel",
	"sap/ui/unified/library",
	"sap/m/library",
	"sap/m/MessageToast"
],
function(coreLibrary, Fragment, Controller, DateFormat, JSONModel, unifiedLibrary, mobileLibrary, MessageToast) {
	"use strict";

	var CalendarDayType = unifiedLibrary.CalendarDayType;
	var ValueState = coreLibrary.ValueState;
	var StickyMode = mobileLibrary.PlanningCalendarStickyMode;
    console.log("!!!!!!! ATTENTION VIEW 2 IS LOADING !!!!!!!!!!!");
    

	return Controller.extend("todolist.todolist.controller.Reminder", {
        

        onBeforeRendering: function() {
            jQuery.sap.log.error("A problem occurred!");
        },
        
        onAfterRendering: function() {
            debugger
        },
        

        
		onInit: function() {

            onPress: function (oEvent) {
                var ReminderAlert = this.getView().byId("btn2");
                if(ReminderAlert.getVisible()) {
                    ReminderAlert.setVisible(false);
               }
            }
        }
    },
});
