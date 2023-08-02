import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const UserSearch = ({ users, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredResults = users.filter((user) => {
      const fullName = `${user.first_name} ${user.last_name}`;
      return fullName.toLowerCase().includes(query.toLowerCase());
    });
    onSearch(filteredResults);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar Usuario"
          inputProps={{ "aria-label": "buscar usuario" }}
          value={searchQuery}
          type="text"
          onChange={handleInputChange}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          disabled={true}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default UserSearch;
