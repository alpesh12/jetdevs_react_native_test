import { styled } from 'styled-components/native';
import { Colors, Fonts, Responsive } from '../../utils/theme';

export const ContainerView = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
  padding-horizontal: 20px;
`;

export const NoText = styled.Text`
  font-family: ${Fonts.fonts.PoppinsSemiBold};
  flex: 1;
  text-align: center;
  font-size: ${Responsive.convertFontScale('26')}px;
  color: ${Colors.textColor};
`;
