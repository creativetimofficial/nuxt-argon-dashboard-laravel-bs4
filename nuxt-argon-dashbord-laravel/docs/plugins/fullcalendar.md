# Full Calendar

Full-sized drag & drop event calendar

<hr>

We used [Full Calendar](https://fullcalendar.io) together with it's newest released [wrapper components for Vue](https://fullcalendar.io/blog/2019/04/react-vue-and-angular-connectors)

### Example

:::demo
```html
<template>
 <full-calendar :events="events"
                 :plugins="calendarPlugins"
                 :editable="true"
                 defaultDate="2018-12-01"
                 contentHeight="auto"
                 :theme="false"
                 :selectable="true"
                 :selectHelper="true"
                 ref="fullCalendar"
                 class="calendar"
                 :defaultView="defaultView"
  >
 </full-calendar>
</template>
<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import format from 'date-fns/format'

  const today = new Date();
  export default {
    name: 'calendar',
    components: {
      FullCalendar
    },
    data() {
      return {
        calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultView: 'dayGridMonth',
        year: today.getFullYear(),
        today: format(today, 'dddd, MMM DD'),
        events: [

          {
            title: 'Call with Dave',
            start: '2018-11-18',
            end: '2018-11-18',
            className: 'bg-red'
          },

          {
            title: 'Lunch meeting',
            start: '2018-11-21',
            end: '2018-11-22',
            className: 'bg-orange'
          },

          {
            title: 'All day conference',
            start: '2018-11-29',
            end: '2018-11-29',
            className: 'bg-green'
          },

          {
            title: 'Meeting with Mary',
            start: '2018-12-01',
            end: '2018-12-01',
            className: 'bg-blue'
          },

          {
            title: 'Winter Hackaton',
            start: '2018-12-03',
            end: '2018-12-03',
            className: 'bg-red'
          },

          {
            title: 'Digital event',
            start: '2018-12-07',
            end: '2018-12-09',
            className: 'bg-warning'
          },

          {
            title: 'Marketing event',
            start: '2018-12-10',
            end: '2018-12-10',
            className: 'bg-purple'
          },

          {
            title: 'Dinner with Family',
            start: '2018-12-19',
            end: '2018-12-19',
            className: 'bg-red'
          },

          {
            title: 'Black Friday',
            start: '2018-12-23',
            end: '2018-12-23',
            className: 'bg-blue'
          },

          {
            title: 'Cyber Week',
            start: '2018-12-02',
            end: '2018-12-02',
            className: 'bg-yellow'
          },
        ],
      };
    }
  };
</script>
<style lang="scss">
  @import "~@fullcalendar/core/main.css";
  @import "~@/assets/sass/core/vendors/fullcalendar";
</style>

```
:::


### Documentation

You can check out the component documentations [here](https://fullcalendar.io/docs/vue)


<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import format from 'date-fns/format'
  const today = new Date();
  export default {
    name: 'calendar',
    components: {
      FullCalendar
    },
    data() {
      return {
        calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultView: 'dayGridMonth',
        year: today.getFullYear(),
        today: format(today, 'dddd, MMM DD'),
        events: [

          {
            title: 'Call with Dave',
            start: '2018-11-18',
            end: '2018-11-18',
            className: 'bg-red'
          },

          {
            title: 'Lunch meeting',
            start: '2018-11-21',
            end: '2018-11-22',
            className: 'bg-orange'
          },

          {
            title: 'All day conference',
            start: '2018-11-29',
            end: '2018-11-29',
            className: 'bg-green'
          },

          {
            title: 'Meeting with Mary',
            start: '2018-12-01',
            end: '2018-12-01',
            className: 'bg-blue'
          },

          {
            title: 'Winter Hackaton',
            start: '2018-12-03',
            end: '2018-12-03',
            className: 'bg-red'
          },

          {
            title: 'Digital event',
            start: '2018-12-07',
            end: '2018-12-09',
            className: 'bg-warning'
          },

          {
            title: 'Marketing event',
            start: '2018-12-10',
            end: '2018-12-10',
            className: 'bg-purple'
          },

          {
            title: 'Dinner with Family',
            start: '2018-12-19',
            end: '2018-12-19',
            className: 'bg-red'
          },

          {
            title: 'Black Friday',
            start: '2018-12-23',
            end: '2018-12-23',
            className: 'bg-blue'
          },

          {
            title: 'Cyber Week',
            start: '2018-12-02',
            end: '2018-12-02',
            className: 'bg-yellow'
          },
        ],
      };
    }
  };
</script>
