import axios from 'axios'

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID bLhzoY0gbCnOAVz7zvdLvDmLotFmTUMF4zDUywj3nGE",
  }
})