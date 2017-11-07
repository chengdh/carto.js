/**
 * Base source object
 *
 * @constructor
 * @abstract
 * @memberof carto.source
 * @api
 */
function Base () {
  this._id = Base.$generateId();
}

/**
 * Return a unique autogenerated id.
 * 
 * @return {string} Unique autogenerated id
 */
Base.prototype.getId = function () {
  return this._id;
};

Base.prototype.$setEngine = function (engine) {
  if (!this._internalModel) {
    this._internalModel = this._createInternalModel(engine);
  }
};

Base.prototype._createInternalModel = function (engine) {
  throw new Error('_createInternalModel must be implemented by the particular source');
};

Base.$nextId = 0;
Base.$generateId = function () {
  return 'S' + ++Base.$nextId;
};

module.exports = Base;
