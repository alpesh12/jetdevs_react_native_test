import React from 'react';
import { useTranslation } from 'react-i18next';
import { ViewStyle } from 'react-native';
import { ContainerView, NoText } from './no-data.styles';

interface INoData {
  style?: ViewStyle;
  text?: string;
}

export const NoData = (props: INoData) => {
  const { t } = useTranslation();
  const { text = t('No data') } = props;

  return (
    <ContainerView>
      <NoText>{text}</NoText>
    </ContainerView>
  );
};
