<template src="./PostsList.html"></template>
<style lang="scss" src="./PostsList.scss"></style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Post } from '@/stores/posts/PostModel';
import PostCard from '@/components/PostCard/PostCard.vue';

@Component({
    components: {
        PostCard,
    },
})
export default class PostsList extends Vue {
    @Prop() public readonly posts!: Post[];
}
</script>
