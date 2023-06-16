import styled from 'styled-components/native';
import { Responsive } from '../../utils/theme';

export const WrapInputView = styled.View<any>`
  height: ${Responsive.heightPercentageToDP('6')}px;
  margin-bottom: ${Responsive.heightPercentageToDP('1')}px;
  margin-horizontal: ${Responsive.widthPercentageToDP('5')}px;
  justify-content: center;
`;
