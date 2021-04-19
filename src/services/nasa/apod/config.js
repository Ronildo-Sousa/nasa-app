import axios from 'axios'

// let apiKey = 'tALCvHagpilPV7aV2Trap8fWF8uKyjcfNPsSEdLs'

export const http = axios.create({
    baseURL: `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_NASA_API_KEY}`
})