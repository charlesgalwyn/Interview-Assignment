import React, { useEffect, useState } from "react";
import { apiCall } from "../common/helper";

const List = () => {
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);

    let response = await apiCall("GET", "getRecords", {});

    if (response && response.success) {
      setRecords(response.data);
    } else {
      console.log(response);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h3 className="title"> Page-2 (Total Users)</h3>
      <hr />
      <div class="table-responsive">
      <table className="table table-borderless table-hover">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Destination</th>
            <th>Total Travellers</th>
            <th>Budget (per person)</th>
          </tr>
        </thead>
        <tbody>
          {records && records.length ? (
            records.map((item, index) => (
              <tr className="table-success">
                <td> {index + 1}</td>
                <td> {item.name}</td>
                <td> {item.email}</td>
                <td> {item.destination}</td>
                <td>{item.totalTravellers}</td>
                <td> ${Number(item.budgetPerPerson).toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                {loading ? "Fetching data..." : "No records available"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default List;
