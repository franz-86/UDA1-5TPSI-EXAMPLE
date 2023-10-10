import React from "react";
import { Card, Typography } from "@mui/material";

function CustomCard({ card }) {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={card.img}
          style={{
            objectFit: "contain",
          }}
          width={250}
          height={250}
        />
      </div>
      <Typography variant="body">{card.name}</Typography>
      <Typography variant="h6">{card.price}</Typography>
      <Typography variant="body">Colori:</Typography>
    </Card>
  );
}

export default CustomCard;
