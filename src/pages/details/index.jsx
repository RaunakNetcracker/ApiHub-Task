import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardBig from "../../components/CardBig/index.jsx";
import Grid from "@mui/material/Grid";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Index = () => {
  const [state, setState] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    let newData = JSON.parse(localStorage.getItem("data"));
    let item = newData.find((d) => d.id == id);
    setState(item);
  }, [id]);

  return (
    <div className={styles.main_container}>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#fff", height: "85vh", width: "100%" }}>
          <Grid container rowSpacing={0} columnSpacing={0}>
            <Grid item xs={12}>
              <CardBig data={state} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Index;
