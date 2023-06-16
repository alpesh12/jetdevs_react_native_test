import React, { useEffect } from 'react';
import { ItabBarIcon } from '../../utils/components';
import { TabIcon } from './tab-icon.styles';

const _TabBarIcon = (props: ItabBarIcon) => {
  const { imageName, focused, color } = props;
  return <TabIcon source={imageName} color={color} focused={focused} />;
};

export const TabBarIcon = React.memo(_TabBarIcon);
