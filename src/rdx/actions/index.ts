import * as userActions from './user';
import * as homeActions from './home';
import * as favouriteActions from './favourite';
import { isLoading } from '../reducers/user.slice';
import { clearData } from '../reducers/home.slice';

export default {
  userActions: { ...userActions, isLoading },
  homeActions: { ...homeActions, clearData },
  favouriteActions: { ...favouriteActions },
};
