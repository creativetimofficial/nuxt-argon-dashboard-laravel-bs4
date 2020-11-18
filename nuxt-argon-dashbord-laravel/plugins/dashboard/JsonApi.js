import { resourceModule } from '@reststate/vuex'

// thanks to https://github.com/mrichar1/jsonapi-vuex/issues/13
export default function({ $axios, store }) {

  $axios.setHeader('content-type', 'application/vnd.api+json')

  const modules = [
    // 'users',
    // 'roles',
  ]

  modules.forEach((name) =>
    store.registerModule(name, resourceModule({ name, httpClient: $axios }))
  )
}
