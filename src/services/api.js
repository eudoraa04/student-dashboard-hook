import axios from "axios";
import students from "../data/students";

export const getStudents = async () => {

try {

const response = await axios.get(
"https://wrong-api-url.com/students"
);

return response.data;

}

catch(error){

console.log("API failed, loading mock data");

return students;

}

};