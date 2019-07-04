import axios from 'axios'

export default {
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
  async editUser (data) {
    data.request = 'editUser'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  }
}
