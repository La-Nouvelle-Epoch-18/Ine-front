<template src="./PostCard.html"></template>
<style lang="scss" src="./PostCard.scss"></style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Post } from '@/stores/posts/PostModel';

@Component
export default class PostsCard extends Vue {
    @Prop() public post!: Post;
}
</script>
