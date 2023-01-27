import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "../../components/Card/index.jsx";
import Grid from "@mui/material/Grid";
import styles from "./index.module.scss";
import { useQuery } from "react-query";

const Index = () => {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("https://fakestoreapi.com/products").then((res) => res.json())
  // );

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error...</div>;
  // }

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  };
  const { data, error, isLoading } = useQuery("albums", getData);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  if (data) {
    localStorage.setItem("data", JSON.stringify(data));
    return (
      <div className={styles.main_container}>
        <Container maxWidth="xl">
          <Box sx={{ height: "90vh", width: "100%" }}>
            <Grid container rowSpacing={0} columnSpacing={0}>
              {data.map((newData, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card data={newData} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </div>
    );
  }
};

export default Index;
