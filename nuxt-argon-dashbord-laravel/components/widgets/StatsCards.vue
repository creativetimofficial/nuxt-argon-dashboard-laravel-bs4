<template>
  <div>
    <stats-card class="bg-gradient-default">
      <!-- Card body -->
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total traffic</h5>
          <span class="h2 font-weight-bold mb-0 text-white">350,897</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-white text-dark rounded-circle shadow">
            <i class="ni ni-active-40"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-sm">
        <span class="text-white mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
        <span class="text-nowrap text-light">Since last month</span>
      </p>

    </stats-card>
    <card class="bg-gradient-primary">
      <!-- Card body -->
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0 text-white">New users</h5>
          <span class="h2 font-weight-bold mb-0 text-white">2,356</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-white text-dark rounded-circle shadow">
            <i class="ni ni-atom"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-sm">
        <span class="text-white mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
        <span class="text-nowrap text-light">Since last month</span>
      </p>
    </card>
    <card class="bg-gradient-danger">
      <!-- Card body -->
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0 text-white">Performance</h5>
          <span class="h2 font-weight-bold mb-0 text-white">49,65%</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-white text-dark rounded-circle shadow">
            <i class="ni ni-spaceship"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-sm">
        <span class="text-white mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
        <span class="text-nowrap text-light">Since last month</span>
      </p>
    </card>
  </div>
</template>
<script>
  import StatsCard from '@/components/argon-core/Cards/StatsCard'

  export default {
    components: {
      StatsCard
    }
  }
</script>
<style>
</style>
