// import axios from 'axios';
// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.common["Content-Type"] = "application/json";

// const url = "http://admin.ham05.com:8055/items/Users";
// const url = "http://admin.ham05.com:8055/files/"
// async function makeGetRequest() {
// let response = await axios
//     .get(url)
//     .then((response) => {
//         // console.log(response.data);
//         return (response.data); 
//     })
//     .catch((error) => {
//         console.log(error)
//     });
// let data = response.data;
// data instanceof Object;
// console.log(data);
// }
// makeGetRequest();

// 29a1ebbd-d07e-4931-9b87-37dae1c9f13a
// async function makeGetImage() {
//     let response = await axios
//         .get("http://admin.ham05.com:8055/assets/29a1ebbd-d07e-4931-9b87-37dae1c9f13a")
//         .then((response) => {
//             return ("response data" + response.data);
//         })
//         .catch((error) => {
//             console.log(error)
//         });
//     let dataImg = response.data
//     dataImg instanceof Object;
//     console.log(dataImg);
// }
// makeGetImage();

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'http://admin.ham05.com:8055/assets/f87edf1d-37aa-446a-8eec-81b4d873d9e7',
//   headers: {'Content-Type': 'application/json'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });