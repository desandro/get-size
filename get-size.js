/**
 * getSize - size utility helper
 */

/*jshint browser: true, strict: true, undef: true */

( function( window, undefined ) {

'use strict';

var defView = document.defaultView;

var getStyle = defView && defView.getComputedStyle ?
  function( elem ) {
    return defView.getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };


// -------------------------- getStyleProperty by kangax -------------------------- //
// http://perfectionkills.com/feature-testing-css-properties/

function capitalize( str ) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var prefixes = 'Moz Webkit O Ms'.split(' ');

function getStyleProperty( propName ) {
  var style = document.documentElement.style,
      prefixed;

  // test standard property first
  if ( typeof style[propName] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = capitalize( propName );

  // test vendor specific properties
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof style[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

var supportsBoxSizing = getStyleProperty('boxSizing');

// --------------------------  -------------------------- //

function measureStyle( style, property ) {
  var val = style[ property ];
  return val ? parseInt( val, 10 ) : 0;
}

// -------------------------- getSize -------------------------- //

// get width, innerWidth, outerWidth, height, innerHeight, outerHeight
function getSize( elem ) {
  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var style = getStyle( elem );

  var isBorderBoxSizing = supportsBoxSizing &&
    style.boxSizing && style.boxSizing === 'border-box';

  var paddingWidth = measureStyle( style, 'paddingLeft' ) +
    measureStyle( style, 'paddingRight' );
  var paddingHeight = measureStyle( style, 'paddingTop' ) +
    measureStyle( style, 'paddingBottom' );

  var marginWidth = measureStyle( style, 'marginLeft' ) +
    measureStyle( style, 'marginRight' );
  var marginHeight = measureStyle( style, 'marginTop' ) +
    measureStyle( style, 'marginBottom' );

  var borderWidth = measureStyle( style, 'borderLeftWidth' ) +
    measureStyle( style, 'borderRightWidth' );
  var borderHeight = measureStyle( style, 'borderTopWidth' ) +
    measureStyle( style, 'borderBottomWidth' );

  size.innerWidth = size.width - paddingWidth - borderWidth;

  size.innerHeight = size.height - paddingHeight - borderHeight;

  size.outerWidth = size.width + marginWidth;

  size.outerHeight = size.height + marginHeight;

  return size;

}

window.getSize = getSize;

})( window );
