import { ReceiptDetails } from 'components/Receipt/ReceiptDetails';
import ReceiptSeperator from 'components/Receipt/ReceiptSeperator';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from 'theme/Colors';
import ReceiptSplitWith from './ReceiptSplitWith/index';

export const Receipt: React.FC<IReceiptProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Receipt</Text>
      </View>

      <ReceiptSeperator />

      <ReceiptDetails />

      <ReceiptSplitWith />
    </View>
  );
};

export interface IReceiptProps {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY_COLOR,
    borderRadius: 32,
    padding: 12,
  },
  titleContainer: {
    backgroundColor: COLORS.PRIMARY_DARK_COLOR,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  title: {
    color: '#eae9ed',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Receipt;
