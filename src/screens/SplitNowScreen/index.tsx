import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import SplitNowHeader from 'components/SplitNowHeader';
import { COLORS } from 'theme/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Receipt from 'components/Receipt';
import { SplittersSliders } from 'components/SplittersSliders';
import SplittingSlider from 'components/SplittingSlider';

export const SplitNowScreen: React.FC<ISplitNowScreenProps> = ({}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.headerContainer,
          { paddingTop: Math.max(insets.top + 12, 12) },
        ]}>
        <SplitNowHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.receiptContainer}>
          <Receipt />
        </View>

        <View>
          {/* <SplittersSliders /> */}
          <SplittingSlider />
        </View>
      </ScrollView>
    </View>
  );
};

export interface ISplitNowScreenProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  headerContainer: {
    paddingHorizontal: 32,
    paddingBottom: 8,
  },
  receiptContainer: { paddingHorizontal: 32, marginVertical: 36 },
});

export default SplitNowScreen;
