<template src="./EditPostView.html"></template>
<style lang="scss" src="./EditPostView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Editor from 'tui-editor';
import PostEditor from '@/components/PostEditor/PostEditor.vue';

@Component({
  components: {
    PostEditor,
  },
})
export default class EditPostView extends Vue {
  public text: string = '';

  public created() {
    
  }

  public send(editorResult: string) {
    
  }
}
</script>
