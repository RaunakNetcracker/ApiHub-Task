import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Index = ({ data }) => {
  return (
    <div className={styles.main_container}>
      {data === null ? (
        "Loading..."
      ) : (
        <Card
          className={styles.cardBig}
          sx={{
            margin: "auto",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 2px 4px #ccc",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <Grid container rowSpacing={0} columnSpacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <CardMedia
                className={styles.cardBigImage}
                image={data.image}
                title="green iguana"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Typography variant="body2" className={styles.details}>
                  <span className={styles.heading}>Title:</span> {data.title}
                </Typography>
                <Typography variant="body2" className={styles.details}>
                  <span className={styles.heading}>Price:</span> ${data.price}
                </Typography>
                <Typography variant="body2" className={styles.details}>
                  <span className={styles.heading}> Description:</span>{" "}
                  {data.description}
                </Typography>
                <Typography variant="body2" className={styles.details}>
                  <span className={styles.heading}>Category:</span>{" "}
                  {data.category}
                </Typography>
                <Typography variant="body2" className={styles.details}>
                  <span className={styles.heading}>Rating:</span>{" "}
                  {data.rating.rate}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      )}
    </div>
  );
};

export default Index;
