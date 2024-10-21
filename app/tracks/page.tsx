import { Grid2 } from '@mui/material';
import React from 'react';
import {LoadTrackCard} from '@/components/entities/LoadTrackCard'
import {TrackList} from '@/components/widgets/TrackList'


function Page() {
  return (
    <Grid2 container justifyContent={'center'} direction='column' alignItems='center'  >
      <LoadTrackCard />
      <TrackList  tracks={[]}/>
    </Grid2>
  );
}

export default Page;