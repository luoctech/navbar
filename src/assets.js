let modals={};
modals.change_password=require('./assets/modals/change_password.html');
modals.login=require('./assets/modals/login.html');
modals.register=require('./assets/modals/register.html');
modals.navbar=require('./assets/navbar.html');

for(var ele in modals)
{
    $(document.body).prepend(modals[ele]);
}