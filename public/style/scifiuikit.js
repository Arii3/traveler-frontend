//filters
//hue
function hueFunction(hueVal) {
   apply_filter('hue-rotate', hueVal + 'deg');
}
//blur
function blurFunction(blurVal) {
   apply_filter('blur', blurVal + 'px');
}
//grayscale
function grayscaleFunction(grayscaleVal) {
   apply_filter('grayscale', grayscaleVal + '%');
}
//invert
function invertFunction(invertVal) {
   apply_filter('invert', invertVal + '%');
}
var apply_filter = function (fil, val) {
   var filter = document.getElementById('html')
               .style.filter.trim()
               .split(' ').filter(function (a) { return a.trim(); });
   var f = false;
   filter.forEach(function (v, i) {
       if (v.indexOf(fil) === 0) {
           filter[i] = fil + '(' + val + ')';
           f = true;
       }
   });
   if (f === false) filter.push(fil + '(' + val + ')');
   document.getElementById('html').style.filter = filter.join(' ');
};
$( document ).ready(function() {
 /*
 //DOOM 3 UI Grid
 //prepare grid size
 function createGrid(size) {
   var ratioW = Math.floor($( document ).width()/size),
       ratioH = Math.floor($( document ).height()/size);
   //prepare container
   var parent = $('<div />', {
       class: 'grid',
       width: ratioW  * size,
       height: ratioH  * size
   }).addClass('grid').appendTo('html');
   //loop single lines
   for (var i = 0; i < ratioH; i++) {
       for(var p = 0; p < ratioW; p++){
           $('<div />', {
               width: size - 1,
               height: size - 1
           }).appendTo(parent);
       }
   }
 }
 //create grid
 createGrid(50);
 */
 //stycky menu
 $('.menu')
   .addClass('original')
   .clone()
   .insertAfter('.menu')
   .addClass('cloned')
   .css('position','fixed')
   .css('top','0')
   .css('margin-top','10px')
   .css('z-index','500')
   .removeClass('original')
   .hide();

 scrollIntervalID = setInterval(stickIt, 10);

 function stickIt() {
   var orgElementPos = $('.original').offset();
   orgElementTop = orgElementPos.top;               
   if ($(window).scrollTop() >= (orgElementTop)) {
     // scrolled past the original position; 
     //now only show the cloned, sticky element.
     // Cloned element should always have same 
     //left position and width as original element.     
     orgElement = $('.original');
     coordsOrgElement = orgElement.offset();
     leftOrgElement = coordsOrgElement.left;  
     widthOrgElement = orgElement.css('width');
     $('.cloned')
       .css('left',leftOrgElement+'px')
       .css('top','0')
       .css('width',widthOrgElement)
       .show();
     $('.cloned nav').css('background','rgba(0,0,0,0.9)');
     $('.original')
       .css('visibility','hidden');
   } 
   else {
     // not scrolled past the menu; 
     //only show the original menu.
     $('.cloned').hide();
     $('.original').css('visibility','visible');
   }
 }
});
$( window ).load(function() {
 
});