import axios from "axios";

export const loginApi = async (setLoading, callback, data) => {
  setLoading(true);
  const LOGIN_URL = "https://apptesting.docsumo.com/api/v1/eevee/login/";
  const body = JSON.stringify(data);
  axios({
    method: "post",
    url: LOGIN_URL,
    data: body,
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      setLoading(false);
      if (res.status === 200) callback(res.data);
    })
    .catch((e) => {
      setLoading(false);
      const { data } = e.response;
      callback(data);
    });
};
