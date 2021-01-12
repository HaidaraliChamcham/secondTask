import React, { useEffect, useState } from "react";
import axios from "axios";

const UserListPage = () => {
  const fetchData = () => {
    return axios
      .get("https://reqres.in/api/users")
      .then(({ data }) => {
        // console.log(data);
        return data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [randomData, setRandomData] = useState([]);
  useEffect(() => {
    fetchData().then((randomsData) => {
      setRandomData(randomsData);
    });
  }, []);
  return (
    <div>
      <pre>
        {randomData.map((item, index) => {
          const { first_name, last_name, avatar, email } = item;
          return (
            <div key={index}>
              <img src={avatar} />
              <div>{first_name + " " + last_name}</div>
              <div>{}</div>
              <div>{email}</div>
            </div>
          );
        })}
      </pre>
    </div>
  );
};

export default UserListPage;
