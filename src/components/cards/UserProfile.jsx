import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import getDateTextHelper from "../../helpers/getDateTextHelper";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: "auto",
    marginTop: 20,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
  },
  media: {
    height: 200,
    flexBasis: "30%",
    marginRight: "0px",
    marginLeft: "15px",
  },
  content: {
    flexBasis: "70%",
  },
});

const UserProfile = ({ userInfo }) => {
  const classes = useStyles();
  const user = {
    userName: userInfo.first_name + " " + userInfo.last_name,
    email: userInfo.email,
    gender: userInfo.gender,
    phoneNumber: userInfo.phone_number,
    dateBirth: getDateTextHelper(userInfo.date_of_birth, "es-ES"),
    employment: userInfo.employment.title,
    address: userInfo.address.city + ", " + userInfo.address.street_address,
    subscription: userInfo.subscription.plan,
    profilePicture: userInfo.avatar,
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={user.profilePicture}
        title="Datos Usuario"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {user.userName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <label className="label-card-info">Email:</label> {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <label className="label-card-info">Género:</label> {user.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <label className="label-card-info">Teléfono:</label>{" "}
          {user.phoneNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <label className="label-card-info">Fecha Nacimiento:</label>{" "}
          {user.dateBirth}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <label className="label-card-info">Empleo:</label> {user.employment}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <label className="label-card-info">Dirección domicilio:</label>{" "}
          {user.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <label className="label-card-info">Subscripción:</label>{" "}
          {user.subscription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
