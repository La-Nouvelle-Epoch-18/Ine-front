<template src="./MainWrapper.html"></template>
<style lang="scss" src="./MainWrapper.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyNavbar from '@/components/layout/MyNavbar/MyNavbar.vue';
import MyFooter from '@/components/layout/MyFooter/MyFooter.vue';

@Component({
  components: {
    MyNavbar,
    MyFooter,
  },
})
export default class MainWrapper extends Vue {}
</script>
