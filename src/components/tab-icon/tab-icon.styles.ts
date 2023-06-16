import styled from 'styled-components/native';
import { Responsive, Colors, Fonts } from '../../utils/theme';

export const TabIcon = styled.Image<any>`
  width: ${Responsive.widthPercentageToDP('5')}px;
  height: ${Responsive.widthPercentageToDP('5')}px;
  tint-color: ${(props) => (props.color ? props.color : Colors.lightGray)};
`;
