/**
 * @file navigationRef
 *
 * https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */

import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from './RootNavigationStack.types';

export const navigationContainerRef =
  createNavigationContainerRef<RootStackParamList>();
