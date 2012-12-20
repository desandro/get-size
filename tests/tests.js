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

test( 'bad arguments', function() {
  equal( getSize( 0 ), null, 'Number returns null' );
});

test( 'ex1: no styling', function() {
  var size = getBoxSize(1);
  equal( size.width, 400, 'Inherit container width' );
  equal( size.height, 0, 'No height' );
});

test( 'ex2: height: 100%', function() {
  var size = getBoxSize(2);
  equal( size.height, 200, 'Inherit height' );
});

test( 'ex3: width: 50%; height: 50%', function() {
  var size = getBoxSize(3);
  equal( size.width, 200, 'half width' );
  equal( size.height, 100, 'half height' );
});


})( window );
