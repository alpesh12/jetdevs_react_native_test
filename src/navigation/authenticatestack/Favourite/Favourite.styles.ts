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
  background-color: ${Colors.white};
  height: 60px;
  padding-horizontal: ${Responsive.widthPercentageToDP('5')}px;
  padding-vertical: 10px;
  margin-vertical: 1px;
  flex-direction: row;
  align-items: center;
`;

export const TextView = styled.View<any>`
  width: ${Responsive.widthPercentageToDP('68')}px;
  margin-left: ${Responsive.widthPercentageToDP('5')}px;
`;

export const NameText = styled.Text<any>`
  font-family: ${Fonts.fonts.PoppinsMedium};
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('18')}px;
  margin-bottom: 2px;
`;

export const RowView = styled.View<any>`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const StarImage = styled.Image<any>`
  width: ${Responsive.widthPercentageToDP('6')}px;
  height: ${Responsive.widthPercentageToDP('6')}px;
  tint-color: ${Colors.themeBg};
  resize-mode: contain;
`;

export const StarButton = styled.TouchableOpacity<any>``;

export const styles = StyleSheet.create({
  fastImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.lightGray,
  },
});
