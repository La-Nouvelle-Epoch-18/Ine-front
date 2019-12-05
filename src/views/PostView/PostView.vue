<template src="./PostView.html"></template>
<style lang="scss" src="./PostView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Post } from '@/stores/posts/PostModel';
import { CommentModel } from '@/stores/comments/CommentModel';

@Component({
  components: {
  },
})
export default class PostView extends Vue {
  public post: Post = {
    id: 1,
    title: 'yrwetxdfuyglhmjl',
    content: 'terdfkyglfiukfkuygkdusgflufgeziflugeqflieuhfvloiezvhfblseiuviehrfvblreiuvbhgslieurh',
  };

  public comments: CommentModel[] = [{
    content: 'Comment Comment Comment Comment Commeeeent Comment Cooommmmeeeeeent Cooommeeeeeent',
    post: 1,
  }, {
    content: 'NaNaNANANANANANANANANANANANANANANNANAN COMMMENT',
    post: 1,
  }];
}
</script>
