/** @format */
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = (props: any) => {
  const [favorites, setFavorites] = useState<any>({});
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleFavorite = (id: number | string) => () => {
    setFavorites((prev: any) => ({ ...prev, [id]: !prev[id] ? true : false }));
  };

  const desktopScreenProducts = (
    <Box
      sx={{
        margin: "60px",
        padding: "40px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {props.data.map((item: any, index: number) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Card sx={{ borderRadius: 4 }}>
              <Link to={"product/" + item.productLink}>
                <CardMedia
                  sx={{ borderRadius: 4 }}
                  component="img"
                  height="250"
                  image={item.imgUrl}
                  alt={item.title}
                />
              </Link>

              <CardContent>
                <Link
                  to={"product/" + item.productLink}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="h6" component="h5">
                    {item.price}
                  </Typography>
                </Link>

                <Typography component="header">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  onClick={handleFavorite(item.id)}
                  aria-label="add to favorites"
                >
                  <FavoriteIcon
                    sx={{ color: favorites[item.id] ? "#ff5590" : "inherit" }}
                  />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const otherScreensProducts = (
    <Box
      sx={{
        margin: "30px",
        padding: "10px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {props.data.map((item: any, index: number | string) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Card sx={{ maxWidth: 400, borderRadius: 4 }}>
              <Link to={"product/" + item.productLink}>
                <CardMedia
                  sx={{ borderRadius: 4 }}
                  component="img"
                  height="250"
                  image={item.imgUrl}
                  alt={item.title}
                />
              </Link>

              <CardContent>
                <Link
                  to={"product/" + item.productLink}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="h6" component="h5">
                    {item.price}
                  </Typography>
                </Link>

                <Typography component="header">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  onClick={handleFavorite(item.id)}
                  aria-label="add to favorites"
                >
                  <FavoriteIcon
                    sx={{ color: favorites[item.id] ? "#ff5590" : "inherit" }}
                  />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return <>{isMatch ? otherScreensProducts : desktopScreenProducts}</>;
};

export default Products;
