<template src="./PostEditor.html"></template>
<style lang="scss" src="./PostEditor.scss"></style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Editor from 'tui-editor';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';

@Component({
  components: {},
})
export default class PostEditor extends Vue {
  @Prop({ default: '' }) public readonly text!: string;
  public editor: Editor | null = null;

  public mounted() {
    this.editor = new Editor({
      el: document.querySelector('#editorSection')!,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '400px',
    });
  }

  public send() {
    this.$emit('editor-result', this.editor ? this.editor.getMarkdown() : '');
  }
}
</script>
