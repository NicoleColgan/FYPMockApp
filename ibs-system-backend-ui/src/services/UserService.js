import axios from "axios";

//define base url - the one you call in post man - its defined in the backend
const USER_API_URL = "http://localhost:8080/api/v1/users"

class UserService {

    saveUser(user) {
        //do the post request 
        //save entire user object
        return axios.post(USER_API_URL,user);
    }
}

//export functions for use in other js files
export default new UserService();