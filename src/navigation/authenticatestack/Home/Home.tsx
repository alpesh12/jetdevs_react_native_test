import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  BirthdayImage,
  BirthdayText,
  ContainerView,
  ItemView,
  LocationImage,
  NameText,
  PlaceText,
  PlaceView,
  RowView,
  StarButton,
  StarImage,
  TextView,
  styles,
} from './Home.styles';
import { StackScreenProps } from '@react-navigation/stack';
import {
  AuthenticatedStackParamList,
  AuthenticatedStackScreens,
} from '../AuthenticatedStack.types';
import {
  ActivityIndicator,
  FlatList,
  Linking,
  RefreshControl,
} from 'react-native';
import { Colors, Images } from '../../../utils/theme';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { actions } from '../../../rdx';
import { NoData } from '../../../components/no-data';
import { IUsersDetail } from '../../../rdx/reducers/home.slice';

type HomeScreenProps = StackScreenProps<
  AuthenticatedStackParamList,
  AuthenticatedStackScreens.Home
>;

const Home: FunctionComponent<HomeScreenProps> = () => {
  const { updateAllUsersData, getAllUsers, clearData } = useAppDispatch(
    actions.homeActions,
  );
  const { addFavourites, removeFavourites } = useAppDispatch(
    actions.favouriteActions,
  );
  const { allUsersData, isLoading } = useAppSelector((state) => state.homeData);
  const { favouriteUsersData } = useAppSelector((state) => state.favouriteData);
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    getAllUsers({ results: 10, page: page });
  }, [page]);

  useEffect(() => {
    const updatedUsersData = allUsersData.map((user) => {
      const isFavourite = favouriteUsersData.some(
        (favouriteUser) => favouriteUser.email === user.email,
      );
      return { ...user, isFavourite };
    });

    updateAllUsersData(updatedUsersData);
  }, [favouriteUsersData]);

  const loadMore = () => {
    if (!isRefreshing) {
      setPage(page + 1);
    }
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    clearData();
    setIsRefreshing(false);
    setPage(1);
  };

  const openMapApp = (latitude: any, longitude: any) => () => {
    const url = `geo:${latitude},${longitude}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log('Opening the map app is not supported on this device.');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((error) =>
        console.log('Error occurred while opening the map app:', error),
      );
  };

  const renderItem = ({ item }: { item: IUsersDetail }) => {
    return (
      <ItemView>
        <FastImage
          style={styles.fastImage}
          source={{
            uri: item.picture.medium,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <TextView>
          <NameText>
            {item.name.title} {item.name.first} {item.name.last}
          </NameText>
          <PlaceView
            onPress={openMapApp(
              item.location.coordinates.latitude,
              item.location.coordinates.longitude,
            )}>
            <LocationImage source={Images.locationImage} />
            <PlaceText>
              {item.location.state}, {item.location.country}
            </PlaceText>
          </PlaceView>
          <RowView>
            <BirthdayImage source={Images.birthdayCake} />
            <BirthdayText>
              {moment(item.dob.date).format('DD MMM')}
            </BirthdayText>
          </RowView>
        </TextView>
        {item.isFavourite ? (
          <StarButton
            onPress={() => {
              removeFavourites(item);
            }}>
            <StarImage source={Images.starSolidIcon} />
          </StarButton>
        ) : (
          <StarButton
            onPress={() => {
              addFavourites(item);
            }}>
            <StarImage source={Images.starIcon} />
          </StarButton>
        )}
      </ItemView>
    );
  };

  return (
    <ContainerView>
      <FlatList
        keyExtractor={(item) => item.email}
        renderItem={renderItem}
        data={allUsersData}
        style={{ marginTop: 5 }}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        onEndReached={!isLoading ? loadMore : () => {}}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={!isLoading && !isRefreshing ? <NoData /> : null}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={Colors.themeBg}
            tintColor={Colors.themeBg}
          />
        }
        ListFooterComponent={
          isLoading && !isRefreshing ? (
            <ActivityIndicator size="small" color={Colors.themeBg} />
          ) : null
        }
      />
    </ContainerView>
  );
};

export default Home;
