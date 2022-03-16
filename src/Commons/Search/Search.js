import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

// Free Material-UI Template
// https://react.school/material-ui/templates

const CustomColorIconButton = withStyles({
  root: {
    color: "#ff8833"
  }
})(IconButton);

export default function Search() {
  return (
    <div>
      <Button className = "Search" variant="contained" startIcon={<SearchIcon />}>
        Search
      </Button>
    </div>
  );
}
