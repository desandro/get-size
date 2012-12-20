/**
 * getSize tests
 * with QUnit
**/

/*jshint browser: true, devel: true, strict: true, undef: true */
/*global equal: false, getSize: false, ok: false, test: false */

( function( window ) {

'use strict';

function getBoxSize( num ) {
  var box = document.querySelector( '#ex' + num + ' .box' );
  return getSize( box );
}

test( 'bad argument', function() {
  equal( getSize( 0 ), null, 'Number returns null' );
});

test( 'no styling', function() {
  var size = getBoxSize(1);
  equal( size.width, 400, 'Inherit container width' );
  equal( size.height, 0, 'No height' );
});

})( window );
