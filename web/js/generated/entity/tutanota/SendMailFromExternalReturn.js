"use strict";

tutao.provide('tutao.entity.tutanota.SendMailFromExternalReturn');

/**
 * @constructor
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.tutanota.SendMailFromExternalReturn = function(data) {
  if (data) {
    this.__format = data._format;
    this._senderMail = data.senderMail;
  } else {
    this.__format = "0";
    this._senderMail = null;
  }
  this._entityHelper = new tutao.entity.EntityHelper(this);
  this.prototype = tutao.entity.tutanota.SendMailFromExternalReturn.prototype;
};

/**
 * The version of the model this type belongs to.
 * @const
 */
tutao.entity.tutanota.SendMailFromExternalReturn.MODEL_VERSION = '7';

/**
 * The encrypted flag.
 * @const
 */
tutao.entity.tutanota.SendMailFromExternalReturn.prototype.ENCRYPTED = true;

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.tutanota.SendMailFromExternalReturn.prototype.toJsonData = function() {
  return {
    _format: this.__format, 
    senderMail: this._senderMail
  };
};

/**
 * The id of the SendMailFromExternalReturn type.
 */
tutao.entity.tutanota.SendMailFromExternalReturn.prototype.TYPE_ID = 272;

/**
 * The id of the senderMail attribute.
 */
tutao.entity.tutanota.SendMailFromExternalReturn.prototype.SENDERMAIL_ATTRIBUTE_ID = 274;

/**
 * Sets the format of this SendMailFromExternalReturn.
 * @param {string} format The format of this SendMailFromExternalReturn.
 */
tutao.entity.tutanota.SendMailFromExternalReturn.prototype.setFormat = function(format) {
  this.__format = format;
  return this;
};

/**
 * Provides the format of this SendMailFromExternalReturn.
 * @return {string} The format of this SendMailFromExternalReturn.
 */
tutao.entity.tutanota.SendMailFromExternalReturn.prototype.getFormat = function() {
  return this.__format;
};

/**
 * Sets the senderMail of this SendMailFromExternalReturn.
 * @param {Array.<string>} senderMail The senderMail of this SendMailFromExternalReturn.
 */
tutao.entity.tutanota.SendMailFromExternalReturn.prototype.setSenderMail = function(senderMail) {
  this._senderMail = senderMail;
  return this;
};

/**
 * Provides the senderMail of this SendMailFromExternalReturn.
 * @return {Array.<string>} The senderMail of this SendMailFromExternalReturn.
 */
tutao.entity.tutanota.SendMailFromExternalReturn.prototype.getSenderMail = function() {
  return this._senderMail;
};

/**
 * Loads the senderMail of this SendMailFromExternalReturn.
 * @return {Promise.<tutao.entity.tutanota.Mail>} Resolves to the loaded senderMail of this SendMailFromExternalReturn or an exception if the loading failed.
 */
tutao.entity.tutanota.SendMailFromExternalReturn.prototype.loadSenderMail = function() {
  return tutao.entity.tutanota.Mail.load(this._senderMail);
};
