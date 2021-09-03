<template>
    <div>
        <h1>Create Blog</h1>
        <form v-on:submit.prevent = "createBlog">
            <p>title : <input type="text" v-model="blog.title"></p>
            <p>content : <input type="text" v-model="blog.content"></p>
            <p>category : <input type="text" v-model="blog.category"></p>
            <p>status : <input type="text" v-model="blog.status"></p>
            <p><button type="submit"> create blog </button></p>
        </form>
    </div>
</template>
<script>
import BlogsService from '@/services/BlogsService'

export default {
    data () {
        return {
            blog: {
                title: '',
                thumbnail: 'null',
                pictures: 'null',
                content: '',
                category: '',
                status: 'saved'
            }
        }
    },
    methods: {
        async createBlog () {
            try {
                await BlogsService.post(this.blog)
                this.$router.push({
                    name: 'blogs'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>

</style>
