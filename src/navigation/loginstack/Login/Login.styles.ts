import styled from 'styled-components/native';
import { Colors, Fonts, Responsive } from '../../../utils/theme';
import { commonConstant } from '../../../utils/theme/constants';
export const ContainerView = styled.SafeAreaView<any>`
  flex: 1;
  background-color: ${Colors.background};
  padding-top: ${commonConstant.statusBarHeight}px;
`;

export const ContainerWithBorderRadius = styled.View<any>`
  margin-horizontal: ${Responsive.widthPercentageToDP('5')}px;
  margin-top: ${Responsive.heightPercentageToDP('10')}px;
  margin-bottom: ${Responsive.heightPercentageToDP('5')}px;
  flex: 1;
  background-color: ${Colors.white};
  padding-top: ${Responsive.heightPercentageToDP('1')}px;
  border-radius: ${Responsive.widthPercentageToDP('3')}px;
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-color: ${Colors.lightGray};
  shadow-offset: 0px 0px;
`;

export const IconImage = styled.Image<any>`
  width: ${Responsive.widthPercentageToDP('20')}px;
  height: ${Responsive.widthPercentageToDP('20')}px;
  border-radius: ${Responsive.widthPercentageToDP('10')}px;
  position: absolute;
  top: -${Responsive.widthPercentageToDP('10')}px;
  align-self: center;
`;

export const TitleText = styled.Text<{
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent';
}>`
  font-family: ${Fonts.fonts.PoppinsSemiBold};
  color: ${Colors.textColor};
  font-size: ${Responsive.convertFontScale('28')}px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  margin-top: ${Responsive.heightPercentageToDP('10')}px;
  margin-horizontal: ${Responsive.widthPercentageToDP('5')}px;
  margin-bottom: ${Responsive.heightPercentageToDP('1')}px;
  text-transform: uppercase;
`;

export const Button = styled.TouchableOpacity<{ disabled: boolean }>`
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled ? Colors.lightGray : Colors.themeBg};
  padding-vertical: 8px;
  border-radius: 4px;
  margin-horizontal: ${Responsive.widthPercentageToDP('5')}px;
  margin-top: ${Responsive.heightPercentageToDP('10')}px;
`;

export const ButtonText = styled.Text<any>`
  color: ${Colors.white};
  font-size: ${Responsive.convertFontScale('16')}px;
  font-family: ${Fonts.fonts.PoppinsMedium};
  text-align-vertical: center;
`;

export const FormView = styled.View<any>`
  margin-top: ${Responsive.heightPercentageToDP('5')}px;
`;
