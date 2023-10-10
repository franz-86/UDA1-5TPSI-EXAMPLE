import { Container, Grid } from "@mui/material";
import React from "react";

import CustomCard from "../components/CustomCard";

import img1 from "../assets/scarpa1.jpeg";
import img2 from "../assets/scarpa2.jpeg";
import img3 from "../assets/scarpa3.jpeg";
import img4 from "../assets/scarpa4.jpeg";
import img5 from "../assets/running1.jpeg";
import img6 from "../assets/running2.jpeg";
import img7 from "../assets/donna1.jpeg";
import img8 from "../assets/donna2.jpeg";
import img9 from "../assets/donna3.jpeg";

const cards = [
  {
    name: "Kappa",
    img: img1,
    price: "60€",
    colours: ["#ebebeb", "#000", "#350dff"],
  },
  {
    name: "Converse",
    img: img2,
    price: "75€",
    colours: ["#000", "#c40010", "#2e632d"],
  },
  {
    name: "Geox",
    img: img3,
    price: "80€",
    colours: ["ebebeb", "#ffcd8c"],
  },
  {
    name: "New Balance",
    img: img4,
    price: "55€",
    colours: ["#7482c2", "#ffe9d6", "#ba0927"],
  },
  {
    name: "Nike",
    img: img5,
    price: "105€",
    colours: ["#ff6e30"],
  },
  {
    name: "Saucony",
    img: img6,
    price: "120€",
    colours: ["#c5f043"],
  },
  {
    name: "Guess",
    img: img7,
    price: "125€",
    colours: ["#000", "#0d0f42", "#ffd294"],
  },
  {
    name: "Nero Giardini",
    img: img8,
    price: "95€",
    colours: ["#000", "#ffd294"],
  },
  {
    name: "Rive droite",
    img: img9,
    price: "185€",
    colours: ["#ff52f6"],
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
