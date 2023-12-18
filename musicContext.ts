import { createContext } from 'react';

interface MusicContextProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const MusicContext = createContext<MusicContextProps | null>(null);

export default MusicContext;