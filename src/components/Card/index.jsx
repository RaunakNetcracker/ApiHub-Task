import React from "react";
import styles from "./index.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, Link } from "react-router-dom";

const Index = (props) => {
  return (
    <div className={styles.main_container}>
      <Card
        sx={{
          maxWidth: 365,
          boxShadow: "0px 2px 4px #ccc",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <CardMedia
          sx={{ height: 250, marginTop: "1vh" }}
          image={props.data.image}
          title="Product Image"
          className={styles.cardImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            noWrap
            className={styles.textLine_heading}
          >
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price - ${props.data.price}
          </Typography>
        </CardContent>
        <CardActions className={styles.buttonBox}>
          <Link to={`/albums/${props.data.id}`}>
            <Button size="large" variant="contained">
              View
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Index;
