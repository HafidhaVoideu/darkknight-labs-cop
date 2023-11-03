// import axios from "axios";
import * as https from "https";

// const client = axios.create({
//   baseURL: "https://68.183.108.138:3000",
//   responseType: "json",
//   withCredentials: true,
//   httpsAgent: agent({ rejectUnauthorized: false }),
// });

// const axios = require("axios");

import axios from "axios";

// const axiosInstance = axios.create({
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c",
//   },
// });

// axiosInstance
//   .get("http://68.183.108.138:3000/api/featuredprojects/")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     // Handle any errors here

//     console.log(error);
//   });

const axiosInstance = axios.create({
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c",
    httpsAgent: agent({ rejectUnauthorized: false }),
  },
});

axiosInstance
  .get("http://68.183.108.138:3000/api/featuredprojects/")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors here

    console.log(error.code);
  });
