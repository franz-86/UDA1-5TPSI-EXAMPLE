import { Container, Grid } from "@mui/material";
import React from "react";

import CustomCard from "../components/CustomCard";

import img1 from "../assets/scarpa1.jpeg";
import img2 from "../assets/scarpa2.jpeg";
import img3 from "../assets/scarpa3.jpeg";
import img4 from "../assets/scarpa4.jpeg";
import img5 from "../assets/running1.jpeg";

const cards = [
  {
    name: "Kappa",
    img: img1,
    price: "60€",
    colours: ["#ff0", "#000", "#e20"],
  },
  {
    name: "Converse",
    img: img2,
    price: "75€",
    colours: ["#ff0", "#000", "#e20"],
  },
  {
    name: "Geox",
    img: img3,
    price: "80€",
    colours: ["#ff0", "#000", "#e20"],
  },
  {
    name: "New Balance",
    img: img4,
    price: "55€",
    colours: ["#ff0", "#000", "#e20"],
  },
];

function Prodotti() {
  return (
    <Container maxWidth="md" style={{ marginTop: "2em" }}>
      <Grid container spacing={2}>
        {cards.map((card, index) => {
          return (
            <Grid item md={4} key={index}>
              <CustomCard card={card} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Prodotti;
