import axios from 'axios'

const api = axios.create({
    baseURL:'http://192.168.1.152:3333'
})
export default api
//inicar server
//json-server ./src/services/server.json --host  192.168.1.152 --port 3333