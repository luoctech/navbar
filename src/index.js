let luoc_navbar = document.createElement('div');
luoc_navbar.id = 'luoc__navbar';
document.body.insertBefore(luoc_navbar,document.body.firstChild);
new Vue
(
    {
        el:'#luoc__navbar',
        template:'<wrapper></wrapper>',
        components:
            {
                wrapper:require('./components/wrapper.vue')
            }
    }
);