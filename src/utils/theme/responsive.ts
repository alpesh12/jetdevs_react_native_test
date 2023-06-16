// packages
import { Dimensions, PixelRatio, Platform } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import ExtraDimensions from 'react-native-extra-dimensions-android';

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : Dimensions.get('window').height -
      ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT');

/**
 * Converts provided font size to depending on current device's screen width.
 * @param  {string} fontSize    fontSize which you want to convert
 * @return {number}             The calculated font size depending on current device's screen width.
 */
const convertFontScale = (fontSize: any) => {
  // Parse fontSize convert according to screen width.
  const baseSize = Platform.select({ ios: 414, android: 420 });
  return Math.floor(fontSize * (screenWidth / (baseSize ?? 0)));
};

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercent: any) => {
  // Parse string percentage input and convert it to number.
  const elemWidth = parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent  The percentage of screen's height that UI element should cover
 *                                 along with the percentage symbol (%).
 * @return {number}                The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercent: any) => {
  // Parse string percentage input and convert it to number.
  const elemHeight = parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const isIPhoneX = () => hasNotch();

export default {
  convertFontScale,
  widthPercentageToDP,
  heightPercentageToDP,
  isIPhoneX,
};
