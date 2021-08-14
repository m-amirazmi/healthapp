import CONFIG from './config'

const localUrl = '../dummy'
const devUrl = 'localhost:3000/dummy'
const prodUrl = ''

let API_URL
if (CONFIG === 0) API_URL = localUrl
if (CONFIG === 1) API_URL = devUrl
if (CONFIG === 2) API_URL = prodUrl

let API = {}
if (CONFIG === 0) {
  API.clinics = `${API_URL}/clinics.json`
  API.symptoms = `${API_URL}/symptoms.json`
}

export default API