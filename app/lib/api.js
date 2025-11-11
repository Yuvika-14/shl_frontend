import axios from "axios";

export async function fetchRecommendations(query, top_k = 7) {
  const res = await axios.post("http://127.0.0.1:8080/recommend", {
    query,
    top_k,
  });
  return res.data;
}
