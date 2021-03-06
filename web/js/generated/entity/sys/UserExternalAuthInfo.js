"use strict";

tutao.provide('tutao.entity.sys.UserExternalAuthInfo');

/**
 * @constructor
 * @param {Object} parent The parent entity of this aggregate.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.sys.UserExternalAuthInfo = function(parent, data) {
  if (data) {
    this.__id = data._id;
    this._authUpdateCounter = data.authUpdateCounter;
    this._autoAuthenticationId = data.autoAuthenticationId;
    this._autoTransmitPassword = data.autoTransmitPassword;
    this._latestSaltHash = data.latestSaltHash;
    this._variableAuthInfo = data.variableAuthInfo;
  } else {
    this.__id = tutao.entity.EntityHelper.generateAggregateId();
    this._authUpdateCounter = null;
    this._autoAuthenticationId = null;
    this._autoTransmitPassword = null;
    this._latestSaltHash = null;
    this._variableAuthInfo = null;
  }
  this._parent = parent;
  this.prototype = tutao.entity.sys.UserExternalAuthInfo.prototype;
};

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.toJsonData = function() {
  return {
    _id: this.__id, 
    authUpdateCounter: this._authUpdateCounter, 
    autoAuthenticationId: this._autoAuthenticationId, 
    autoTransmitPassword: this._autoTransmitPassword, 
    latestSaltHash: this._latestSaltHash, 
    variableAuthInfo: this._variableAuthInfo
  };
};

/**
 * The id of the UserExternalAuthInfo type.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.TYPE_ID = 77;

/**
 * The id of the authUpdateCounter attribute.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.AUTHUPDATECOUNTER_ATTRIBUTE_ID = 82;

/**
 * The id of the autoAuthenticationId attribute.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.AUTOAUTHENTICATIONID_ATTRIBUTE_ID = 79;

/**
 * The id of the autoTransmitPassword attribute.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.AUTOTRANSMITPASSWORD_ATTRIBUTE_ID = 81;

/**
 * The id of the latestSaltHash attribute.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.LATESTSALTHASH_ATTRIBUTE_ID = 80;

/**
 * The id of the variableAuthInfo attribute.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.VARIABLEAUTHINFO_ATTRIBUTE_ID = 83;

/**
 * Sets the id of this UserExternalAuthInfo.
 * @param {string} id The id of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.setId = function(id) {
  this.__id = id;
  return this;
};

/**
 * Provides the id of this UserExternalAuthInfo.
 * @return {string} The id of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.getId = function() {
  return this.__id;
};

/**
 * Sets the authUpdateCounter of this UserExternalAuthInfo.
 * @param {string} authUpdateCounter The authUpdateCounter of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.setAuthUpdateCounter = function(authUpdateCounter) {
  this._authUpdateCounter = authUpdateCounter;
  return this;
};

/**
 * Provides the authUpdateCounter of this UserExternalAuthInfo.
 * @return {string} The authUpdateCounter of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.getAuthUpdateCounter = function() {
  return this._authUpdateCounter;
};

/**
 * Sets the autoAuthenticationId of this UserExternalAuthInfo.
 * @param {string} autoAuthenticationId The autoAuthenticationId of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.setAutoAuthenticationId = function(autoAuthenticationId) {
  this._autoAuthenticationId = autoAuthenticationId;
  return this;
};

/**
 * Provides the autoAuthenticationId of this UserExternalAuthInfo.
 * @return {string} The autoAuthenticationId of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.getAutoAuthenticationId = function() {
  return this._autoAuthenticationId;
};

/**
 * Sets the autoTransmitPassword of this UserExternalAuthInfo.
 * @param {string} autoTransmitPassword The autoTransmitPassword of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.setAutoTransmitPassword = function(autoTransmitPassword) {
  this._autoTransmitPassword = autoTransmitPassword;
  return this;
};

/**
 * Provides the autoTransmitPassword of this UserExternalAuthInfo.
 * @return {string} The autoTransmitPassword of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.getAutoTransmitPassword = function() {
  return this._autoTransmitPassword;
};

/**
 * Sets the latestSaltHash of this UserExternalAuthInfo.
 * @param {string} latestSaltHash The latestSaltHash of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.setLatestSaltHash = function(latestSaltHash) {
  this._latestSaltHash = latestSaltHash;
  return this;
};

/**
 * Provides the latestSaltHash of this UserExternalAuthInfo.
 * @return {string} The latestSaltHash of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.getLatestSaltHash = function() {
  return this._latestSaltHash;
};

/**
 * Sets the variableAuthInfo of this UserExternalAuthInfo.
 * @param {string} variableAuthInfo The variableAuthInfo of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.setVariableAuthInfo = function(variableAuthInfo) {
  this._variableAuthInfo = variableAuthInfo;
  return this;
};

/**
 * Provides the variableAuthInfo of this UserExternalAuthInfo.
 * @return {string} The variableAuthInfo of this UserExternalAuthInfo.
 */
tutao.entity.sys.UserExternalAuthInfo.prototype.getVariableAuthInfo = function() {
  return this._variableAuthInfo;
};
