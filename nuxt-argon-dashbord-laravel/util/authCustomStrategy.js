import Jsona from 'jsona'
import LocalScheme from '~/node_modules/@nuxtjs/auth/lib/schemes/local'

export default class CustomScheme extends LocalScheme {
  // Deserialize user from json:api format
  formatUser(user) {
    const dataFormatter = new Jsona()
    return dataFormatter.deserialize(user)
  }

  async fetchUser(endpoint) {
    // Token is required but not available
    if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
      return
    }

    // User endpoint is disabled.
    if (!this.options.endpoints.user) {
      this.$auth.setUser({})
      return
    }

    // Try to fetch user and then set
    const user = await this.$auth.requestWith(
      this.name,
      endpoint,
      this.options.endpoints.user
    )

    if (user) {
      Promise.resolve(this.formatUser(user)).then((formattedUser) => {
        this.$auth.setUser(formattedUser)
      })
    }
  }
}
