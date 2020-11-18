<template>
  <div>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">{{$route.name}}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb/>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="row justify-content-center">
        <div class="col-lg-8 card-wrapper">
          <card>
            <h3 slot="header" class="mb-0">Alerts</h3>

            <base-alert dismissible type="default" icon="ni ni-like-2">
              <strong>Default!</strong> This is a default alert—check it out!
            </base-alert>

            <base-alert dismissible type="primary" icon="ni ni-like-2">
              <strong>Default!</strong> This is a primary alert—check it out!
            </base-alert>

            <base-alert dismissible type="secondary" icon="ni ni-like-2">
              <strong>Default!</strong> This is a secondary alert—check it out!
            </base-alert>

            <base-alert dismissible type="info" icon="ni ni-like-2">
              <strong>Default!</strong> This is a info alert—check it out!
            </base-alert>

            <base-alert dismissible type="danger" icon="ni ni-like-2">
              <strong>Default!</strong> This is a danger alert—check it out!
            </base-alert>

            <base-alert dismissible type="warning" icon="ni ni-like-2">
              <strong>Default!</strong> This is a warning alert—check it out!
            </base-alert>
          </card>

          <!-- Modals -->
          <card>
            <h3 slot="header" class="mb-0">Modals</h3>

            <div class="row">
              <div class="col-md-4">
                <base-button type="primary" block class="mb-3" @click="modals.classic = true">Default</base-button>
              </div>

              <div class="col-md-4">
                <base-button type="warning" block class="mb-3" @click="modals.notice = true">Notice</base-button>
              </div>

              <div class="col-md-4">
                <base-button type="default" block class="mb-3" @click="modals.form = true">Form</base-button>
              </div>
            </div>

            <!--Classic modal-->
            <modal :show.sync="modals.classic">
              <h6 slot="header" class="modal-title">Type your modal title</h6>

              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly into your mouth.</p>


              <template slot="footer">
                <base-button type="primary">Save changes</base-button>
                <base-button type="link" class="ml-auto" @click="modals.classic = false">Close</base-button>
              </template>

            </modal>

            <!--Notice modal-->
            <modal :show.sync="modals.notice"
                   modal-classes="modal-danger"
                   modal-content-classes="bg-gradient-danger">
              <h6 slot="header" class="modal-title">Your attention is required</h6>

              <div class="py-3 text-center">
                <i class="ni ni-bell-55 ni-3x"></i>
                <h4 class="heading mt-4">You should read this!</h4>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>


              <template slot="footer">
                <base-button type="white">Ok, Got it</base-button>
                <base-button type="link" class="text-white ml-auto" @click="modals.notice = false">Close</base-button>
              </template>

            </modal>

            <!--Form modal-->
            <modal :show.sync="modals.form"
                   size="sm"
                   body-classes="p-0">
              <card type="secondary"
                    header-classes="bg-transparent pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0 mb-0">
                <template slot="header">
                  <div class="text-muted text-center mt-2 mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div class="btn-wrapper text-center">
                    <base-button type="neutral" icon>
                      <span class="btn-inner--icon"><img src="~/static/img/icons/common/github.svg"></span>
                      <span class="btn-inner--text">Github</span>
                    </base-button>
                    <base-button type="neutral" icon>
                      <span class="btn-inner--icon"><img src="~/static/img/icons/common/google.svg"></span>
                      <span class="btn-inner--text">Google</span>
                    </base-button>
                  </div>
                </template>

                <template>
                  <div class="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form role="form">
                    <base-input alternative
                                v-model="formModal.email"
                                class="mb-3"
                                placeholder="Email"
                                prepend-icon="ni ni-email-83">
                    </base-input>
                    <base-input alternative
                                v-model="formModal.password"
                                type="password"
                                placeholder="Password"
                                prepend-icon="ni ni-lock-circle-open">
                    </base-input>
                    <div class="text-center">
                      <base-button type="primary" class="my-4">Sign In</base-button>
                    </div>
                  </form>
                </template>
              </card>

            </modal>
          </card>

          <!-- Notifications -->
          <card>
            <h3 slot="header" class="mb-0">Notifications</h3>

            <button class="btn btn-default" @click="notifyVue('default')">Default</button>
            <button class="btn btn-info" @click="notifyVue('info')">Info</button>
            <button class="btn btn-success" @click="notifyVue('success')">Success</button>
            <button class="btn btn-warning" @click="notifyVue('warning')">Warning</button>
            <button class="btn btn-danger" @click="notifyVue('danger')">Danger</button>
          </card>

          <!--Sweet alert-->

          <card class="ct-example">
            <h3 slot="header" class="mb-0">Sweet alerts</h3>

            <base-button type="primary" @click="showSwal('basic')">Basic alert</base-button>
            <base-button type="info" @click="showSwal('info')">Info alert</base-button>
            <base-button type="success" @click="showSwal('success')">Success alert</base-button>
            <base-button type="warning" @click="showSwal('warning')">Warning alert</base-button>
            <base-button type="default" @click="showSwal('question')">Question</base-button>

          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import swal from 'sweetalert2';
  import 'sweetalert2/dist/sweetalert2.css';
  import { Modal, BaseAlert } from '@/components/argon-core';
  import RouteBreadcrumb from '@/components/argon-core/Breadcrumb/RouteBreadcrumb';
  import BaseHeader from '@/components/argon-core/BaseHeader';
  export default {
    layout: 'DashboardLayout',
    components: {
      Modal,
      BaseAlert,
      BaseHeader,
      RouteBreadcrumb
    },
    data() {
      return {
        notifications: {
          topCenter: false
        },
        modals: {
          classic: false,
          notice: false,
          form: false
        },
        formModal: {
          email: '',
          password: '',
          remember: true
        }
      };
    },
    methods: {
      notifyVue(type = 'default') {
        console.log(type)
        this.$notify({
          message:
            'Welcome to <b>Vue Argon Dashboard Pro</b> - a beautiful resource for every web developer',
          timeout: 5000,
          icon: 'ni ni-bell-55',
          type
        });
      },
      showSwal(type) {
        if (type === 'basic') {
          swal.fire({
            title: `Here's a message!`,
            text: `A few words about this sweet alert ...`,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-primary'
          });
        } else if (type === 'info') {
          swal.fire({
            type: 'info',
            title: `Info`,
            text: `A few words about this sweet alert ...`,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-info'
          });
        } else if (type === 'success') {
          swal.fire({
            title: `Success`,
            text: 'A few words about this sweet alert ...',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success',
            type: 'success'
          });
        } else if (type === 'warning') {
          swal.fire({
            title: `Warning`,
            text: 'A few words about this sweet alert ...',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-warning',
            type: 'warning'
          })
        } else if (type === 'question') {
          swal.fire({
            title: `Are you sure?`,
            text: 'A few words about this sweet alert ...',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-default',
            type: 'question'
          })
        }
      }
    }
  };
</script>
<style>
  .ct-example .btn {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
</style>
