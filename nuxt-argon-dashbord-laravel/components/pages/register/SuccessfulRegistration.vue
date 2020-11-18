<template>
  <card type="success"
        header-classes="bg-success"
        body-classes="px-md-3 py-md-3"
        class="border-0">
    <template slot="header">
      <h2 class="text-uppercase display-3 ls-1 text-white text-center mb-0">
        You are registered!
      </h2>
    </template>


    <template>
      <div class="text-center py-3">
        <div class="py-5"> <i class="fa fa-thumbs-up text-white"></i> </div>
        <h4 class="display-4 text-white pt-4">
          Please check your email to confirm your account registration.
        </h4>
      </div>

    </template>
  </card>
</template>

<style scoped>
i {
  transform: scale(6);
}
</style>
