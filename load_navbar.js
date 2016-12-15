(function()
{

    var base_url=document.currentScript.getAttribute('data-dev')?'':'//navbar.luoc.me/';
    var bar=document.createElement('div');
    var first_child=document.body.firstChild;
    bar.id='navbar_loader';
    document.body.insertBefore(bar,first_child);
    var navbar_loader=new XMLHttpRequest();
    function done_load_navbar(res)
    {
        bar.innerHTML=res;
    }
    navbar_loader.open('get',base_url+'navbar.html');
    navbar_loader.onreadystatechange=function()
    {
        if(this.readyState==4&&this.status==200)
        {
            done_load_navbar(this.responseText);
        }
    };
    navbar_loader.send();

    base_url+='modals/';
    [
        'login.html',
        'register.html',
        'style.html'
    ].forEach(function(ele)
    {
        load_modals(ele);
    });
    function load_modals(modal)
    {

        var modal_loader=new XMLHttpRequest();
        modal_loader.open('get',base_url+modal);
        modal_loader.onreadystatechange=function()
        {
            if(this.readyState==4&&this.status==200)
            {
                done_load_modal(this.responseText);
            }
        };
        modal_loader.send();
        function done_load_modal(res)
        {
            if(jQuery)
            {
                $(document.body).prepend($(res));
            }
            else
            {
                setTimeout(function()
                {
                    done_load_modal(res);
                },100);
            }
        }
    }

})();