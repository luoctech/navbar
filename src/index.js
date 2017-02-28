// Vue.component('luoc-navbar-wrapper',require('./components/wrapper.vue'));
var luoc_navbar=new Vue
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