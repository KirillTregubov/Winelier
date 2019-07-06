import axios from 'axios'

export default {
  async startEdit (data) {
    data.request = 'startEdit'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  },
  async getRowAmount (data) {
    data.request = 'getRowAmount'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  },
  // async getRow (data) {
  //   data.request = 'getRow'
  //   return axios.post('https://winelier.com/admin/api/request.php', data)
  // },
  async getRows (data) {
    data.request = 'getRows'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  },
  async updateRow (data) {
    data.request = 'updateRow'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  },
  async createRow (data) {
    data.request = 'createRow'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  }
}
