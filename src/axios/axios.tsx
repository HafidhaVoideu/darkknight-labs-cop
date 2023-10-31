import axios from "axios";

const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c";

const instance = axios.create({
  baseURL: "http://68.183.108.138:3000",
  headers: {
    common: {
      Authorization: "AUTH_TOKEN_FROM_INSTANCE",
      "Content-Type": "application/json",
    },
  },
});
axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

export default instance;
