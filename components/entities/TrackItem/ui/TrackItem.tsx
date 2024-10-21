import { ITrack } from '@/app/types/track';
import { FC } from 'react';

interface TrackItemProps {
  track: ITrack
  active?: boolean
}

export const TrackItem: FC<TrackItemProps> = ({ track, active=false }) => {
  return (
    <div>
      {track.name}
    </div>
  );
};
