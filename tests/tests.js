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

window.onload = function() {



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

test( 'ex4: border: 10px solid', function() {
  var size = getBoxSize(4);
  // console.log( size );
  equal( size.width, 220, 'width = 200 width + 10 border + 10 border' );
  equal( size.height, 120, 'height = 100 height + 10 border + 10 border' );
  equal( size.innerWidth, 200, 'innerWidth = 200 width' );
  equal( size.innerHeight, 100, 'innerHeight = 200 width' );
  equal( size.outerWidth, 220, 'outerWidth = 200 width + 10 border + 10 border' );
  equal( size.outerHeight, 120, 'outerHeight = 100 height + 10 border + 10 border' );
});

test( 'ex5: border: 10px solid; margin: 15px', function() {
  var size = getBoxSize(5);
  // console.log( size );
  equal( size.width, 220, 'width = 200 width + 10 border + 10 border' );
  equal( size.height, 120, 'height = 100 height + 10 border + 10 border' );
  equal( size.innerWidth, 200, 'innerWidth = 200 width' );
  equal( size.innerHeight, 100, 'innerHeight = 200 width' );
  equal( size.outerWidth, 250, 'outerWidth = 200 width + 20 border + 30 margin' );
  equal( size.outerHeight, 150, 'outerHeight = 100 height + 20 border + 30 margin' );
});

test( 'ex6: padding, set width/height', function() {
  var size = getBoxSize(6);
  // console.log( size );
  equal( size.width, 260, 'width' );
  equal( size.height, 140, 'height' );
  equal( size.innerWidth, 200, 'innerWidth = 400 width - 20 padding - 40 padding' );
  equal( size.innerHeight, 100, 'innerHeight = 200 height - 10 padding - 30 padding' );
  equal( size.outerWidth, 260, 'outerWidth' );
  equal( size.outerHeight, 140, 'outerHeight' );

});

test( 'ex7: padding, inherit width', function() {
  var size = getBoxSize(7);
  // console.log( size );
  equal( size.width, 400, 'width' );
  equal( size.height, 140, 'height' );
  equal( size.innerWidth, 340, 'innerWidth = 400 width - 20 padding - 40 padding' );
  equal( size.innerHeight, 100, 'innerHeight = 200 height - 10 padding - 30 padding' );
  equal( size.outerWidth, 400, 'outerWidth' );
  equal( size.outerHeight, 140, 'outerHeight' );

});



}; // onload

})( window );
