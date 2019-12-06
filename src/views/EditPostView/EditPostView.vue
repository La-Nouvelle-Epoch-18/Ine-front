<template src="./EditPostView.html"></template>
<style lang="scss" src="./EditPostView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Editor from 'tui-editor';
import PostEditor from '@/components/PostEditor/PostEditor.vue';
import { Post } from '../../stores/posts/PostModel';
import { createPost } from '../../api/PostApi';

@Component({
  components: {
    PostEditor,
  },
})
export default class EditPostView extends Vue {
  public post: Post = { title: '', content: '' };

  public async send(editorResult: string) {
    this.post.content = editorResult;
    await createPost(this.post);
  }
}
</script>
