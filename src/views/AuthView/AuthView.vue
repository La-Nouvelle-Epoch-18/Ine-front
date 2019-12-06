<template src="./AuthView.html"></template>
<style lang="scss" src="./AuthView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { LoginRequest, LoginResponse, RegisterRequest } from '../../stores/users/UserModel';
import { PromiseInterface } from '../../api/Http';

const userModule = namespace('users');

@Component({
  components: {
  },
})
export default class AuthView extends Vue {
  public snackbarLoginKO: boolean = false;
  public snackbarRegisterKO: boolean = false;

  public loginReq: LoginRequest = {
    email: '',
    password: '',
  };
  public registerReq: RegisterRequest = {
    username: '',
    password: '',
    email: '',
    isSchool: false,
  };

  @userModule.Action public loginUser!: (data: LoginRequest) =>
              Promise<PromiseInterface<LoginResponse>>;

  @userModule.Action public registerUser!: (data: RegisterRequest) =>
              Promise<PromiseInterface<LoginResponse>>;

  public async login() {
    const { success, error } = await this.loginUser(this.loginReq);
    if (error) {
      this.snackbarLoginKO = true;
      this.snackbarRegisterKO = false;
    } else {
      this.snackbarLoginKO = false;
      this.snackbarRegisterKO = false;
      this.$router.push({ name: 'home' });
    }
  }

  public async register() {
    const { success, error } = await this.registerUser(this.registerReq);
    if (error) {
      this.snackbarRegisterKO = true;
      this.snackbarLoginKO = false;
    } else {
      this.snackbarRegisterKO = false;
      this.snackbarLoginKO = false;
      this.$router.push({ name: 'home' });
    }
  }

}
</script>
