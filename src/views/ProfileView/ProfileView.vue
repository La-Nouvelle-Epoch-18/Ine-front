<template src="./ProfileView.html"></template>
<style lang="scss" src="./ProfileView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Post } from '../../stores/posts/PostModel';
import { getAll } from '@/api/ChannelApi';
import PostsList from '@/components/PostsList/PostsList.vue';

@Component({
  components: {
    PostsList
  },
})
export default class ProfileView extends Vue {
  public posts: Post[] = [];

  public async mounted() {
    const { success } = await getAll();

    this.posts = success!;
  }
}
</script>
