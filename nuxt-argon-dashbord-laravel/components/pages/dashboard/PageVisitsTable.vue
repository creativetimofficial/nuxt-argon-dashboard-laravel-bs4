<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Page visits</h3>
        </div>
        <div class="col text-right">
          <a href="#!" class="btn btn-sm btn-primary">See all</a>
        </div>
      </div>
    </div>

    <el-table class="table-responsive table"
              :data="tableData"
              header-row-class-name="thead-light">
      <el-table-column label="Page name"
                       sortable
                       min-width="130px"
                       prop="page">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.page}}</div>
        </template>
      </el-table-column>
      <el-table-column label="Visitors"
                       sortable
                       min-width="70px"
                       prop="visitors">
      </el-table-column>
      <el-table-column label="Unique users"
                       sortable
                       min-width="90px"
                       prop="unique">
      </el-table-column>

      <el-table-column label="Bounce rate"
                       sortable
                       min-width="90px"
                       prop="bounceRate">
        <template v-slot="{row}">
          <i class="fas fa-arrow-up text-success mr-3"
             :class="row.bounceRateDirection === 'up' ? 'text-success': 'text-danger'">
          </i>
          {{row.bounceRate}}
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'page-visits-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        tableData: [
          {
            page: '/argon/',
            visitors: '4,569',
            unique: '340',
            bounceRate: '46,53%',
            bounceRateDirection: 'up'
          },
          {
            page: '/argon/index.html',
            visitors: '3,985',
            unique: '319',
            bounceRate: '46,53%',
            bounceRateDirection: 'down'
          },
          {
            page: '/argon/charts.html',
            visitors: '3,513',
            unique: '294',
            bounceRate: '36,49%',
            bounceRateDirection: 'down'
          },
          {
            page: '/argon/tables.html',
            visitors: '2,050',
            unique: '147',
            bounceRate: '50,87%',
            bounceRateDirection: 'up'
          },
          {
            page: '/argon/profile.html',
            visitors: '1,795',
            unique: '190',
            bounceRate: '46,53%',
            bounceRateDirection: 'down'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
