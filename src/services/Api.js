import axios from 'axios'

export default {
  async startEdit (data) {
    data.request = 'startEdit'
    return axios.post('https://winelier.com/admin/api/request.php', data)
  },
  async getMeta (data) {
    data.request = 'getMeta'
    // offline debug
    // return {
    //   data: {
    //     status: 'fail'
    //   }
    // }
    return axios.post('https://winelier.com/new/api/request.php', data)
  },
  async getRow (data) {
    data.request = 'getRow'
    // offline debug
    // if (data.table === 'wineries' && data.name === 'Willow Springs Winery') {
    //   return {
    //     data: {
    //       status: 'success',
    //       content: '{"id":"1","manager_id":null,"tier":"Regular","name":"Willow Springs Winery","email":"info@willowspringswinery.ca","phone":"19056429463","website":"http:\/\/willowspringswinery.com\/","description":"Willow Springs Winery, situated atop the geographical treasure known as the Oak Ridges Moraine complete with the renowned 11-acres Testa Vineyard, is a wine and event destination not to be missed. Among all the wineries with vineyards in York Region, Willow Springs is the first winery to receive VQA Ontario certification. The winery utilizes excellent growing and soil conditions to produce truly outstanding quality wines. It provides a beautiful backdrop for all family, corporate and group functions. The Testa pavilion, with its breathtaking views of the vineyard, is the perfect setting for all occasions. From simple picnic lunches in the vineyard to lavish weddings in the beautiful pavilion.","street_address":"5572 Bethesda Road","town":"Stouffville","province":"Ontario","country":"Canada","postal":"L4A 7X3","created_at":"2019-07-11 23:47:44","modified_at":"2019-08-14 12:50:05"}'
    //     }
    //   }
    // } else {
    //   return {
    //     data: {
    //       status: 'fail'
    //     }
    //   }
    // }
    return axios.post('https://winelier.com/new/api/request.php', data)
  }
}
