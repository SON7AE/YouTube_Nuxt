import { defineStore } from 'pinia'
import axios from 'axios'

const API_KEY = 'ce4c280c9dff4ac0a98c9d7ea869194d'
const API_URL = `https://newsapi.org/v2/everything?q=Apple&from=2024-05-09&sortBy=popularity&apiKey=${API_KEY}`

export const useStore = defineStore('store', {
    state: () => ({}),
    getters: {},
    actions: {
        async getNews() {
            try {
                await axios.get(API_URL).then((res) => {
                    return res
                })
            } catch (error) {
                console.log(error)
            }
        },
    },
})
