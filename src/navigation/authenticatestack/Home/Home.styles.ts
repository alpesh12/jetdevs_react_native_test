import styled from 'styled-components/native';
import { Colors, Fonts, Responsive } from '../../../utils/theme';
import { commonConstant } from '../../../utils/theme/constants';
import { StyleSheet } from 'react-native';
export const ContainerView = styled.SafeAreaView<any>`
  flex: 1;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.background};
  padding-top: ${commonConstant.statusBarHeight}px;
`;

export const ItemView = styled.View<any>`
  height: ${Responsive.heightPercentageToDP('10')}px;
  background-color: ${Colors.white};
  margin-left: ${Responsive.widthPercentageToDP('10')}px;
  margin-right: ${Responsive.widthPercentageToDP('5')}px;
  margin-vertical: 5px;
  flex-direction: row;
  align-items: center;
  border-radius: ${Responsive.widthPercentageToDP('2.5')}px;
`;

export const TextView = styled.View<any>`
  width: ${Responsive.widthPercentageToDP('60')}px;
  left: -${Responsive.widthPercentageToDP('2')}px;
`;

export const NameText = styled.Text<any>`
  font-family: ${Fonts.fonts.PoppinsMedium};
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('18')}px;
`;

export const PlaceView = styled.TouchableOpacity<any>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;

export const RowView = styled.View<any>`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const BirthdayImage = styled.Image<any>`
  width: 10px;
  height: 10px;
  resize-mode: contain;
`;
export const BirthdayText = styled.Text<any>`
  font-family: ${Fonts.fonts.PoppinsRegular};
  color: ${Colors.themeBg};
  font-size: ${Responsive.convertFontScale('12')}px;
  margin-left: 5px;
`;

export const StarImage = styled.Image<any>`
  width: ${Responsive.widthPercentageToDP('5')}px;
  height: ${Responsive.widthPercentageToDP('5')}px;
  tint-color: ${Colors.themeBg};
  resize-mode: contain;
`;

export const StarButton = styled.TouchableOpacity<any>`
  position: absolute;
  right: ${Responsive.widthPercentageToDP('3')}px;
  top: ${Responsive.heightPercentageToDP('2')}px;
`;

export const LocationImage = styled.Image<any>`
  width: 10px;
  height: 12px;
  tint-color: ${Colors.textColor};
  resize-mode: contain;
`;
export const PlaceText = styled.Text<any>`
  font-family: ${Fonts.fonts.PoppinsRegular};
  color: ${Colors.textColor};
  font-size: ${Responsive.convertFontScale('15')}px;
  margin-left: 5px;
`;

export const styles = StyleSheet.create({
  fastImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    left: -Responsive.widthPercentageToDP('5'),
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
