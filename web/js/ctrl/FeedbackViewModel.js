"use strict";

tutao.provide('tutao.tutanota.ctrl.FeedbackViewModel');

/**
 * The ViewModel for the feedback wizard.
 * @constructor
 */
tutao.tutanota.ctrl.FeedbackViewModel = function() {
	tutao.util.FunctionUtils.bindPrototypeMethodsToThis(this);

	this.message = ko.observable("");
    this.stack = ko.observable("");
	this.showDialog = ko.observable(false);

    var self = this;
    this.isErrorDialog = ko.computed(function() {
        if (self.stack()) {
            return true;
        } else {
            return false;
        }
    });
    this.title = ko.computed(function() {
        if (self.isErrorDialog()) {
            return "errorReport_label";
        } else {
            return "feedback_label";
        }
    });
    this.infoMessage = ko.computed(function() {
        if (self.isErrorDialog()) {
            return "feedbackErrorInfo_msg";
        } else {
            return "feedbackInfo_msg";
        }
    });
};

/**
 * @param {string=} stack
 */
tutao.tutanota.ctrl.FeedbackViewModel.prototype.open = function(stack) {
    if (stack) {
        this.stack(stack);
    } else {
        this.stack("");
    }
    this.message("");
    this.showDialog(true);
};

tutao.tutanota.ctrl.FeedbackViewModel.prototype.close = function() {
    this.showDialog(false);
};

tutao.tutanota.ctrl.FeedbackViewModel.prototype.sendFeedback = function() {
    var self = this;
    var attachments = [];
    var facade;
    var previousMessageId;
    if (tutao.locator.userController.isExternalUserLoggedIn()) {
        facade = tutao.tutanota.ctrl.SendMailFromExternalFacade;
        previousMessageId = ""; // dummy value for feedback mail
    } else {
        facade = tutao.tutanota.ctrl.SendMailFacade;
        previousMessageId = null;
    }
    var message = this.message()
        + "\n\n User agent: \n" + navigator.userAgent;
    if (this.isErrorDialog()) {
        message += "\n\n Stacktrace: \n" + this.stack();
    }
    message = message.split("\n").join("<br>");
    var recipient = new tutao.tutanota.ctrl.RecipientInfo("support@tutao.de", "");
    recipient.resolveType().then(function() {
        return facade.sendMail("Feedback", message, "", [recipient], [], [], tutao.entity.tutanota.TutanotaConstants.CONVERSATION_TYPE_NEW, previousMessageId, attachments, "de");
    }).then(function() {
        self.close();
    });
};
