"use strict";
require('./assets');

var login=require('./modules/login');
var logout=require('./modules/logout');
var register=require('./modules/register');

function events()
{
    login.events();
    register.events();
    logout.events();
}

function styles()
{
    $(".login-yes").hide(0);
}

$(function()
{
    events();
    styles();

    $("#logout").click(logout.start);
    $("#login_button").click(login.start);
    $("#register_button").click(register.start);
});