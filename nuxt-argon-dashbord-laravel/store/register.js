export const state = () => ({
    // register properties
    newUserRegistered: false
  })
  
  /* REGISTER SHOP CUSTOMER - CREATE NEW USER */
  export const actions = {
    async create({ commit }, data) {
      /* send register action to API */
      await this.$axios.post('/register', { data })
  
      /* extract login data  */
      const loginData = {
        data: {
          type: 'token',
          attributes: {
            email: data.attributes.email,
            password: data.attributes.password
          }
        }
      }
  
      /* login newly created user and redirect to home (redirect config is in nuxt.config) */
      this.$auth.loginWith('local', {
        data: loginData
      })
  
      /* update store */
      commit('newUserRegistered', true)
  
      Promise.resolve(true)
    }
  }
  
  // The mutations available in the store
  // These are used to modify the store's state data
  // It is not allowed to change the store state outside of mutations
  export const mutations = {
    /**
     * Get the status of the newly created user needed for showing success toast after redirect
     * needed also for diferentiating cases where an user is redirected bu middleware 'auth'
     */
    newUserRegistered(state, status) {
      state.newUserRegistered = status
    }
  }
  