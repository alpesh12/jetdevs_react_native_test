import React, { useEffect, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from 'react-native';
import { WrapInputView } from './form-input.styles';
import { TCustomTextInput } from '../../utils/components';
import { CustomTextInput } from '../custom-text-input';

type TFormInput = {
  nameIcon: string;
  errorText?: string;
} & TCustomTextInput;

export const FormInput = (props: TFormInput) => {
  const {
    nameIcon,
    label,
    secureTextEntry,
    onChangeText,
    value,
    children,
    errorText,
    onBlur = () => {},
    ...rest
  } = props;

  const [validField, setValidField] = useState(errorText);
  const handleError = () => {
    !!errorText && setValidField(errorText);
  };

  const focuse = () => {
    setValidField('');
  };

  const blur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur(e);
    handleError();
  };

  return (
    <WrapInputView>
      <CustomTextInput
        label={label}
        nameIcon={nameIcon}
        secureTextEntry={secureTextEntry}
        onBlur={blur}
        onFocus={focuse}
        error={!!validField}
        errorText={validField}
        value={value}
        onChangeText={onChangeText}
        {...rest}>
        {children}
      </CustomTextInput>
    </WrapInputView>
  );
};
