import styles from './styles.module.scss';
import { Cocktail } from '@/app/shared/types/Cocktail';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React, { useEffect, useState } from 'react';
import { Category } from '@/app/shared/types/Category';
import Link from 'next/link';

type Props = {
  cocktail: Cocktail;
}

type CategoryApiResponse = {
  allCategories: Category[];
}

export const CocktailCard: React.FC<Props> = ({ cocktail }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/category');
      const data: CategoryApiResponse = await response.json();

      setCategories(data.allCategories);
    }

    fetchData();
  }, []);

  const findCategory = (id: number) => {
    const category = categories.find(category => category.id === id);

    return category?.category || 'none'
  };

  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        alt={cocktail.name}
        image={cocktail.drinkThumb}
        className={styles.image}
      />

      <CardContent className={styles.content}>
        <Typography gutterBottom variant="h5" component="div">
          {cocktail.name}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {`Tags: ${cocktail.tags || 'none'}`}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {`Category: ${findCategory(cocktail.categoryId)}`}
        </Typography>
      </CardContent>

      <CardActions className={styles.actions}>
        <Link href={`/cocktails/${cocktail.id}`}>
          <Button variant="contained">Details</Button>
        </Link>

        <IconButton size="large">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};