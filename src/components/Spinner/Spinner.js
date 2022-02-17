import { MutatingDots, Audio } from 'react-loader-spinner';
import styled from 'styled-components';

const MutatingDotsStyled = styled.div`
  margin-left: 40%;
`;

const AudioSpinStyled = styled.div`
  margin-left: 40%;
`;

export const SpinnerMutatingDots = () => {
  return (
    <MutatingDotsStyled>
      <MutatingDots heigth="50" width="100" color="#3f51b5" />
    </MutatingDotsStyled>
  );
};

export const SpinnerAudio = () => {
  return (
    <AudioSpinStyled>
      <Audio color="#fff" height={20} width={50} />
    </AudioSpinStyled>
  );
};
