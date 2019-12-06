<template src="./ProfileView.html"></template>
<style lang="scss" src="./ProfileView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Post } from '../../stores/posts/PostModel';

@Component({
  components: {
  },
})
export default class ProfileView extends Vue {
  public posts: Post[] = [];

  public async mounted() {
    // const { userSuccess } = await getUser

    // const { success } = await
  }
}
</script>
