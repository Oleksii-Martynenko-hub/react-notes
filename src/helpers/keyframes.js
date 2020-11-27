import { keyframes } from 'styled-components';

export const rotateBefore = keyframes`
  0% {
    transform: translate( -50%, -50% ) rotate(0deg);
  }
  100% {
    transform: translate( -50%, -50% ) rotate(180deg);
  }
`;

export const rotateAfter = keyframes`
  0% { transform: translate( -50%, -50% ) rotate(90deg); }
  20% { transform: translate( -50%, -50% ) rotate(180deg); }
  40% { transform: translate( -50%, -50% ) rotate(270deg); }
  60% { transform: translate( -50%, -50% ) rotate(360deg); }
  80% { transform: translate( -50%, -50% ) rotate(90deg); }
  100% { transform: translate( -50%, -50% ) rotate(315deg); }
`;
