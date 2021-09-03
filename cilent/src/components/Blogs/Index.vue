<template>
    <div>
        <h2>Get all blogs</h2>
        <!-- <p><button v-on:click="logout">Logout</button></p> -->
        <h4>จำนวน blog {{blogs.length}}</h4>
        <p><button v-on:click="navigateTo('/blog/create')">สร้าง blog</button></p>
        <div v-for="blog in blogs" v-bind:key="blog.id">
            <p>id : {{ blog.id }}</p>
            <p>title : {{ blog.title }}</p>
            <p>content : {{ blog.content }}</p>
            <p>category : {{ blog.category }}</p>
            <p>status : {{ blog.status }}</p>
            <p>
                <button v-on:click="navigateTo('/blog/'+ blog.id)">ดู blog</button>
                <button v-on:click="navigateTo('/blog/edit/'+ blog.id)">แก้ไข blog</button>
                <button v-on:click="deleteBlog(blog)">ลบข้อมูล</button>
            </p>
            <hr />
        </div>
    </div>
</template>
<script>
import BlogsService from '@/services/BlogsService'

export default {
data () {
    return {
        blogs: []
    }
},
async created () {
    this.blogs = (await BlogsService.index()).data
},
methods: {
    logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setBlog', null)
        this.$router.push({
            name: 'login'
        })
    },
    navigateTo (route) {
        this.$router.push(route)
    },
    async deleteBlog (blog) {
        let result = confirm("Want to delete?")
        if (result) {
            try {
                await BlogsService.delete(blog)
                this.refreshData()
            } catch (err) {
                console.log(err)
            }
        }
    },
    async refreshData() {
        this.blogs = (await BlogsService.index()).data
    }
}
}
</script>
<style scoped>
</style>
