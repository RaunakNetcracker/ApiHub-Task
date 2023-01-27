import React, { useEffect } from "react";
import styles from "./index.module.scss";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Index = () => {
  return (
    <div className={styles.main_container}>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "transparent", height: "85vh", width: "100%" }}>
          <div className={styles.homeText}>
            <div className={styles.heading}>
              <h3>Albums App</h3>
            </div>
            <div className={styles.info}>
              <div className={styles.infoHeading}>
                <span> Title : Implement an SPA with the following</span>
              </div>
              <div className={styles.infoDetails}>
                <ol>
                  <li>Material UI - For UI of project</li>
                  <li>
                    React Router - For Routing in Project for various components
                    <ul>
                      <li>Home page</li>
                      <li>List Page</li>
                      <li>Details Page</li>
                    </ul>
                  </li>
                  <li>React Query - For Fetching the API response and data.</li>
                  <li>
                    API :- Using JSON placeholder demo API of photos
                    (https://fakestoreapi.com/products)
                    <ul>
                      <li>Display images as well as description in the UI</li>
                    </ul>
                  </li>
                  <li>Webpack - For bundling the project.</li>
                </ol>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Index;
