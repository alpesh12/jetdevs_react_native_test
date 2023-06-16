import React, { useEffect, useState } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import { CommonInput, RootView, WrapIcon } from './custom-text-input.styles';
import { Colors, Images } from '../../utils/theme';
import { TCustomTextInput } from '../../utils/components';

const AINIMATION_DURATION = 200;

const _CustomTextInput = (props: TCustomTextInput) => {
  const {
    style,
    labelColor = Colors.textColor,
    underlineColorActive = Colors.borderColor,
    underlineColor = Colors.borderColor,
    placeholderColor = Colors.textColor,
    inputStyle = {},
    labelStyle = { fontSize: 11 },
    label,
    nameIcon,
    error = false,
    errorText = '',
    value = '',
    disabled = false,
    children,
    secureTextEntry = false,
    clickIconDisabled = false,
    onChangeText = (arg: string) => {},
    onBlur = () => {},
    onFocus = () => {},
    ...rest
  } = props;

  const [inputRef, setInputRef] = useState<TextInput | null>(null);

  useEffect(() => {}, [error]);

  const _onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus(e);
  };

  const _onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur(e);
  };

  return (
    <RootView error={error}>
      <WrapIcon source={nameIcon} />
      <CommonInput
        onChangeText={onChangeText}
        placeholder={label}
        secureTextEntry={secureTextEntry}
        ref={(component: any) => setInputRef(component)}
        value={value}
        onFocus={_onFocus}
        onBlur={_onBlur}
        editable={!disabled}
        {...rest}
      />
    </RootView>
  );
};

export const CustomTextInput = React.memo(_CustomTextInput);
