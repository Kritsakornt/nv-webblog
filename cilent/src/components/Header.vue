<template>
    <div>
        <div class="nv-navbar">
            <ul class="nav">
                <li><router-link :to="{name: 'blogs'}">Blogs</router-link></li>
                <li><router-link :to="{name: 'users'}">Users</router-link></li>
                <li><router-link :to="{name: 'comments'}">Comments</router-link></li>
                <li><router-link :to="{name: 'login'}">Login</router-link></li>
                <li><router-link :to="{name: 'blogs'}">Blogs</router-link></li>
                <li><a v-on:click.prevent="logout" href="#">Logout</a></li>
            </ul>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'login'
            })
        }
    }
}
</script>
<style scoped>
    .nv-navbar {
        background-color: #1A1A1D;
        width: 100%;
        padding: 10px 0px 10px 0px;
    }

    .nv-navbar .nav {
        list-style: none;
        margin: 0;
        padding: 0;
        float: left;
    }

    .nv-navbar .nav li {
        float: left;
    }

    .nv-navbar .nav li a {
        padding: 10px;
        text-decoration: none;
        color: #fa0265;
        font-weight: bold;
    }

    .nv-navbar .nav li a:hover {
        padding: 10px;
        text-decoration: none;
        color: #fa0265;
    }

    .nv-navbar .nav li a.router-link-active {
        background-color: #ff004c;
        color: #1A1A1D;
    }

    .clearfix {
        clear: left;
    }

</style>
