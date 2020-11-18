import qs from 'qs';
import Jsona from 'jsona';

const url = process.env.apiUrl;
const jsona = new Jsona();

function list(params, axios) {
  const options = {
    params: params,
    paramsSerializer: function (params) {
      return qs.stringify(params, {encode: false});
    }
  };

  return axios.get(`${url}/users`, options)
    .then(response => {
      return {
        list: jsona.deserialize(response.data),
        meta: response.data.meta
      };
    });
}

function get(id, axios) {
  return axios.get(`${url}/users/${id}`)
    .then(response => {
      let user = jsona.deserialize(response.data);
      delete user.links;
      return user;
    });
}

function add(user, axios) {
  const payload = jsona.serialize({
    stuff: user,
    includeNames: null
  });

  return axios.post(`${url}/users`, payload, options)
    .then(response => {
      return jsona.deserialize(response.data);
    });
}

function update(user, axios) {
  const payload = jsona.serialize({
    stuff: user,
    includeNames: []
  });

  return axios.patch(`${url}/users/${user.id}`, payload)
    .then(response => {
      return jsona.deserialize(response.data);
    });
}

function destroy(id, axios) {
  return axios.delete(`${url}/users/${id}`, options);
}

function upload(user, image, nuxt_axios) {
  const payload = new FormData();
  payload.append('attachment', image);

  let axios = nuxt_axios.create()
  delete axios.defaults.headers.common['content-type']
  delete axios.defaults.headers.post['content-type']

  return axios({
    method: 'POST',
    url: `/uploads/users/${user.id}/profile-image`,
    data: payload,
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
    }) .then(response => {
        return response.data.url;
      });
}

export default {
  list,
  get,
  add,
  update,
  destroy,
  upload
};

