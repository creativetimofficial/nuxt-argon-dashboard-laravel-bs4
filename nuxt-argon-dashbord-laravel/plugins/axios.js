export default function({ app, route, $axios, redirect, store }) {
    // handle api errors
    $axios.onError((error) => {
      const code = parseInt(error.response && error.response.status)
      // not found - show page
      if (code === 404) {
        redirect('/404')
      }
      // logout the user if the session expired
      if (app.$auth.loggedIn && [401, 419].includes(code)) {
        logout()
      }
      // throw other errors
      return Promise.reject(error)
    })
  
    async function logout() {
      await app.$auth.logout()
      app.$auth.setToken('local', false)
      store.commit('alerts/removeAll')
      if (route.path !== '/login') {
        redirect({ name: 'login' })
      }
    }
  }
  