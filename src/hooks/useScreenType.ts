import { useMediaQuery } from 'react-responsive';
export type ScreenType = '3-cols' | '2-cols' | '1-cols' | 'fullscreen';

export default function useScreenType(): ScreenType {
  const is3Cols = useMediaQuery({ query: '(max-width: 1200px)' });
  const is2Cols = useMediaQuery({ query: '(max-width: 900px)' });
  const is1Cols = useMediaQuery({ query: '(max-width: 600px)' });

  if (is1Cols) {
    return '1-cols';
  }
  if (is2Cols) {
    return '2-cols';
  }

  if (is3Cols) {
    return '3-cols';
  }

  return 'fullscreen';
}
