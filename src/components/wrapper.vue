<template>
    <div>
        <navbar></navbar>
        <modal_for_login></modal_for_login>
        <modal_for_register></modal_for_register>
        <modal_for_change_password></modal_for_change_password>
    </div>
</template>
<script>
    module.exports =
        {
            data: function () {
                return {};
            },
            components:
                {
                    navbar:require('./navbar.vue'),
                    modal_for_login:require('./modal_for_login.vue'),
                    modal_for_register:require('./modal_for_register.vue'),
                    modal_for_change_password:require('./modal_for_change_password.vue')
                }
        }
</script>
<style scoped>

</style>
