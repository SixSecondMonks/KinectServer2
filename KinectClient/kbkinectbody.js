/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.KBKinectBody');
goog.provide('proto.KBKinectBody.KBHandState');
goog.provide('proto.KBKinectBody.KBTrackingConfidence');

goog.require('jspb.Message');
goog.require('proto.KBJoint');
goog.require('proto.KBJointOrientation');
goog.require('proto.KBVector4');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.KBKinectBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.KBKinectBody.repeatedFields_, null);
};
goog.inherits(proto.KBKinectBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.KBKinectBody.displayName = 'proto.KBKinectBody';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.KBKinectBody.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.KBKinectBody.prototype.toObject = function(opt_includeInstance) {
  return proto.KBKinectBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.KBKinectBody} msg The msg instance to transform.
 * @return {!Object}
 */
proto.KBKinectBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    timestamp: msg.getTimestamp(),
    lefthand: msg.getLefthand(),
    righthand: msg.getRighthand(),
    lefthandconfidence: msg.getLefthandconfidence(),
    righthandconfidence: msg.getRighthandconfidence(),
    clip: (f = msg.getClip()) && proto.KBVector4.toObject(includeInstance, f),
    jointsList: jspb.Message.toObjectList(msg.getJointsList(),
    proto.KBJoint.toObject, includeInstance),
    orientationsList: jspb.Message.toObjectList(msg.getOrientationsList(),
    proto.KBJointOrientation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.KBKinectBody} The clone.
 */
proto.KBKinectBody.prototype.cloneMessage = function() {
  return /** @type {!proto.KBKinectBody} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.KBKinectBody.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.KBKinectBody.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.KBKinectBody.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.KBKinectBody.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional KBHandState leftHand = 3;
 * @return {!proto.KBKinectBody.KBHandState}
 */
proto.KBKinectBody.prototype.getLefthand = function() {
  return /** @type {!proto.KBKinectBody.KBHandState} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {!proto.KBKinectBody.KBHandState} value  */
proto.KBKinectBody.prototype.setLefthand = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional KBHandState rightHand = 4;
 * @return {!proto.KBKinectBody.KBHandState}
 */
proto.KBKinectBody.prototype.getRighthand = function() {
  return /** @type {!proto.KBKinectBody.KBHandState} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {!proto.KBKinectBody.KBHandState} value  */
proto.KBKinectBody.prototype.setRighthand = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional KBTrackingConfidence leftHandConfidence = 5;
 * @return {!proto.KBKinectBody.KBTrackingConfidence}
 */
proto.KBKinectBody.prototype.getLefthandconfidence = function() {
  return /** @type {!proto.KBKinectBody.KBTrackingConfidence} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {!proto.KBKinectBody.KBTrackingConfidence} value  */
proto.KBKinectBody.prototype.setLefthandconfidence = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional KBTrackingConfidence rightHandConfidence = 6;
 * @return {!proto.KBKinectBody.KBTrackingConfidence}
 */
proto.KBKinectBody.prototype.getRighthandconfidence = function() {
  return /** @type {!proto.KBKinectBody.KBTrackingConfidence} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {!proto.KBKinectBody.KBTrackingConfidence} value  */
proto.KBKinectBody.prototype.setRighthandconfidence = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional KBVector4 clip = 7;
 * @return {proto.KBVector4}
 */
proto.KBKinectBody.prototype.getClip = function() {
  return /** @type{proto.KBVector4} */ (
    jspb.Message.getWrapperField(this, proto.KBVector4, 7));
};


/** @param {proto.KBVector4|undefined} value  */
proto.KBKinectBody.prototype.setClip = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.KBKinectBody.prototype.clearClip = function() {
  this.setClip(undefined);
};


/**
 * repeated KBJoint joints = 8;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.KBJoint>}
 */
proto.KBKinectBody.prototype.getJointsList = function() {
  return /** @type{!Array.<!proto.KBJoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.KBJoint, 8));
};


/** @param {Array.<!proto.KBJoint>|undefined} value  */
proto.KBKinectBody.prototype.setJointsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


proto.KBKinectBody.prototype.clearJointsList = function() {
  this.setJointsList([]);
};


/**
 * repeated KBJointOrientation orientations = 9;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.KBJointOrientation>}
 */
proto.KBKinectBody.prototype.getOrientationsList = function() {
  return /** @type{!Array.<!proto.KBJointOrientation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.KBJointOrientation, 9));
};


/** @param {Array.<!proto.KBJointOrientation>|undefined} value  */
proto.KBKinectBody.prototype.setOrientationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


proto.KBKinectBody.prototype.clearOrientationsList = function() {
  this.setOrientationsList([]);
};


/**
 * @enum {number}
 */
proto.KBKinectBody.KBHandState = {
  UNKNOWN: 0,
  NOT_TRACKED: 1,
  OPEN: 2,
  CLOSED: 3,
  LASSO: 4
};

/**
 * @enum {number}
 */
proto.KBKinectBody.KBTrackingConfidence = {
  LOW: 0,
  HIGH: 1
};

