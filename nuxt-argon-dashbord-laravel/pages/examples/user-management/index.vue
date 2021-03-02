<template>
  <div class="container-fluid mt-5">
    <div class="alert alert-danger">
      <strong
        >Add, Edit, Delete features are not functional. This is a PRO feature!
        Click
        <a
          href="https://www.creative-tim.com/live/nuxt-argon-dashboard-pro-laravel"
          target="_blank"
          id="pro-feature"
          >here</a
        >
        to see the PRO product.</strong
      >
    </div>
    <div>
      <card
        class="no-border-card"
        body-classes="px-0 pb-1"
        footer-classes="pb-2"
      >
        <template slot="header">
          <div class="row">
            <div class="col-6">
              <h3 class="mb-0">Users List</h3>
            </div>
            <div class="col-6 text-right">
              <base-button type="primary" icon size="sm" @click="onProFeature">
                <span class="btn-inner--icon"
                  ><i class="fas fa-user-edit"></i
                ></span>
                <span class="btn-inner--text">Add User</span>
              </base-button>
            </div>
          </div>
        </template>
        <div>
          <div
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap mb-4"
          >
            <el-select
              class="select-primary pagination-select"
              v-model="pagination.perPage"
              placeholder="Per page"
            >
              <el-option
                class="select-primary"
                v-for="item in pagination.perPageOptions"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </div>
          <el-table
            class="table-responsive align-items-center table-flush"
            header-row-class-name="thead-light"
            :data="users"
            @sort-change="sortChange"
          >
            <el-table-column
              label="Name"
              min-width="310px"
              prop="name"
              sortable="custom"
            />
            <el-table-column
              label="Email"
              min-width="310px"
              prop="email"
              sortable="custom"
            />
            <el-table-column
              label="Created At"
              prop="created_at"
              min-width="140px"
              sortable="custom"
            />
            <el-table-column min-width="180px" align="center">
              <div class="table-actions">
                <el-tooltip content="Edit" placement="top">
                  <a
                    type="text"
                    @click="onProFeature"
                    class="table-action"
                    data-toggle="tooltip"
                    style="cursor: pointer"
                  >
                    <i class="fas fa-user-edit"></i>
                  </a>
                </el-tooltip>

                <el-tooltip content="Delete" placement="top">
                  <a
                    type="text"
                    @click="onProFeature"
                    class="table-action table-action-delete"
                    data-toggle="tooltip"
                    style="cursor: pointer"
                  >
                    <i class="fas fa-trash"></i>
                  </a>
                </el-tooltip>
              </div>
            </el-table-column>
          </el-table>
        </div>
        <div
          slot="footer"
          class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
        >
          <div class="">
            <p class="card-category">
              Showing {{ from + 1 }} to {{ to }} of {{ total }} entries

              <span v-if="selectedRows.length">
                &nbsp; &nbsp; {{ selectedRows.length }} rows selected
              </span>
            </p>
          </div>
          <base-pagination
            class="pagination-no-border"
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="total"
          />
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { BasePagination } from "@/components/argon-core";
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Tooltip,
  Select,
  Option,
  Button,
} from "element-ui";

export default {
  layout: "DashboardLayout",

  components: {
    BasePagination,
    [Tooltip.name]: Tooltip,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    [Select.name]: Select,
    [Option.name]: Option,
    [Button.name]: Button,
  },

  data() {
    return {
      selectedRows: [],
      users: [],
      sort: "created_at",

      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
      },

      total: 1,
    };
  },
  computed: {
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },

    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
  },

  created() {
    this.getList();
  },

  methods: {
    getList() {
      this.users = [
        {
          name: "Admin",
          email: "admin@jsonapi.com",
          created_at: "2020-01-01",
        },
      ];
    },
    onProFeature() {
      this.$notify({
        type: "danger",
        message: "This is a PRO feature.",
      });
    },
    sortChange({ prop, order }) {
      if (order === "descending") {
        this.sort = `-${prop}`;
      } else {
        this.sort = `${prop}`;
      }
      this.getList();
    },
  },
};
</script>
<style>
#pro-feature {
  color: #5e72e4;
  font-weight: bold;
}
#pro-feature:hover {
  color: #233dd2;
}
</style>
