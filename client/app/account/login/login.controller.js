'use strict';

class LoginController {
  constructor(Auth, $state) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        if (musician) {

        }
        .then(() => {
          // Logged in, redirect to home
          this.$state.go('profile', { id: user_id});
        })
        else if (organizer) {

        }
        .then(() => {
          this.$state.go('event', { id: id});
        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('musicContractorApp')
  .controller('LoginController', LoginController);
