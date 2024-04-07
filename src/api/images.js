import axios from "axios";

const fetchImages = async (query, pageNumber) => {
  const apiKey = "7-zRRvo0pOdCKtI8G3RKr20ltF-NpPuC4e8ly9PWA3c";
  const params = {
    client_id: apiKey,
    query,
    page: 1,
    per_page: 10,
  };

  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params,
  });

  return res;
};

export { fetchImages };