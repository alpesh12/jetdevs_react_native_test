export enum AuthenticatedStackScreens {
  Home = 'Home',
  Favourite = 'Favorite',
}

export type AuthenticatedStackParamList = {
  [AuthenticatedStackScreens.Home]: undefined;
  [AuthenticatedStackScreens.Favourite]: undefined;
};
