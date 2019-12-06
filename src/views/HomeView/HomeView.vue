<template src="./HomeView.html"></template>
<style lang="scss" src="./HomeView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';

import Viewer from 'tui-editor/dist/tui-editor-Viewer';
import { getReadme } from '../../api/ReadmeApi';

@Component({
  components: {
  },
})
export default class HomeView extends Vue {
  public homeMarkup: string = '';

  public async mounted() {
    const { success } = await getReadme();

    const instance = new Viewer({
      el: document.querySelector('#viewerSection')!,
      initialValue: '# content to be rendered',
    });

    instance.setMarkdown(success!);
  }
}
</script>
