<template src="./PostView.html"></template>
<style lang="scss" src="./PostView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Post } from '@/stores/posts/PostModel';
import { CommentModel } from '@/stores/comments/CommentModel';
import { getPost, createComment, getPostComments } from '@/api/PostApi';
import { namespace } from 'vuex-class';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';

import Viewer from 'tui-editor/dist/tui-editor-Viewer';

@Component({
  components: {
  },
})
export default class PostView extends Vue {
  public newComment: CommentModel = {
    content: '',
  };
  public post: Post | null = null;

  public comments: CommentModel[] = [];

  public async mounted() {
    const { success } = await getPost(this.$route.params.id);
    this.post = success!;
    console.log(this.post);
    const response = await getPostComments(this.post.post_id!);
    this.comments = response.success!;
    console.log(this.comments);
    const instance = new Viewer({
      el: document.querySelector('#viewerSection')!,
    });

    instance.setMarkdown(this.post.content!);
  }

  public async createComment() {
    await createComment(this.post!.post_id!, this.newComment);
  }
}
</script>
