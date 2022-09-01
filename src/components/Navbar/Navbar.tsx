/** @format */

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = () => (window.location.href = "/");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              LOGO
            </Link>
          </Typography>

          <Button
            onClick={handleClick}
            style={{ color: "white", fontWeight: "bold" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
