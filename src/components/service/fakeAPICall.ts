import axios from "axios";
import ErrorHandler from "../fallback/ErrorHandler";


const FakeAPICall = async () => {
    try {
        const payload = {
            email: ""
        };
        const response = await axios.post("https://reqres.in/api/login", payload);
        debugger
        return response
    } catch (error) {
        // ErrorHandler(error);
    }
}

export default FakeAPICall;