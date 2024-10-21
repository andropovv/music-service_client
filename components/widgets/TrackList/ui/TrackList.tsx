import {FC} from 'react'
import { ITrack} from '@/app/types/track'
import { Box, Grid2 } from '@mui/material';
import { TrackItem } from '@/components/entities/TrackItem';

interface TrackListProps {
  tracks: ITrack[]
}

 export const TrackList: FC<TrackListProps> = ({tracks}) => {
  return (
    <Grid2 container direction="column">
      <Box p={2}>
        {tracks.map(track => (<TrackItem track={track} key={track._id} />))}
      </Box>
    </Grid2>
  );
};


