import React, { FunctionComponent, PropsWithChildren } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type KeyboardScrollViewProps = {
  scrollEnabled: boolean;
  flex1?: boolean;
};
const KeyboardScrollView: FunctionComponent<
  PropsWithChildren<KeyboardScrollViewProps>
> = ({ children, scrollEnabled, flex1 }) => {
  return (
    <KeyboardAwareScrollView
      scrollEnabled={scrollEnabled}
      contentContainerStyle={flex1 ? { flex: 1 } : {}}
      keyboardShouldPersistTaps="handled"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardScrollView;
