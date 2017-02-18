/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);

	var login=__webpack_require__(6);
	var logout=__webpack_require__(7);
	var register=__webpack_require__(8);

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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	let modals={};
	modals.change_password=__webpack_require__(2);
	modals.login=__webpack_require__(3);
	modals.register=__webpack_require__(4);
	modals.navbar=__webpack_require__(5);

	for(var ele in modals)
	{
	    $(document.body).prepend(modals[ele]);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal fade navbar-modal\" id=\"modal_for_change_password\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4>修改密码</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <h4 class=\"text-center\">请选择一种方式接收验证码</h4>\r\n                <form class=\"form\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"手机号\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\">获取验证码</button>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"邮箱\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\">获取验证码</button>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"icon-info iconfont\"></i></span>\r\n                        <input name=\"code\" type=\"text\" class=\"form-control\" placeholder=\"请输入您收到的的验证码\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"icon-lock iconfont\"></i></span>\r\n                        <input name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"请输入您的新密码\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"icon-lock iconfont\"></i></span>\r\n                        <input name=\"confirm_password\" type=\"password\" class=\"form-control\" placeholder=\"确认您的密码\">\r\n                    </div>\r\n                    <br><br>\r\n                    <button class=\"btn-primary submit-button\" type=\"submit\" id=\"login-button\">修改密码</button>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<style>\r\n\r\n</style>\r\n\r\n<script>\r\n//$('#modal_for_change_password').modal('toggle');\r\n</script>";
	var elm = document.createElement("div");
	elm.innerHTML = module.exports;
	module.exports = elm;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal fade navbar-modal\" id=\"modal_for_login\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <h4>欢迎登陆</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n\r\n\r\n                <form class=\"form\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"icon-people iconfont\"></i></span>\r\n                        <input id=\"login_account\" type=\"text\" class=\"form-control\" placeholder=\"账号/手机号/邮箱\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"icon-lock iconfont\"></i></span>\r\n                        <input id=\"login_password\" type=\"password\" class=\"form-control\" placeholder=\"密码\">\r\n                    </div>\r\n                    <div class=\"checkbox\">\r\n                        <label>\r\n                            <input type=\"checkbox\">&nbsp;&nbsp;记住我\r\n                        </label>\r\n                        <span class=\"float-right\">\r\n                            <a href=\"#modal_for_change_password\" id=\"find_password\" data-toggle=\"modal\">找回密码</a>\r\n                            &nbsp;&nbsp;|&nbsp;&nbsp;\r\n                            <a href=\"#modal_for_register\" data-toggle=\"modal\" id=\"register\">立即注册</a>\r\n                        </span>\r\n                    </div>\r\n                    <br>\r\n                    <button class=\"btn-primary submit-button\" type=\"button\" id=\"login_button\">登陆</button>\r\n                </form>\r\n\r\n                <hr>\r\n                <h4 class=\"text-center\">合作账号登陆</h4>\r\n\r\n                <div class=\"login-oauth-wrapper text-center\">\r\n                    <a href=\"#\" id=\"qq_login\"><img src=\"//luoc.co/navbar/img/icons/qq.jpg\" alt=\"QQ登陆\"></a>\r\n                    <a href=\"#\" id=\"wx_login\"><img src=\"//luoc.co/navbar/img/icons/wx.jpg\" alt=\"微信登陆\"></a>\r\n                    <a href=\"#\" id=\"alipay_login\"><img src=\"//luoc.co/navbar/img/icons/alipay.png\" alt=\"支付宝登陆\"></a>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n\r\n            </div>\r\n\r\n        </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n<style>\r\n    #modal_for_login .login-oauth-wrapper img\r\n    {\r\n        width:40px;\r\n        height:40px;\r\n        border-radius:10px;\r\n    }\r\n</style>";
	var elm = document.createElement("div");
	elm.innerHTML = module.exports;
	module.exports = elm;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal fade navbar-modal\" id=\"modal_for_register\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4>欢迎注册落尘科技通行证</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form class=\"form\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"icon-people iconfont\"></i></span>\r\n                        <input id=\"register_email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"邮箱\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\">获取验证码</button>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"icon-info iconfont\"></i></span>\r\n                        <input name=\"code\" type=\"text\" class=\"form-control\" placeholder=\"请输入您收到的的验证码\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"icon-lock iconfont\"></i></span>\r\n                        <input id=\"register_password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"密码\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"icon-lock iconfont\"></i></span>\r\n                        <input id=\"register_confirm_password\" name=\"confirm_password\" type=\"password\" class=\"form-control\" placeholder=\"确认您的密码\">\r\n                    </div>\r\n                    <br><br>\r\n                    <button class=\"btn-primary submit-button\" id=\"register_button\">注册</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<style>\r\n\r\n</style>\r\n\r\n<script>\r\n//$('#modal_for_register').modal('toggle');\r\n</script>";
	var elm = document.createElement("div");
	elm.innerHTML = module.exports;
	module.exports = elm;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n            data-target=\"#domain_bar\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a href=\"//luoc.co\" class=\"navbar-brand\">\r\n                <span style=\"color:#e14d43\">落尘科技</span><br>\r\n                <!--<p class=\"navbar-text\"><small>N e v e r&nbsp;&nbsp;h u r t . N e v e r&nbsp;&nbsp;b e&nbsp;&nbsp;h u r t</small></p>-->\r\n                <!-- TODO: add this word to the navbar with a good look !-->\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"domain_bar\">\r\n            <ul class=\"nav navbar-nav navbar-right\" id=\"login_status\">\r\n\r\n                <li class=\"login-no\"><a href=\"#modal_for_register\" data-toggle=\"modal\" id=\"register\">注册</a></li>\r\n                <li class=\"login-no\"><a href=\"#modal_for_login\" data-toggle=\"modal\" id=\"login\">登录</a></li>\r\n\r\n                <li class=\"login-yes\">\r\n                    <a href=\"//luoc.co/user\" target=\"_blank\">\r\n                        <span id=\"username\"></span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"login-yes\"><a href=\"#logout\" id=\"logout\">注销</a></li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<script>\r\n\r\n</script>\r\n\r\n<style>\r\n    @import \"//at.alicdn.com/t/font_1469889758_9089751.css\";\r\n    .navbar,\r\n    .navbar-modal\r\n    {\r\n        font-family:微软雅黑,\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\r\n    }\r\n    /*#login_status .login-yes*/\r\n    /*{*/\r\n        /*display:none;*/\r\n    /*}*/\r\n\r\n    .navbar-modal form input\r\n    {\r\n        display: block;\r\n        font-size:20px;\r\n    }\r\n    .navbar-modal form .checkbox\r\n    {\r\n        font-size:20px;\r\n    }\r\n    .navbar-modal form .checkbox input\r\n    {\r\n        width:22px;\r\n        height:22px;\r\n    }\r\n    .navbar-modal .float-right\r\n    {\r\n        float:right;\r\n    }\r\n    .navbar-modal .submit-button\r\n    {\r\n        width:100%;\r\n        padding:5px;\r\n        border:1px solid white;\r\n        border-radius:5px;\r\n        font-size:20px;\r\n    }\r\n</style>\r\n";
	var elm = document.createElement("div");
	elm.innerHTML = module.exports;
	module.exports = elm;

/***/ },
/* 6 */
/***/ function(module, exports) {

	function start()
	{
	    console.log('[ navbar ] 开始登录 ');
	    window.luoc.navbar.login
	    (
	        {
	            account:$("#login_account").val(),
	            password:$("#login_password").val()
	        }
	    )
	}

	function events()
	{
	    document.body.addEventListener('navbar:login:ok',success);
	    document.body.addEventListener('navbar:login:error',function(e)
	    {
	        console.log('登录出错');
	        console.log(e);
	    });
	    document.body.addEventListener('navbar:login:args_not_valid',function(e)
	    {
	        console.log('登录出错');
	        console.log(e);
	    });
	}

	function success(e)
	{
	    console.log(e);
	    $('#modal_for_login').modal('toggle');
	    $("#username").text(e.message.email);
	    $(".login-no").hide(0);
	    $(".login-yes").show(0);
	}

	module.exports.start=start;
	module.exports.events=events;
	module.exports.success=success;

/***/ },
/* 7 */
/***/ function(module, exports) {

	function start()
	{
	    $("#username").text('');
	    $(".login-no").show(0);
	    $(".login-yes").hide(0);
	}

	function events()
	{
	    "use strict";

	}

	module.exports.start=start;
	module.exports.events=events;

/***/ },
/* 8 */
/***/ function(module, exports) {

	function start(e)
	{
	    "use strict";
	    e.preventDefault();
	    var email=$("#register_email").val();
	    var password=$("#register_password").val();
	    var confirm_password=$("#register_confirm_password").val();
	    if(password!=confirm_password)
	    {
	        alert('两次输入的密码不匹配');
	        return ;
	    }
	    window.luoc.navbar.register
	    (
	        {
	            email:email,
	            password:password
	        }
	    )
	}

	function events()
	{
	    "use strict";
	    document.body.addEventListener('navbar:register:password_not_valid',function(e)
	    {
	        "use strict";
	        alert('密码最少8位长');
	        console.log(e);
	    });
	    document.body.addEventListener('navbar:register:email_not_valid',function(e)
	    {
	        "use strict";
	        alert('email不合法');
	        console.log(e);
	    });
	    document.body.addEventListener('navbar:register:ok',success);
	    document.body.addEventListener('navbar:register:error',function(e)
	    {
	        "use strict";
	        alert('注册出错');
	        console.log(e);
	    });
	}

	function success(e)
	{
	    "use strict";
	    console.log(e);
	}

	module.exports.start=start;
	module.exports.events=events;

/***/ }
/******/ ]);