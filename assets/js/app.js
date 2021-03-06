/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');
require('../css/notifications.css');
require('../css/table.css');
//require('../css/style.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
//const $ = require('jquery');
const $ = require('jquery');
// create global $ and jQuery variables
global.$ = global.jQuery = $;
window.jQuery = $;
require('bootstrap');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});


//console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
