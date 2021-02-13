import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dash from 'react-native-dash';
import { COLORS } from 'theme/Colors';

export const ReceiptSeperator: React.FC<IReceiptSeperatorProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.halfCircle} />
      {/* <View style={styles.dashedLine} />
       */}
      <Dash
        style={styles.dashedLine}
        dashGap={4}
        dashLength={6}
        dashThickness={1}
      />
      <View style={styles.halfCircle} />
    </View>
  );
};
export interface IReceiptSeperatorProps {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    marginHorizontal: -12,
  },
  halfCircle: {
    height: 32,
    width: 32,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderRadius: 32,
    marginHorizontal: -16,
    zIndex: 1,
  },
  dashedLine: {
    flex: 1,
    height: 0,
    zIndex: 0,
    // borderWidth: 1,
    // borderColor: COLORS.BACKGROUND_COLOR,
    // borderStyle: 'dashed',
  },
});

export default ReceiptSeperator;
