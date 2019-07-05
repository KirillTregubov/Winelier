import axios from 'axios'

export default {
  async startEdit (data) {
    data.request = 'startEdit'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  },
  async getUserAmount () {
    return axios.post('https://winelier.com/admin/api/request.php', {
      request: 'getUserAmount'
    })
  },
  async getUsers (data) {
    data.request = 'getUsers'
    return axios.post('https://winelier.com/admin/api/request.php', data)
    // .then(function (response) {
    //   console.log(response)
    // }).catch(function (error) {
    //   console.log(error)
    // })

    // return axios.post('./api/config.php', {
    //   request: 'getUsers'
    // })
  },
  async getUser (data) {
    data.request = 'getUser'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  },
  async updateUser (data) {
    data.request = 'updateUser'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  },
  async createUser (data) {
    data.request = 'createUser'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  }
}
