'use strict'

var FieldError = require('../../errors').FieldError


/**
 * Sum of values as 64bit float
 *
 * @see http://druid.io/docs/0.6.120/Aggregations.html
 *
 * @param {string} fieldName name of the metric column to sum over
 */
module.exports = function hdrHistogramFold(fieldName) {
  if (!fieldName) {
    throw new FieldError('Missing metric column')
  }

  this.fieldName = 'durationHistogram'
  this.name = 'durationHistogramFold'
  this.type = 'hdrHistogramFold'
  this.numBuckets = 15
  
}