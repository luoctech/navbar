var t_login={
    normal:{},
    qq:{
        goto_login:null,
    },
    wechat:{
        goto_login:null,
    },
    logged_in:function()
    {
        return localStorage.getItem('uid')&&localStorage.getItem('access_token')&&this.user_info;
    },
    user_info:null,
    check:null,
    get_info:null,
    logout:null,
    err:null,
    ready:new t_event(),
    clear:new t_event(),
    update:new t_event()
};

t_login.check=function()
{
    var uid=t_query.parse(t_url.get_query(location.href)).uid||localStorage.getItem('uid');
    var access_token=t_query.parse(t_url.get_query(location.href)).access_token||localStorage.getItem('access_token');
    if (uid&&access_token)
    {
        localStorage.setItem('uid',uid);
        localStorage.setItem('access_token',access_token);
        var url=t_url.remove_query(location.href,['uid','access_token','username']);
        if(url!==location.href)
        {
            location.assign(url);
        }
        else
        {
            console.log('start auto t_login');
            this.get_info(uid,access_token);
        }
    }
    else
    {
        console.log('no info found for auto login');
    }
};

t_login.get_info=function(uid, access_token)
{
    $.get('https://nodejs.twesix.cn/user/get_info?'
        + 'uid=' +uid
        +'&access_token='+access_token)
        .done(function (res)
        {
            if (res.ok)
            {
                res.data.uid=res.data._id;
                t_login.user_info = res.data;
                t_login.ready.emit('user_info');
            }
            else
            {
                t_login.err(res.err);
            }
        })
        .fail(t_login.err)
    ;
};


t_login.logout=function()
{
    localStorage.removeItem('uid');
    localStorage.removeItem('access_token');
    t_login.user_info=null;
    t_login.clear.emit('logout');
};

t_login.qq.goto_login=function()
{
    console.log('start qq login');

    var qq_oauth='https://graph.qq.com/oauth2.0/authorize?';
    var o={
        response_type:'code',
        client_id:101266094,
        redirect_uri:encodeURI('https://www.twesix.cn/user/login/index.html'),
        state:'get_auth_code'
    };
    query='response_type='+o.response_type
        +'&client_id='+o.client_id
        +'&redirect_uri='+o.redirect_uri
        +'&state='+o.state;
    var url=qq_oauth+query;
    t_cookie.set('login_continue',location.href,1000*3600*24*365*10,'.twesix.cn');
    location.assign(url);
};

t_login.wechat.goto_login=function()
{
    console.log('start wechat login');
    alert('抱歉，微信登录暂不可用。');
};

t_login.err=function(err)
{
    console.log(err);
    alert('登录出错,请重试');
    logout();
};
if(window.t_debug)
{
    console.log('['+new Date().getTime()+']>>>> done load login module');
}
