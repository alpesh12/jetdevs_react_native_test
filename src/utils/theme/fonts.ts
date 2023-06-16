import { Platform, Dimensions, PixelRatio } from 'react-native';

const fonts = {
  PoppinsMedium: 'Poppins-Medium',
  PoppinsSemiBold: 'Poppins-SemiBold',
  PoppinsRegular: 'Poppins-Regular',
};

const applyRatio = (pointsSize: any) => {
  const pxRatio = PixelRatio.getFontScale() || 1;
  return pointsSize / pxRatio;
};

const fontScale = (fontSize: any, factor = 0.5) => {
  const guidelineBaseWidth = Platform.select({ ios: 414, android: 540 }) ?? 0;
  const scale = (font: any) =>
    (Dimensions.get('screen').width / guidelineBaseWidth) * font;
  return fontSize + (scale(fontSize) - fontSize) * factor;
};

export default {
  fonts,
  fontScale,
  applyRatio,
};
