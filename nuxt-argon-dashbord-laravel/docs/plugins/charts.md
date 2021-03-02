# Charts

Chart components are wrappers over [Vue Chart.js](https://vue-chartjs.org/) library and enhanced visually to look inline with the dashboard style.

<hr>

Initialization:

```js
// Charts
  import * as chartConfigs from '@/components/argon-core/Charts/config';
  import LineChart from '@/components/argon-core/Charts/LineChart';
  import BarChart from '@/components/argon-core/Charts/BarChart';

export default {
  components: {
    LineChart,
    BarChart
  }
}
```

### Line Chart example

:::demo
```html
<card type="default" header-classes="bg-transparent">
    <div slot="header" class="row align-items-center">
        <div class="col">
            <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
            <h5 class="h3 text-white mb-0">Sales value</h5>
        </div>
        <div class="col">
            <ul class="nav nav-pills justify-content-end">
                <li class="nav-item mr-2 mr-md-0">
                    <a class="nav-link py-2 px-3"
                       href="#"
                       :class="{active: bigLineChart.activeIndex === 0}"
                       @click.prevent="initBigChart(0)">
                        <span class="d-none d-md-block">Month</span>
                        <span class="d-md-none">M</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link py-2 px-3"
                       href="#"
                       :class="{active: bigLineChart.activeIndex === 1}"
                       @click.prevent="initBigChart(1)">
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

<script>
import * as chartConfigs from '@/components/argon-core/Charts/config';
export default {
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      }
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: 'Performance',
            data: this.bigLineChart.allData[index]
          }
        ],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted() {
    this.initBigChart(0);
  }
};
</script>

```
:::

#### Updating charts

A common use case is the one where you need to update the chart data in real time.
Although this is pretty easy to do, there are some nuances to it, due to certain limitations around
[change detections in Vue.js](https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats) and 
[Vue Chart.js](https://vue-chartjs.org/guide/#updating-charts). 

In order to update charts, you'll have to re-assign the whole `chartData`, otherwise the changes  

::: tip DO
```html
<line-chart :chart-data="myChartData"></line-chart>
<script>
 export default {
   data() {
     return {
      myChartData: {
         datasets: [
           {
             label: 'Performance',
             data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
           }
         ],
         labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      }  
     }
   },
   methods: {
     updateChart() {
       this.myChartData = {
         datasets: [
           {
             label: 'Performance',
             data: [10, 20, 10, 30, 15, 40, 20, 60, 60],
           }
         ],
         labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
       }
     }
   }
 }
</script>

```
:::

::: danger DON'T
```html
<line-chart :chart-data="myChartData"></line-chart>
<script>
 export default {
   data() {
     return {
      myChartData: null  
     }
   },
   methods: {
     updateChart() {
       this.myChartData.datasets[0] = 10
     }
   }
 }
</script>
```
:::


Although second option is more convinient it won't work and the chart won't update.
Another easy option is to clone the original values, update them, then re-assign your `chartData`

### Bar Chart

:::demo
```html
<template>
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
            :chart-data="redBarChart.chartData">
    </bar-chart>
</card>
</template>

<script>
export default {
  data() {
    return {
     redBarChart: {
       chartData: {
         labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         datasets: [{
           label: 'Sales',
           data: [25, 20, 30, 22, 17, 29]
         }]
       }
     }

    };
  }
};
</script>

```
:::




### LineChart Props

<props-table component-name="line-chart"></props-table>


### BarChart Props

<props-table component-name="bar-chart"></props-table>

### PieChart Props

<props-table component-name="pie-chart"></props-table>

### DoughnutChart Props

<props-table component-name="doughnut-chart"></props-table>
 

<script>
import * as chartConfigs from '@/components/argon-core/Charts/config';
function randomScalingFactor() {
  return Math.round(Math.random() * 100);
}

export default {
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        }
      }
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: 'Performance',
            data: this.bigLineChart.allData[index]
          }
        ],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted() {
    this.initBigChart(0);
  }
};
</script>
