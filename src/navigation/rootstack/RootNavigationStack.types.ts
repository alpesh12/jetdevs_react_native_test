export enum RootStackScreens {
  Splash = 'SplashScreen',
  LoginStack = 'LoginStack',
  AuthenticatedStack = 'AuthenticatedStack',
}

export type RootStackParamList = {
  [RootStackScreens.Splash]: undefined;
  [RootStackScreens.LoginStack]: undefined;
  [RootStackScreens.AuthenticatedStack]: undefined;
};
