import React, { FunctionComponent, useEffect } from 'react';
import {
  ContainerView,
  ItemView,
  NameText,
  StarButton,
  StarImage,
  TextView,
  styles,
} from './Favourite.styles';
import { StackScreenProps } from '@react-navigation/stack';
import {
  AuthenticatedStackParamList,
  AuthenticatedStackScreens,
} from '../AuthenticatedStack.types';
import { Alert, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Images } from '../../../utils/theme';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { actions } from '../../../rdx';
import { IUsersDetail } from '../../../rdx/reducers/home.slice';
import { NoData } from '../../../components/no-data';
import { commonConstant } from '../../../utils/theme/constants';

type FavouriteScreenProps = StackScreenProps<
  AuthenticatedStackParamList,
  AuthenticatedStackScreens.Favourite
>;

const Favourite: FunctionComponent<FavouriteScreenProps> = () => {
  const { getFavouriteUsers, removeFavourites } = useAppDispatch(
    actions.favouriteActions,
  );
  const { favouriteUsersData, isLoading } = useAppSelector(
    (state) => state.favouriteData,
  );

  useEffect(() => {
    getFavouriteUsers();
  }, []);

  const onPressFavourite = (item: IUsersDetail) => () => {
    Alert.alert(
      commonConstant.appName,
      'Are you sure want to remove from Favorite?',
      [
        {
          text: 'NO',
          onPress: () => {},
        },
        {
          text: 'YES',
          onPress: () => {
            removeFavourites(item);
          },
        },
      ],
    );
  };

  const renderItem = ({ item }: { item: IUsersDetail }) => {
    return (
      <ItemView>
        <FastImage
          style={styles.fastImage}
          source={{
            uri: item?.picture?.medium,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <TextView>
          <NameText>
            {item.name.title} {item.name.first} {item.name.last}
          </NameText>
        </TextView>
        <StarButton onPress={onPressFavourite(item)}>
          <StarImage source={Images.starSolidIcon} />
        </StarButton>
      </ItemView>
    );
  };

  return (
    <ContainerView>
      <FlatList
        keyExtractor={(item) => item.email}
        renderItem={renderItem}
        data={favouriteUsersData}
        style={{ marginTop: 5 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={!isLoading ? <NoData /> : null}
      />
    </ContainerView>
  );
};

export default Favourite;
