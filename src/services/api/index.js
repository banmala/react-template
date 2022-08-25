// import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

// export default class Api {
//     axiosFunction: any;
//     axiosFunctionUnsecure: any;

//     constructor() {
//         axios.defaults.withCredentials = false;
//         this.axiosFunction = axios.create({
//             baseURL: (process.env.REACT_APP_API_BASE_URL || '') + '/api/',
//         });
//         this.axiosFunctionUnsecure = axios.create({
//             baseURL: (process.env.REACT_APP_API_BASE_URL || '') + '/',
//         });
//     }

//     setToken = () => {
//         this.axiosFunctionUnsecure.interceptors.request.use(
//             (config: AxiosRequestConfig) => {
//                 config.headers = {};
//                 config.headers["Authorization"] = "Bearer " + localStorage.getItem('token');
//                 return config;
//             },
//             (error: AxiosError) => {
//                 return Promise.reject(error);
//             }
//         );
//     };

//     get = (url: string, data?: object) => {
//         this.setToken();
//         return this.axiosFunctionUnsecure
//             .get(url, { params: data })
//             .then((response: AxiosResponse) => response.data)
//             .catch((err: AxiosError) => {
//                 throw err;
//             });
//     };

// //     download = (url, data, headers, fileName) => {
// //         this.setToken();
// //         return this.axiosFunction
// //             .get(url, {
// //                 params: data,
// //                 headers,
// //                 responseType: 'blob',
// //             })
// //             .then((response) => {
// //                 const blob = new Blob([response.data]);
// //                 const url = window.URL.createObjectURL(blob);
// //                 const link = document.createElement('a');
// //                 link.href = url;
// //                 link.setAttribute('download', fileName);
// //                 document.body.appendChild(link);
// //                 link.click();
// //                 link.remove();
// //                 window.URL.revokeObjectURL(url);
// //             })
// //             .catch((err) => {
// //                 throw err;
// //             });
// //     };

//     post = (url: string, data: object, headers: { [x: string]: string } | null, unsecure = false) => {
//         if (unsecure) {
//             return this.axiosFunctionUnsecure
//                 .post(url, data)
//                 .then((response: AxiosResponse) => response.data)
//                 .catch((err: AxiosError) => {
//                     throw err;
//                 });
//         } else {
//             this.setToken();
//             if (headers) {
//                 for (const header in headers) {
//                     if (headers[header]) {
//                         this.axiosFunction.defaults.headers[header] =
//                             headers[header];
//                     }
//                 }
//             }
//             return this.axiosFunction
//                 .post(url, data)
//                 .then((response: AxiosResponse) => response.data)
//                 .catch((err: AxiosError) => {
//                     throw err;
//                 });
//         }
//     };

//     put = (url: string, data: object) => {
//         this.setToken();
//         return this.axiosFunction
//             .put(url, data)
//             .then((response: AxiosResponse) => response.data)
//             .catch((err: AxiosError) => {
//                 throw err;
//             });
//     };

//     delete = (url: string) => {
//         this.setToken();
//         return this.axiosFunction
//             .delete(url)
//             .then((response: AxiosResponse) => response.data)
//             .catch((err: AxiosError) => {
//                 throw err;
//             });
//     };
// }
