<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Social traffic</h3>
        </div>
        <div class="col text-right">
          <base-button size="sm" type="primary">See all</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <el-table class="table-responsive table"
                :data="tableData"
                header-row-class-name="thead-light">
        <el-table-column label="Referral"
                         min-width="115px"
                         prop="name">
          <template v-slot="{row}">
            <div class="font-weight-600">{{row.name}}</div>
          </template>
        </el-table-column>

        <el-table-column label="Visitors"
                         min-width="110px"
                         prop="visitors">
        </el-table-column>

        <el-table-column min-width="220px"
                         prop="progress">
          <template v-slot="{row}">
            <div class="d-flex align-items-center">
              <span class="mr-2">{{row.progress}}%</span>
              <base-progress :type="row.progressType"
                             :value="row.progress"
              />
            </div>
          </template>
        </el-table-column>

      </el-table>
    </div>

  </div>
</template>
<script>
  import BaseProgress from '@/components/argon-core/BaseProgress.vue';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'social-traffic-table',
    components: {
      BaseProgress,
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
            name: 'Facebook',
            visitors: '1,480',
            progress: 60,
            progressType: 'gradient-danger',
          },
          {
            name: 'LinkedIn',
            visitors: '5,480',
            progress: 70,
            progressType: 'gradient-success',
          },
          {
            name: 'Google',
            visitors: '4,807',
            progress: 80,
            progressType: 'gradient-primary',
          },
          {
            name: 'Instagram',
            visitors: '3,678',
            progress: 75,
            progressType: 'gradient-info',
          },
          {
            name: 'Twitter',
            visitors: '2,645',
            progress: 30,
            progressType: 'gradient-warning',
          }
        ]
      }
    }

  }
</script>
<style>
</style>
