import axios from "axios";

const mainUrl = axios.create({
    baseURL: "https://6645853fb8925626f89218d0.mockapi.io/api/v1"
})

export default mainUrl