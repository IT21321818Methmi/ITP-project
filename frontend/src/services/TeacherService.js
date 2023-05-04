import axios from 'axios';

export class TeacherService {
    static serverURL = 'http://localhost:9000';

    static getAllTeachers() {
        let dataURL = `${TeacherService.serverURL}/teachers`; // use backticks and correct interpolation syntax
        return axios.get(dataURL); // make sure axios is installed
    }
}
