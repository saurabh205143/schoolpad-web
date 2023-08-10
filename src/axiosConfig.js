import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL:'http://localhost/SchoolPadCombined/'
});
export default axiosBaseURL