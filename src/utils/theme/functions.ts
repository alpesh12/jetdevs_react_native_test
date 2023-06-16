import { Alert } from 'react-native';
import { commonConstant } from './constants';

export function showAlert(
  message: any,
  title = commonConstant.appName,
  buttonTitle = 'OK',
) {
  setTimeout(() => {
    Alert.alert(title, message, [{ text: buttonTitle }]);
  }, 500);
}
