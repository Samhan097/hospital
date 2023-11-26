// CardComponent.js
import React from 'react';
import { CardContent, Typography, CardActions, Button, CardMedia, Grid } from '@mui/material';
import { cardData } from './CardData'; // Import the cardData array

const CardComponent = ({ image, title, description, buttons }) => {
  const card = cardData.find(card => card.image === image); // Find the card details by image

  return (
    <Grid variant="outlined" style={{ margin: 50 }}>
      <CardMedia
        component="img"
        style={{ width: card?.width || '100%', height: 'auto' }} // Use the width property from cardData or default to 100%
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        {buttons.map((button, idx) => (
          <Button key={idx} color="primary" variant="outlined" onClick={button.onClick}>
            {button.label}
          </Button>
        ))}
      </CardActions>
    </Grid>
  );
};

export default CardComponent;
