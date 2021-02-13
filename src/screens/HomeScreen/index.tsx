import { Header } from 'components/Header';
import { SplitterShortcut } from 'containers/SplitterShortcut';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from 'theme/Colors';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PreviousSplit } from 'containers/PreviousSplit';
import { Friends } from 'containers/Friends';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export type IHomeScreenProps = {};

const HomeScreen: React.FC<IHomeScreenProps> = ({}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollViewContentContainerStyle,
          { paddingTop: Math.max(insets.top + 12, 12) },
        ]}>
        <Header />
        <View style={styles.splitterShortcutContainer}>
          <SplitterShortcut />
        </View>
        <View style={styles.previousSplitContainer}>
          <PreviousSplit />
        </View>
        <View style={styles.friendsContainer}>
          <Friends />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  scrollViewContentContainerStyle: { paddingBottom: 32 },
  splitterShortcutContainer: { marginHorizontal: 32, marginTop: 32, zIndex: 1 },
  previousSplitContainer: { marginHorizontal: 32, marginTop: 28, zIndex: 0 },
  friendsContainer: { marginHorizontal: 32, marginTop: 28 },
});

export { HomeScreen };
