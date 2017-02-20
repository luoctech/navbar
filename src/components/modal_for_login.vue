<template>
    <div class="modal fade navbar-modal" id="modal_for_login">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <h4>欢迎登陆</h4>
                </div>

                <div class="modal-body">


                    <form class="form" @submit.prevent="start($event)">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-people iconfont"></i></span>
                            <input id="login_account" type="text" class="form-control"
                                   placeholder="账号/手机号/邮箱" required>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
                            <input id="login_password" type="password" class="form-control"
                                   placeholder="密码" required>
                        </div>
                        <br>
                        <div>
                            <label>
                                <input type="checkbox">&nbsp;&nbsp;记住我
                            </label>
                            <span class="float-right">
                            <a href="#modal_for_change_password" @click="close_this_modal()"
                               id="find_password" data-toggle="modal">找回密码</a>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="#modal_for_register" @click="close_this_modal()"
                               data-toggle="modal" id="register">立即注册</a>
                        </span>
                        </div>
                        <br>
                        <button class="btn-primary form-control" type="submit" id="login_button">登陆</button>
                    </form>

                    <hr>
                    <h4 class="text-center">合作账号登陆</h4>

                    <div class="login-oauth-wrapper text-center">
                        <a href="#" id="qq_login">
                            <img src="//luoc.co/navbar/img/icons/qq.jpg" alt="QQ登陆">
                        </a>
                        <a href="#" id="wx_login">
                            <img src="//luoc.co/navbar/img/icons/wx.jpg" alt="微信登陆">
                        </a>
                        <a href="#" id="alipay_login">
                            <img src="//luoc.co/navbar/img/icons/alipay.png" alt="支付宝登陆">
                        </a>
                    </div>

                </div>

                <div class="modal-footer">

                </div>

            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>
<script>
    module.exports =
        {
            data: function ()
            {
                return {};
            },
            components: {},
            methods:
                {
                    close_this_modal:function()
                    {
                        $("#modal_for_login").modal('toggle');
                    },
                    start:function start(e)
                    {
                        console.log(e);
                        console.log('[ navbar ] 开始登录 ');
                        window.luoc.navbar.login
                        (
                            {
                                account:$("#login_account").val(),
                                password:$("#login_password").val()
                            }
                        )
                    }
                },
            mounted:function()
            {

            }
        }
    ;

</script>
<style scoped>
    .modal
    {
        font-family:微软雅黑,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
    }
    .login-oauth-wrapper img
    {
        width:40px;
        height:40px;
        border-radius:10px;
    }
    .float-right
    {
        float:right;
    }
</style>
