import instance from "../../plugin/axios.js";

export default {
  async getTest({ commit }) {
    const res = await instance.get("test/");
    console.log(res.data);
    commit("SET_TEST", res.data);
  },
};
