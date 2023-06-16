import styled from 'styled-components/native';
import { Responsive, Colors } from '../../utils/theme';

export const HeaderIcon = styled.Image<any>`
  width: ${Responsive.heightPercentageToDP('6')}px;
  height: ${Responsive.heightPercentageToDP('6')}px;
`;

export const HeaderView = styled.SafeAreaView<any>`
  height: ${Responsive.isIPhoneX()
    ? Responsive.heightPercentageToDP('12')
    : Responsive.heightPercentageToDP('10')}px;
  background-color: ${Colors.white};
  align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity<any>`
  width: ${Responsive.heightPercentageToDP('3')}px;
  height: ${Responsive.heightPercentageToDP('3')}px;
  position: absolute;
  right: ${Responsive.widthPercentageToDP('5')}px;
  bottom: ${Responsive.heightPercentageToDP('2.5')}px;
`;

export const LogoutIcon = styled.Image<any>`
  width: ${Responsive.heightPercentageToDP('3')}px;
  height: ${Responsive.heightPercentageToDP('3')}px;
  tint-color: ${Colors.themeBg};
`;
