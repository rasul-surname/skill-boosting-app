import axios from "axios";

const API_URL = "http://localhost:3001";

axios.defaults.baseURL = API_URL;

export const FilmsService = {
    async getAll() {
        return await axios.get("/films");
    }
}