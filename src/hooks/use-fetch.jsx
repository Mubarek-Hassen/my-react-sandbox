import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        seterror(data.error)
        setdata(data)
        console.log(data)
        setloading(false)
    })
  }, []);

  return { data, loading, error };
};

export default useFetch;