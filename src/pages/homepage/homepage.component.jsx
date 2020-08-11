import React, { useEffect, useState } from "react";
import EnhancedTable from "../../components/table/table.component";
import "./homepage.styles.scss";
import { fetchData } from '../../fetchData';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
    .then((res) => {
      setData(res);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      console.log(err);
    })
  }, []);

  return (
    <div className="homepage">
      {loading === true ? <div>Loading...</div> : <EnhancedTable data={data} />}
    </div>
  );
};

export default HomePage;
