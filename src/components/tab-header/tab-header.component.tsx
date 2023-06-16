import React, { useEffect } from 'react';
import { ItabBarIcon } from '../../utils/components';
import { Images } from '../../utils/theme';
import {
  HeaderIcon,
  HeaderView,
  LogoutButton,
  LogoutIcon,
} from './tab-header.styles';
import { useAppDispatch } from '../../hooks';
import { actions } from '../../rdx';
import { Alert } from 'react-native';
import { commonConstant } from '../../utils/theme/constants';

const _TabBarHeader = () => {
  const { signOut } = useAppDispatch(actions.userActions);

  const onPressSignOut = () => {
    Alert.alert(commonConstant.appName, 'Are you sure want to logout', [
      {
        text: 'NO',
        onPress: () => {},
      },
      {
        text: 'YES',
        onPress: () => {
          signOut();
        },
      },
    ]);
  };

  return (
    <HeaderView>
      <HeaderIcon source={Images.iconImage} />
      <LogoutButton onPress={onPressSignOut}>
        <LogoutIcon source={Images.logoutIcon} />
      </LogoutButton>
    </HeaderView>
  );
};

export const TabBarHeader = React.memo(_TabBarHeader);
