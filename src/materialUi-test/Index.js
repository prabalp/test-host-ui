import React, { useEffect, useState } from "react";

function Index() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <div>
      {data.map((data) => (
        <p>{data.Name}</p>
      ))}
    </div>
  );
}

export default Index;
