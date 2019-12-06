<template src="./PostView.html"></template>
<style lang="scss" src="./PostView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Post } from '@/stores/posts/PostModel';
import { CommentModel } from '@/stores/comments/CommentModel';
import { getPost } from '@/api/PostApi';
import { namespace } from 'vuex-class';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';

import Viewer from 'tui-editor/dist/tui-editor-Viewer';

@Component({
  components: {
  },
})
export default class PostView extends Vue {
  public post: Post = {};

  public comments: CommentModel[] = [];

  public async mounted() {
    const { success } = await getPost(this.$route.params.id);

    const instance = new Viewer({
      el: document.querySelector('#viewerSection')!,
    });

    this.post = success!;
    instance.setMarkdown(this.post.content!);
  }
}
</script>
