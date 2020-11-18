import service from '../services/users-service';

export const state = () => ({
  list: {},
  user: {},
  meta: {},
  url: null
});

export const mutations = {
  SET_LIST: (state, list) => {
    state.list = list;
  },
  SET_RESOURCE: (state, user) => {
    state.user = user;
  },
  SET_META: (state, meta) => {
    state.meta = meta;
  },
  SET_URL: (state, url) => {
    state.url = url;
  }
};

export const actions = {
  list({commit, dispatch}, params) {
    return service.list(params, this.$axios)
      .then(({list, meta}) => {
        commit('SET_LIST', list);
        commit('SET_META', meta);
      });
  },

  get({commit, dispatch}, params) {
    return service.get(params, this.$axios)
      .then((user) => { commit('SET_RESOURCE', user); });
  },

  add({commit, dispatch}, params) {
    return service.add(params, this.$axios)
      .then((user) => { commit('SET_RESOURCE', user); });
  },

  update({commit, dispatch}, params) {
    return service.update(params, this.$axios)
      .then((user) => { commit('SET_RESOURCE', user); });
  },

  destroy({commit, dispatch}, params) {
    return service.destroy(params), this.$axios;
  },

  upload({commit, dispatch}, {user, image}) {
    return service.upload(user, image, this.$axios)
      .then((url) => {
        commit('SET_URL', url);
      });
  }
};

export const getters = {
  list: state => state.list,
  listTotal: state => state.meta.page.total,
  user: state => state.user,
  url: state => state.url
};

