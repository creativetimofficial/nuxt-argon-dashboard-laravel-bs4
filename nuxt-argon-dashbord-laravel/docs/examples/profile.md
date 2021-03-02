# Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples/ User Profile**" link in the left sidebar or add **/examples/user-profile** in the URL.

The `src\pages\examples\user-profile` is the folder with Vue components that handle the update of the user information and password.

## Edit profile component

```
<template>
  <div class="card">
    <div class="card-header">
      <h1>Edit Profile</h1>
    </div>
    <div class="card-body">
      <form ref="profile_form" @submit.prevent="onProFeature">
        <base-input
          label="Name"
          prepend-icon="fas fa-user"
          placeholder="Your name"
          v-model="user.name"
        />
        <validation-error :errors="apiValidationErrors.name" />
        <base-input
          label="Email"
          prepend-icon="fas fa-envelope"
          placeholder="Email"
          v-model="user.email"
        />
        <validation-error :errors="apiValidationErrors.email" />
        <div class="my-4">
          <base-button
            type="button"
            class="btn btn-sm btn-primary"
            native-type="submit"
          >
            Submit
          </base-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseInput from "~/components/argon-core/Inputs/BaseInput.vue";
import BaseButton from "~/components/argon-core/BaseButton.vue";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "~/components/ValidationError.vue";

export default {
  name: "UserEditCard",

  components: {
    BaseInput,
    BaseButton,
    ValidationError,
  },

  mixins: [formMixin],

  props: {
    user: Object,
  },

  methods: {
    onProFeature() {
      this.$notify({
        type: "danger",
        message: "This is a PRO feature."
      });
    },
  },
};
</script>
```

## Edit password component

```
<template>
  <div class="card">
    <div class="card-header">
      <h1>Change Password</h1>
    </div>
    <div class="card-body">
      <form ref="password_form" @submit.prevent="onProFeature">
        <base-input
          v-model="password"
          type="password"
          name="new_password"
          autocomplete="on"
          class="mb-3"
          prepend-icon="fa fa-key"
          placeholder="New Password"
        />
        <validation-error :errors="apiValidationErrors.password" />

        <base-input
          v-model="password_confirmation"
          type="password"
          name="confirm_password"
          autocomplete="on"
          class="mb-3"
          prepend-icon="fa fa-key"
          placeholder="Confirm Password"
        />

        <div class="my-4">
          <base-button
            type="button"
            class="btn btn-sm btn-primary"
            native-type="submit"
          >
            Change Password
          </base-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseInput from "~/components/argon-core/Inputs/BaseInput.vue";
import BaseButton from "~/components/argon-core/BaseButton.vue";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "~/components/ValidationError.vue";

export default {
  name: "UserPasswordCard",

  components: {
    BaseInput,
    BaseButton,
    ValidationError,
  },

  mixins: [formMixin],

  props: {
    user: Object,
  },

  data() {
    return {
      password: null,
      password_new: null,
      password_confirmation: null,
    };
  },

  methods: {
    onProFeature() {
      this.$notify({
        type: "danger",
        message: "This is a PRO feature."
      });
    },
  },
};
</script>
```
