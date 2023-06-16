import styled from 'styled-components/native';
import { Colors } from '../../utils/theme';

export const SplashView = styled.SafeAreaView<any>`
  flex: 1;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
`;

export const SplashImage = styled.Image`
  width: 160px;
  height: 160px;
  resize-mode: contain;
  align-self: center;
`;
