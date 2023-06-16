import styled from 'styled-components/native';
import { Responsive, Colors, Fonts } from '../../utils/theme';

export const RootView = styled.View<{
  error?: boolean;
}>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.error ? Colors.alerts2 : Colors.borderColor};
`;

export const CommonInput = styled.TextInput<any>`
  flex: 1;
  padding-horizontal: 20px;
  font-size: ${Responsive.convertFontScale('16')}px;
  font-family: ${Fonts.fonts.PoppinsMedium};
  color: ${Colors.textColor};
`;

export const WrapIcon = styled.Image<any>`
  width: ${Responsive.widthPercentageToDP('5')}px;
  height: ${Responsive.widthPercentageToDP('5')}px;
  margin-right: ${Responsive.widthPercentageToDP('2.5')}px;
`;
