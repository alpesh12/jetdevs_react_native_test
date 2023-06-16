import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { actions } from '../../../rdx';
import { useFormik } from 'formik';
import YupSchemas from '../../../validations';
import { isRejected } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../hooks';
import { useTranslation } from 'react-i18next';
import { IRes } from '../../../helper/helper';
import {
  Button,
  ButtonText,
  ContainerView,
  ContainerWithBorderRadius,
  FormView,
  IconImage,
  TitleText,
} from './Login.styles';
import KeyboardScrollView from '../../../components/keyboardscrollview/KeyboardScrollView';
import { LoadingComponent } from '../../../components/loading/loading.screen';
import { Images } from '../../../utils/theme';
import { FormInput } from '../../../components/form-input';
import { commonConstant } from '../../../utils/theme/constants';

export const Login = () => {
  const navigation = useNavigation();
  const { signIn } = useAppDispatch(actions.userActions);

  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, errors) => {
      setLoading(true);
      Keyboard.dismiss();
      signIn(values).then((res: IRes) => {
        if (isRejected(res)) {
          Alert.alert(commonConstant.appName, res?.error?.message);
        } else {
        }
        setLoading(false);
      });
    },
    isInitialValid: false,
    validationSchema: YupSchemas.SIGN_IN,
  });

  const { handleChange, handleSubmit, values, isValid, errors } = formik;

  return (
    <ContainerView>
      <KeyboardScrollView scrollEnabled={false} flex1>
        {loading && <LoadingComponent opacity />}
        <ContainerWithBorderRadius>
          <IconImage source={Images.iconImage} />

          <TitleText textAlign={'center'}>{t('LOGIN')}</TitleText>
          <FormView>
            <FormInput
              keyboardType="email-address"
              autoCapitalize={'none'}
              label={t('Email')}
              nameIcon={Images.emailIcon}
              value={values.email}
              onChangeText={(text: any) => {
                handleChange('email')(text.trimEnd());
              }}
              errorText={t(errors.email as string)}
              clickIconDisabled
            />
            <FormInput
              autoCapitalize={'none'}
              label={t('Password')}
              nameIcon={Images.passwordIcon}
              value={values.password}
              secureTextEntry
              errorText={t(errors.password as string)}
              onChangeText={handleChange('password')}
            />
            {!!isValid ? (
              <Button disabled={false} onPress={handleSubmit}>
                <ButtonText>{t('LOGIN')}</ButtonText>
              </Button>
            ) : (
              <Button disabled={true}>
                <ButtonText>{t('LOGIN')}</ButtonText>
              </Button>
            )}
          </FormView>
        </ContainerWithBorderRadius>
      </KeyboardScrollView>
    </ContainerView>
  );
};
