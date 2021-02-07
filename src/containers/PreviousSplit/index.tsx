import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from 'theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export type IPreviousSplitProps = {};

const PreviousSplit: React.FC<IPreviousSplitProps> = ({}) => {
  return (
    <View style={[styles.container, styles.row]}>
      <View style={[styles.exclamationMark]}>
        <AntDesign
          name="exclamationcircleo"
          color={COLORS.SECONDARY_COLOR}
          size={28}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.previousSplitTitle}>Your previous Split</Text>
        <Text style={styles.previousSplitPrice}>$645.87</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },

  container: {
    borderRadius: 24,
    padding: 16,
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  exclamationMark: {
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderRadius: 32,
  },

  contentContainer: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  previousSplitTitle: {
    color: COLORS.SECONDARY_COLOR,
    fontWeight: '600',
    paddingVertical: 4,
  },
  previousSplitPrice: {
    color: COLORS.TEXT_DEFAULT_COLOR,
  },
});

export { PreviousSplit };
