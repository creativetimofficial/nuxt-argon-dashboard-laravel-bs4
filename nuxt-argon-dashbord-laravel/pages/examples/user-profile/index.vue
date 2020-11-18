<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-xl-6 order-xl-1" >
                <div>
                    <user-edit-card :user="user"/>
                </div>
                <div class="mt-5">
                    <user-password-card :user="user"/>
                </div>
            </div>
            <div class="col-xl-6 order-xl-2">
                <user-card />
            </div>
        </div>
    </div>
</template>
<script>
import UserEditCard from '~/components/Dashboard/Cards/UserEditCard.vue'
import UserPasswordCard from '~/components/Dashboard/Cards/UserPasswordCard.vue'
import UserCard from '~/components/pages/UserProfile/UserCard.vue';
export default {
    layout: 'DashboardLayout',

    components: {
        UserEditCard,
        UserPasswordCard,
        UserCard
    },

    data() {
        return {
            user: {
                type: 'profile',
                name: null,
                email: null,
                profile_image: null,
            }
        }
    },
     created() {
      this.getProfile();
    },

    methods: {
      async getProfile() {
        await this.$store.dispatch("profile/me")
        this.user = await {...this.$store.getters["profile/me"]}
      }
    }
}
</script>
