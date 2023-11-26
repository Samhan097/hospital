// CardList.js
import React from 'react';
import CardComponent from './CardComponent';
import { cardData } from './CardData';
import { Grid } from '@mui/material';

const CardList = () => {
  return (
    <Grid container spacing={0}> {/* No spacing between the cards */}
      {cardData.map((card, index) => (
        <Grid item key={index} xs={12} md={6}>
          <CardComponent
            image={card.image}
            title={card.title}
            description={card.description}
            buttons={card.buttons}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
