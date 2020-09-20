import axios from 'axios';

const api = "http://localhost:5000";

class BackendService {
    postInfo(body) {
        return new Promise((resolve) => resolve(axios.post(`${api}`, body)));
    }
}

export default new BackendService();