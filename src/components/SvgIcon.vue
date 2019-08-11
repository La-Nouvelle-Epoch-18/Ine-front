<template>
  <svg class="svg-icon" :class="`svg-icon--${icon.id}`" :viewBox="icon.viewBox">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="`#${icon.id}`" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SvgIcon extends Vue {
  @Prop() public readonly icon!: { id: string, viewBox: string };
  @Prop({ default: '' }) public readonly title!: string;

  public get className() {
    return 'svg-icon svg-icon--' + this.icon.id;
  }
}
</script>

<style>
  .svg-icon {
    fill: currentColor;
    height: 24px;
    width: 24px;
  }
</style>
