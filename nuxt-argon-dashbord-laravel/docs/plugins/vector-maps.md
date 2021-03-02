# Vector Maps

We created a custom component based on  

<hr>

## Initialization

Import the `WorldMap` component 

```js
import WorldMap from '@/components/argon-core/WorldMap/WorldMap.vue';
export default {
  components: {
    WorldMap
  },
}
```

### Basic example

:::demo
```html
<template>
   <world-map class="vector-map"
              :map-data="mapData">
   </world-map>
</template>

<script>
import WorldMap from '@/components/argon-core/WorldMap/WorldMap.vue';
export default {
  name: 'map-card',
  components: {
    WorldMap
  },
  data() {
      return {
        mapData: {
          AUS: 760,
          BRA: 900,
          CAN: 120,
          DEU: 1300,
          FRA: 540,
          GBR: 690,
          GEO: 200,
          IND: 200,
          ROU: 600,
          RUS: 757,
          USA: 1800
        }
      }
    }
  };
</script>
```
:::



### Points (dots) on the map

:::demo
```html
<template>
   <world-map class="vector-map"
              :map-data="mapData"
              :points="points">
   </world-map>
</template>

<script>
import WorldMap from '@/components/argon-core/WorldMap/WorldMap.vue';
export default {
  name: 'map-card',
  components: {
    WorldMap
  },
  data() {
      return {
        mapData: {
          AUS: 760,
          BRA: 900,
          CAN: 120,
          DEU: 1300,
          FRA: 540,
          GBR: 690,
          GEO: 200,
          IND: 200,
          ROU: 600,
          RUS: 757,
          USA: 1800
        },
        points: [
          {
            name: 'Brazil',
            centered: 'BRA',
          },
          {
            name: 'France',
            centered: 'FRA',
          },
          {
            name: 'Italy',
            centered: 'ITA',
          },
          {
            name: 'Oman',
            centered: 'OMN',
          },
          {
            name: 'Indonesia',
            centered: 'IDN',
          },
          {
            name: 'Romania',
            centered: 'ROU',
          }
        ]
      }
    }
  };
</script>
```
:::

<script>
import WorldMap from '@/components/argon-core/WorldMap/WorldMap.vue';
export default {
  name: 'map-card',
  components: {
    WorldMap
  },
  data() {
      return {
        mapData: {
          AUS: 760,
          BRA: 900,
          CAN: 120,
          DEU: 1300,
          FRA: 540,
          GBR: 690,
          GEO: 200,
          IND: 200,
          ROU: 600,
          RUS: 757,
          USA: 1800
        },
        points: [
          {
            name: 'Brazil',
            centered: 'BRA',
          },
          {
            name: 'France',
            centered: 'FRA',
          },
          {
            name: 'Italy',
            centered: 'ITA',
          },
          {
            name: 'Oman',
            centered: 'OMN',
          },
          {
            name: 'Indonesia',
            centered: 'IDN',
          },
          {
            name: 'Romania',
            centered: 'ROU',
          }
        ]
      }
    }
  };
</script>
