import React from "react";
import { EmployeeCardWrapper } from "../../styles/EmployeeCardWrapper";

import { List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NoImage } from "../../assest";

const EmployeeCard = ({ _id, image, age, salary, fullName, email, phone }) => {
  return (
    <EmployeeCardWrapper>
      <figure>
        <Link to={`/edit-employee/${_id}`}>
          <img src={image || NoImage} alt="NoImage" />
        </Link>
      </figure>
      <List disablePadding className="employee_content">
        <ListItem disablePadding>
          Name: <Typography variant="caption">{fullName}</Typography>
        </ListItem>
        <ListItem disablePadding>
          Age: <Typography variant="caption">{age}</Typography>
        </ListItem>
        <ListItem disablePadding>
          Salary: <Typography variant="caption">{salary}</Typography>
        </ListItem>
        <ListItem disablePadding>
          Email: <Link to={`mailto:${email}`}>{email}</Link>
        </ListItem>
        <ListItem disablePadding>
          Phone: <Typography variant="caption">{phone}</Typography>
        </ListItem>
      </List>
    </EmployeeCardWrapper>
  );
};

export default EmployeeCard;
