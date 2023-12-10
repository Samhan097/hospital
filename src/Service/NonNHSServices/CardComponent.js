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
        <Typography variant="h4" style={{marginTop:20}}>{title}</Typography>
        <Typography variant="body1" style={{fontSize:20}}>{description}</Typography>
      </CardContent>
      <CardActions>
        {buttons.map((button, idx) => (
          <Button
  key={idx}
  style={{
    backgroundColor: '#E0E0E0',
    color: '#121212',
    borderRadius: '50px', // Adjust the border-radius as needed
    padding: '0px 10px', // Adjust padding as needed
  }}
  variant="contained" // Use "contained" for a filled button
  onClick={button.onClick}
>
  {button.label}
</Button>

        ))}
      </CardActions>
    </Grid>
  );
};

export default CardComponent;
