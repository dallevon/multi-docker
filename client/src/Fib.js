import React, { useEffect, useState } from "react";
import axios from "axios";

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");

  const fetchValues = async () => await axios.get("/api/values/current");

  const fetchIndexes = async () => await axios.get("/api/values/all");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", { index });

    setIndex("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const indexes = await fetchIndexes();
        setSeenIndexes(indexes?.data || []);
        const values = await fetchValues();
        setValues(values?.data || {});
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [index]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          value={index}
          onChange={(event) => setIndex(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      <p>{seenIndexes.map(({ number }) => number).join(", ")}</p>

      <h3>Calculated Values:</h3>
      {Object.entries(values).map(([key, value]) => (
        <p key={key}>
          For index {key} I calculated {value}
        </p>
      ))}
    </div>
  );
};

export default Fib;
