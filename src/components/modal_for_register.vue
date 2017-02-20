<template>
    <div class="modal fade navbar-modal" id="modal_for_register">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>欢迎注册落尘科技通行证</h4>
                </div>
                <div class="modal-body">
                    <form class="form" @submit.prevent="start($event)">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-people iconfont"></i></span>
                            <input v-model="email" id="register_email" name="email" type="email" class="form-control"
                                   placeholder="邮箱" required>
                            <div class="input-group-btn">
                                <button class="btn btn-default">获取验证码</button>
                            </div>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-info iconfont"></i></span>
                            <input v-model="code" name="code" id="register_code" type="text" class="form-control"
                                   placeholder="请输入您收到的的验证码">
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
                            <input v-model="password" id="register_password" name="password" type="password" class="form-control"
                                   placeholder="密码" required>
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
                            <input v-model="confirm_password" id="register_confirm_password" name="confirm_password" type="password"
                                   class="form-control" placeholder="确认您的密码" required>
                        </div>
                        <br><br>
                        <button class="btn-primary form-control" type="submit">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports =
        {
            data: function()
            {
                return {
                    email:'',
                    code:'',
                    password:'',
                    confirm_password:''
                };
            },
            components: {},
            methods:
                {
                    start:function(e)
                    {
                        if(this.password!=this.confirm_password)
                        {
                            alert('两次输入的密码不匹配');
                            return ;
                        }
                        window.luoc.navbar.register
                        (
                            {
                                email:this.email,
                                password:this.password
                            }
                        )
                    }
                },
            mounted:function()
            {
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
                document.body.addEventListener('navbar:register:ok',function(e)
                {
                    "use strict";
                    alert('注册成功');
                    $('#modal_for_register').modal('toggle');
                    console.log(e);
                });
                document.body.addEventListener('navbar:register:error',function(e)
                {
                    "use strict";
                    alert(e.message.message);
                    console.log(e);
                });
            }
        }
</script>
<style scoped>
    .modal
    {
        font-family:微软雅黑,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
    }
</style>
