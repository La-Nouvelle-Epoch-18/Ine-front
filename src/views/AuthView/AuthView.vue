<template src="./AuthView.html"></template>
<style lang="scss" src="./AuthView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class AuthView extends Vue {
  public university: boolean = false;
}
</script>
