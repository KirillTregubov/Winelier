import axios from 'axios'

export default {
  async startEdit (data) {
    data.request = 'startEdit'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  },
  async getMeta (data) {
    data.request = 'getMeta'
    return axios.post('https://winelier.com/new/api/request.php', data)
    // setTimeout(() => {
    //   return {
    //     title: 'Title',
    //     description: 'description'
    //   }
    // }, 500)
  }
}
