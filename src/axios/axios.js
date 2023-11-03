import axios from "axios";
const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c";

export default axios.create({
  baseURL: "http://68.183.108.138:3000",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c",
  },
});

//  return axios.get(api + '/api/user/getUserInfo', { params: { UserId: 1 } }, config)

// Where

// config = { headers: { 'Authorization': 'Bearer ' + accessToken } }

// I did:

// return axios({ method: 'get', url: api + '/api/user/getUserInfo?UserId=1', headers: { 'Authorization': 'Bearer ' + accessToken } })
