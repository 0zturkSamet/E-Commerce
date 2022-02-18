import React from "react";
import {
  AppBar,
  ToolBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { CallMissedSharp, ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../../assets/commerce.png";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="fixed"
        className={CallMissedSharp.appBar}
        color="inherit"
      >
        <ToolBar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Sommerce.js"
              height="25px"
              className={classes.image}
            />
            Sommerce.js
          </Typography>
          <div className={classes.grow} />
          <div>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
