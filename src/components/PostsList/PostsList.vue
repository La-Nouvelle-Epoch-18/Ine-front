<template src="./PostsList.html"></template>
<style lang="scss" src="./PostsList.scss"></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Post } from '@/stores/posts/PostModel';
import PostCard from '@/components/PostCard/PostCard.vue';

@Component({
    components: {
        PostCard,
    },
})
export default class PostsList extends Vue {
    public posts: Post[] = [{
        id: 1,
        title: 'Titre 1',
        content: 'Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
    },
    {
        id: 2,
        title: 'Titre 2',
        content: 'Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
    }];
}
</script>
