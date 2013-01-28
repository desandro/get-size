/**
 * getSize v0.0.3
 * measure size of elements
 */

/*jshint browser: true, strict: true, undef: true */

( function( window, undefined ) {

'use strict';

// dependencies
var getStyleProperty = window.getStyleProperty;

// -------------------------- helpers -------------------------- //

var defView = document.defaultView;

var getStyle = defView && defView.getComputedStyle ?
  function( elem ) {
    return defView.getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };

// -------------------------- getSize -------------------------- //

var measurements = [
  'width',
  'height',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var supportsBoxSizing = getStyleProperty('boxSizing');

// get width, innerWidth, outerWidth, height, innerHeight, outerHeight
function getSize( elem ) {
  // do not proceed on non-objects
  if ( typeof elem !== 'object' || !elem.nodeType ) {
    return;
  }

  var size = {};

  var style = getStyle( elem );

  var isBorderBoxSizing = supportsBoxSizing &&
    style.boxSizing && style.boxSizing === 'border-box';

  // get all measurements
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    size[ measurement ] = value ? parseFloat( value ) : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  size.innerWidth = size.width;

  size.innerHeight = size.height;

  size.outerWidth = size.width + paddingWidth + borderWidth + marginWidth;

  size.outerHeight = size.height + paddingHeight + borderHeight + marginHeight;

  return size;

}

window.getSize = getSize;

})( window );
