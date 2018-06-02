import axios from "axios";

const instance = axios.create({
	baseURL: "https://burger-app-test-84f7f.firebaseio.com/"
})

export default instance