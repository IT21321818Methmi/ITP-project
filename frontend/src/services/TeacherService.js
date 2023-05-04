import axios from 'axios';

class TeacherService {
    static serverURL = 'http://localhost:9000';

    static getAllTeachers() {
        let dataURL = `${TeacherService.serverURL}/teachers`;
        return axios.get(dataURL);
    }
}

export default TeacherService;



