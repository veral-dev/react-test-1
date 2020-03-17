import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `https://opentdb.com`,
        })
    }

    getAllQuestions = () => this.service.get('/api.php?amount=50').then(response => response.data)
}