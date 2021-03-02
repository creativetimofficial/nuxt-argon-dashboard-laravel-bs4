<template>
  <div class="props-table__wrapper bd-example">
    <table class="table table-striped">
      <thead class="thead-light">
      <tr>
        <th class="prop-col">Name</th>
        <th class="type-col">Description</th>
        <th class="type-col">Params</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(value, index) in events" :key="index">
        <td>
          {{value.name}}
        </td>
        <td>
          {{value.description}}
        </td>
        <td>
          {{value.params}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "slots-table",
    props: {
      events: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style lang="scss">
  .props-table__wrapper {
    margin-top: 20px;
    .table thead th {
      font-weight: bold;
    }
  }
</style>
