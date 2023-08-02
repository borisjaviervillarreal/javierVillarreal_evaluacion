import React, { useEffect, useState } from "react";
import { get } from "../../helpers/apiHelper";
import UsersList from "./UsersList";
import Box from "@mui/material/Box";
import UserSearch from "../search/UserSearch";

const Initial = () => {
  const [initialUsers, setInitialUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await get("/api/users/random_user?size=30");
      setInitialUsers(response);
      setFilteredUsers(response);
    } catch (error) {
      console.error("Error al consumir api: ", error);
    }
  };

  const handleSearch = (results) => {
    setFilteredUsers(results);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="title-component">
        <label>BUSCADOR DE USUARIOS</label>
      </div>
      <UserSearch users={initialUsers} onSearch={handleSearch} />
      <br></br>
      <UsersList users={filteredUsers} />
    </Box>
  );
};

export default Initial;
