<template>
  <div>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb></route-breadcrumb>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </div>
      </div>

      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card
            title="Total traffic"
            type="gradient-red"
            sub-title="350,897"
            icon="ni ni-active-40"
          >
            <template slot="footer">
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 3.48%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card
            title="Total traffic"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-chart-pie-35"
          >
            <template slot="footer">
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 12.18%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card
            title="Sales"
            type="gradient-green"
            sub-title="924"
            icon="ni ni-money-coins"
          >
            <template slot="footer">
              <span class="text-danger mr-2"
                ><i class="fa fa-arrow-down"></i> 5.72%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card
            title="Performance"
            type="gradient-info"
            sub-title="49,65%"
            icon="ni ni-chart-bar-32"
          >
            <template slot="footer">
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 54.8%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-8">
          <card type="default" header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">Sales value</h5>
              </div>
              <div class="col">
                <ul class="nav nav-pills justify-content-end">
                  <li class="nav-item mr-2 mr-md-0">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 0 }"
                      @click.prevent="initBigChart(0)"
                    >
                      <span class="d-none d-md-block">Month</span>
                      <span class="d-md-none">M</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 1 }"
                      @click.prevent="initBigChart(1)"
                    >
                      <span class="d-none d-md-block">Week</span>
                      <span class="d-md-none">W</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </div>

        <div class="col-xl-4">
          <card header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </div>
            </div>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </div>
      </div>
      <!-- End charts-->

      <!--Tables-->
      <div class="row">
        <div class="col-xl-8">
          <page-visits-table></page-visits-table>
        </div>
        <div class="col-xl-4">
          <social-traffic-table></social-traffic-table>
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/argon-core/Charts/config";
import LineChart from "@/components/argon-core/Charts/LineChart";
import BarChart from "@/components/argon-core/Charts/BarChart";

import RouteBreadCrumb from "@/components/argon-core/Breadcrumb/RouteBreadcrumb";
import StatsCard from "@/components/argon-core/Cards/StatsCard";
import SocialTrafficTable from "@/components/pages/dashboard/SocialTrafficTable.vue";
import PageVisitsTable from "@/components/pages/dashboard/PageVisitsTable.vue";

export default {
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.$auth.loggedIn) {
      return redirect("/login");
    }
  },
  layout: "DashboardLayout",
  components: {
    LineChart,
    BarChart,
    RouteBreadCrumb,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable,
  },
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: "Performance",
              data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
            },
          ],
          labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 29],
            },
          ],
        },
      },
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Performance",
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    this.initBigChart(0);
  },
};
</script>
<style>
</style>
