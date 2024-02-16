'use client';
import React from 'react';
import styles from './styles.module.scss';
import { Cocktail } from '@/app/shared/types/Cocktail';
import { CocktailCard } from '../../components/CocktailCard';
import { useSelector } from 'react-redux';
import { RootState } from '../shared/globalState/store';
import Loader from '@/components/Loader';
import { Typography } from '@mui/material';

export default function Catalog() {
  const {
    searchData,
    searchDataCount,
    loading,
  } = useSelector((state: RootState) => state.search);

  return (
    <div className={styles.catalog}>
      {loading && (
        <Loader />
      )}

      {searchData.length !== 0 && (
        <>
          <Typography className={styles.catalog__title}>
            {`Items found: ${searchDataCount}`}
          </Typography>

          {searchData.map((item: Cocktail) => (
            <CocktailCard key={item.id} cocktail={item} />
          ))}
        </>
      )}

      {!loading && !searchData.length && (
        <>
          <Typography className={styles.catalog__title}>
            {`Items found: ${searchDataCount}. No search data to show.`}
          </Typography>
        </>

      )}
    </div>
  );
};
