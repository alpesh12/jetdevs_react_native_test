import { ReactChild } from 'react';
import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type TTransitionContainer = {
  list: () => void;
  tile: () => void;
};

export interface IRenderTransitionParams {
  list: () => void;
  tile: () => void;
  otherStyle: {
    height: string | number;
    description: TextStyle;
    date: TextStyle;
    play: number;
    ava: IStyleInterfaceForFastImage;
    name: TextStyle;
  };
  containerStyle: ViewStyle;
  childrenStyle: ViewStyle;
  id: string;
}

export interface IUsualObject {
  [key: string]: string;
}

export interface IStyleInterfaceForFastImage {
  [key: string]: string | number;
}

export type TResizeMode = 'stretch' | 'none' | 'contain' | 'cover' | undefined;

export type TCustomTextInput = {
  nameIcon: string;
  labelColor?: string;
  underlineColorActive?: string;
  underlineColor?: string;
  placeholderColor?: string;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  label: string;
  error?: boolean;
  errorText: string;
  disabled?: boolean;
  children?: ReactChild;
  clickIconDisabled?: boolean;
  secureTextEntry?: boolean;
} & TextInputProps;

export interface ItabBarIcon {
  focused: boolean;
  size: number;
  color: string;
  imageName: any;
}

export interface IChain {
  [key: string]: string | number | boolean;
}

/**
 * @desc urlBuilder
 */

export const urlBuilder = (chain: IChain) => {
  let url = '?';
  for (let key in chain) {
    url += key + '=' + chain[key] + '&';
  }
  return url.slice(0, -1);
};
