<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#domain_bar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="//luoc.co" class="navbar-brand">
                    <span style="color:#e14d43">落尘科技</span><br>
                    <!--<p class="navbar-text"><small>N e v e r&nbsp;&nbsp;h u r t . N e v e r&nbsp;&nbsp;b e&nbsp;&nbsp;h u r t</small></p>-->
                    <!-- TODO: add this word to the navbar with a good look !-->
                </a>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">

                    <li v-if="!online">
                        <a href="#modal_for_login" data-toggle="modal" id="login">登录</a>
                    </li>
                    <li v-if="!online">
                        <a href="#modal_for_register" data-toggle="modal" id="register">注册</a>
                    </li>


                    <li v-if="online">
                        <a href="//luoc.co/user" target="_blank">
                            <span id="username">{{username}}</span>
                        </a>
                    </li>
                    <li v-if="online">
                        <a id="logout" href="#" @click="logout()">注销</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    module.exports =
        {
            name:'navbar',
            data: function ()
            {
                return {
                    online:false,
                    username:'未登录'
                };
            },
            methods:
            {
                logout:window.luoc.navbar.logout
            },
            mounted:function()
            {
                var self=this;
                document.body.addEventListener('navbar:login:ok',function(e)
                {
                    console.log(e);
                    $('#modal_for_login').modal('hide');
                    self.username=e.message.email;
                    self.online=true;
                });
                document.body.addEventListener('navbar:login:error',function(e)
                {
                    alert(e.message.message);
                    console.log('登录错误');
                    console.log(e);
                });
                document.body.addEventListener('navbar:login:args_not_valid',function(e)
                {
                    console.log('登录参数检查失败');
                    console.log(e);
                });
                document.body.addEventListener('navbar:logout',function(e)
                {
                    setTimeout(function()
                    {
                        self.online=false;
                        self.username='未登录'
                    },0);
                    // TODO : 解决点击穿透的问题
                });
            }
        }
</script>
<style>
    @import "//at.alicdn.com/t/font_1469889758_9089751.css";
</style>
<style scoped>
    .navbar
    {
        font-family:微软雅黑,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
    }
    #logout
    {
        color:#ff1216;
    }
    #logout:hover
    {
        color:orangered;
    }
</style>
