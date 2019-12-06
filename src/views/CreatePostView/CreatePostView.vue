<template src="./CreatePostView.html"></template>
<style lang="scss" src="./CreatePostView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Editor from 'tui-editor';
import PostEditor from '@/components/PostEditor/PostEditor.vue';
import { createPost } from '../../api/PostApi';
import { Post } from '@/stores/posts/PostModel';

@Component({
  components: {
    PostEditor,
  },
})
export default class CreatePostView extends Vue {
  public post: Post = { title: '', content: '' };

  public async send(editorResult: string) {
    this.post.content = editorResult;
    await createPost(this.post);
    this.$router.push({name: '/Posts'});
  }
}
</script>
