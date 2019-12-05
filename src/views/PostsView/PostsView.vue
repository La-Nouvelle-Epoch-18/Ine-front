<template src="./PostsView.html"></template>
<style lang="scss" src="./PostsView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostsList from '@/components/PostsList/PostsList.vue';

@Component({
  components: {
    PostsList,
  },
})
export default class PostsView extends Vue {
}
</script>
