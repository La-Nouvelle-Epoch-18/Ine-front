<template src="./CreatePostView.html"></template>
<style lang="scss" src="./CreatePostView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Editor from 'tui-editor';
import PostEditor from '@/components/PostEditor/PostEditor.vue';

@Component({
  components: {
    PostEditor,
  },
})
export default class CreatePostView extends Vue {
  public send(editorResult: string) {
    
  }
}
</script>
