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
                  prepend-icon="ni ni-lock-circle-open"
                  placeholder="Password"
                  type="password"
                  name="Password"
                  v-model="form.data.attributes.password"
                >
                </base-input>
                <validation-error :errors="apiValidationErrors.password" />

                <base-input
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-lock-circle-open"
                  placeholder="Confirm Password"
                  type="password"
                  name="Password confirmation"
                  v-model="form.data.attributes.password_confirmation"
                >
                </base-input>

                <div class="text-center">
                  <base-button type="primary" native-type="submit" class="my-4"
                    >Reset Password</base-button
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
          type: "password-reset",
          attributes: {
            password: "",
            password_confirmation: "",
            token: "",
            email: "",
          },
        },
      },
    };
  },
  mounted() {
    this.form.data.attributes.email = this.$route.query.email;
    this.form.data.attributes.token = this.$route.query.token;
  },
  beforeDestroy() {
    this.$router.replace({ query: null });
  },
  methods: {
    async handleSubmit() {
      try {
        await this.$store.dispatch("reset/createNewPassword", this.form.data);
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "The given data was invalid.",
        });
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>
