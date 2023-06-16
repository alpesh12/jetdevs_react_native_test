import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StatusBar, Text, UIManager, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppSelector } from './src/hooks';
import i18n from './src/locales/i18next';
import { LoadingComponent } from './src/components/loading/loading.screen';
import { Colors } from './src/utils/theme';
import RootNavigationStack from './src/navigation/rootstack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const { isLoading, isSignIn } = useAppSelector((state) => state.userData);
  const navigationContainerRef: any = React.useRef();

  useEffect(() => {
    (async () => {
      const language = await AsyncStorage.getItem('language');
      language && i18n.changeLanguage(language);
    })();
  }, []);

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  return (
    <>
      <SafeAreaProvider>
        {/* {isLoading && <LoadingComponent />} */}
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

        <RootNavigationStack />
      </SafeAreaProvider>
    </>
  );
};

export default App;
