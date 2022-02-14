import { TailSpin, Audio } from 'react-loader-spinner';

export const SpinnerTailSpin = () => {
  return (
    <div>
      <TailSpin heigth="50" width="50" color="#3f51b5" />
    </div>
  );
};

export const SpinnerAudio = () => {
  return (
    <div>
      <Audio color="#fff" height={50} width={50} />
    </div>
  );
};
