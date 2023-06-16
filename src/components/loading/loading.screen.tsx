import React from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './loading.screen.styles';
import { Colors } from '../../utils/theme';

interface ILoadingComponent {
  style?: ViewStyle;
  size?: number | 'large' | 'small';
  containerStyle?: ViewStyle;
  color?: string;
  opacity?: boolean;
}
/// rename
export const LoadingComponent = (props: ILoadingComponent) => {
  const {
    style = styles.indicator,
    size = 'large',
    containerStyle = styles.container,
    color = Colors.loader,
    opacity = false,
  } = props;
  return (
    <SafeAreaView
      style={[styles.container, opacity && { opacity: 0.5 }, containerStyle]}>
      <ActivityIndicator size={size} style={style} color={color} />
    </SafeAreaView>
  );
};
