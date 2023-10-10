import React from "react";
import { Card, Typography, CardActionArea, CardContent } from "@mui/material";
import SampleColor from "./SampleColor";

function CustomCard({ card }) {
  return (
    <Card>
      <CardActionArea>
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
      </CardActionArea>
      <CardContent>
        <Typography variant="body" gutterBottom>
          {card.name}
        </Typography>
        <Typography variant="h6">{card.price}</Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body">Colori:</Typography>{" "}
          {card.colours.map((color, index) => {
            return <SampleColor key={index} color={color} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
