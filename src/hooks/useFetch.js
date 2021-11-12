import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((data) => {
        let resp = data.data;
        if (resp.cod === "404") {
          setData(null);
          setLoading(true);
          setMessage(resp.message);
        } else {
          setData(resp);
          setLoading(false);
          setMessage("Loading.....");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return { data, loading, message };
};

export default useFetch;
