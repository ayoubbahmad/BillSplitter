import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from 'theme/Colors';

export type IReceiptDetailsProps = {};

const ReceiptDetails: React.FC<IReceiptDetailsProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.value}>Team Dinner</Text>
      </View>
      <View style={styles.totalBillContainer}>
        <Text style={styles.title}>Total Bill</Text>
        <Text style={styles.value}>$ 750.86</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    width: '100%',
    justifyContent: 'space-between',
  },
  titleContainer: { flex: 1.2 },
  totalBillContainer: { flex: 1 },
  title: { color: COLORS.TEXT_ON_SECONDARY_COLOR },
  value: { color: COLORS.PRIMARY_COLOR, fontWeight: '700', fontSize: 20 },
  splitWithContainer: { backgroundColor: COLORS.BACKGROUND_COLOR },
});

export { ReceiptDetails };
