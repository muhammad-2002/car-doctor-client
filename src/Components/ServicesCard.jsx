import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Link } from "react-router-dom";

export default function MultiActionAreaCard({ image, title, prise, _id }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h1>{title}</h1>
          </Typography>
          <div className="flex justify-between text-[#FF3811]">
            <Typography variant="body2" color="">
              Price{"$" + prise}
            </Typography>
            <Typography variant="body2" color="">
              <Link to={`/booking/${_id}`}>
                <FaLongArrowAltRight />
              </Link>
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
