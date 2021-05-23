<template>
    <blog-layout>
        {{$page.post.tag}}
        <div v-html="$page.post.content"></div>
    </blog-layout>
</template>

<page-query>
    query Post($path : String!) {
        post: post (path : $path ) {
            content
            title
            tag {
                title
            }
        }
    }
</page-query>

<script>
    import BlogLayout from '~/layouts/Blog'

    export default {
        components: {
            BlogLayout
        }
    }
</script>
