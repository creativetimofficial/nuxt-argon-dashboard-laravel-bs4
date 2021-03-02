<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <notifications></notifications>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--9 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Reset password</small>
              </div>

              <form class="needs-validation" @submit.prevent="handleSubmit()">
                <base-input
                  alternative
                  class="mb-3"
                  name="Email"
                  prepend-icon="ni ni-email-83"
                  placeholder="Email"
                  v-model="form.data.attributes.email"
                >
                </base-input>
                <validation-error :errors="apiValidationErrors.email" />

                <div class="text-center">
                  <!-- <base-button type="submit" @click.prevent="handleSubmit" class="my-4">Sign in</base-button> -->
                  <base-button type="primary" native-type="submit" class="my-4"
                    >Send Password Reset Link</base-button
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ValidationError from "~/components/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";
export default {
  layout: "AuthLayout",
  mixins: [formMixin],
  components: { ValidationError },
  auth: "guest",
  data() {
    return {
      form: {
        data: {
          type: "password-forgot",
          attributes: {
            email: "",
            redirect_url: process.env.baseUrl + "/password/email",
          },
        },
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (this.$isDemo == 1) {
        await this.$notify({
          type: "danger",
          message: "Password reset is disabled in the demo.",
        });
        return;
      }
      try {
        await this.$store.dispatch("reset/forgotPassword", this.form.data);
        await this.$notify({
          type: "success",
          message: "An email with reset password link was sent.",
        });
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "We can't find a user with that e-mail address.",
        });
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>
