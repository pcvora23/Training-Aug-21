import axios from "axios";

const baseURL = "http://localhost:8080";
const client = axios.create({
    baseURL : "http://localhost:8080",
})
class StudentOpeartons {
    getStudents()
    {
        client.get('/').then((response)=>
        {
            console.log(response.data);
            // return response.data;
        })
    }
    deleteStudent(id)
    {
        client.delete(`/${id}`).then((response)=>
        {
            console.log(response);
        })
    }
    addStudent(student)
    {
        client.post('/',{...student}).then((response)=>
        {
            console.log(response);
        })
    }
    editStudent(id,student)
    {
        client.put(`/${id}`,{...student}).then((response)=>
        {
            console.log(response);
        })
    }
}

export default StudentOpeartons;