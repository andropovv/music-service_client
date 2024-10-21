'use client'
import React from 'react';
import { Card, Grid2, Button } from '@mui/material';
import {useRouter} from 'next/navigation'
import styles from './LoadTrackCard.module.scss'


const LoadTrackCard = () => {
  const router = useRouter()
  return (
    <Card className={styles.card}  >
      <Grid2 container justifyContent={'space-between'}  >
        <h1>Список треков</h1>
        <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
      </Grid2>
    </Card>
  );
};

export default LoadTrackCard;