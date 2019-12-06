<template src="./MyNavbar.html"></template>
<style lang="scss" src="./MyNavbar.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const userModule = namespace('users');

@Component
export default class MyNavbar extends Vue {
    @userModule.Getter public isConnected!: boolean;
}
</script>
