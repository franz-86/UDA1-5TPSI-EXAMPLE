import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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
    price: 60,
    colours: ["#ebebeb", "#000", "#350dff"],
    category: "sportiva",
  },
  {
    name: "Converse",
    img: img2,
    price: 75,
    colours: ["#000", "#c40010", "#2e632d"],
    category: "sportiva",
  },
  {
    name: "Geox",
    img: img3,
    price: 80,
    colours: ["ebebeb", "#ffcd8c"],
    category: "sportiva",
  },
  {
    name: "New Balance",
    img: img4,
    price: 55,
    colours: ["#7482c2", "#ffe9d6", "#ba0927"],
    category: "sportiva",
  },
  {
    name: "Nike",
    img: img5,
    price: 105,
    colours: ["#ff6e30"],
    category: "running",
  },
  {
    name: "Saucony",
    img: img6,
    price: 120,
    colours: ["#c5f043"],
    category: "running",
  },
  {
    name: "Guess",
    img: img7,
    price: 125,
    colours: ["#000", "#0d0f42", "#ffd294"],
    category: "donna",
  },
  {
    name: "Nero Giardini",
    img: img8,
    price: 95,
    colours: ["#000", "#ffd294"],
    category: "donna",
  },
  {
    name: "Rive droite",
    img: img9,
    price: 185,
    colours: ["#ff52f6"],
    category: "donna",
  },
];

function Prodotti() {
  const [selectedKey, setSelectedKey] = useState("tutte");
  const [filteredCards, setFilteredCards] = useState(cards);

  const filter = (event) => {
    const selection = event.target.value;
    setSelectedKey(selection);
    if (selection !== "tutte") {
      const filtered = cards.filter((item) => selection == item.category);
      setFilteredCards(filtered);
    } else {
      setFilteredCards(cards);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2em" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body" sx={{ mr: 3 }}>
          Filtra per:{" "}
        </Typography>
        <FormControl sx={{ width: 1 / 2, mb: 2 }}>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedKey}
            label="Categoria"
            onChange={filter}
          >
            <MenuItem value="tutte">Tutte</MenuItem>
            <MenuItem value="donna">Donna</MenuItem>
            <MenuItem value="sportiva">Sportive</MenuItem>
            <MenuItem value="running">Running</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={2}>
        {filteredCards.map((card, index) => {
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
