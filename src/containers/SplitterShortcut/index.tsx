import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from 'theme/Colors';
import { messages } from './messages';

export type ISplitterShortcutProps = {};

const CURRENCY = '$';

const SplitterShortcut: React.FC<ISplitterShortcutProps> = ({}) => {
  return (
    <View style={[styles.container, styles.row]}>
      <View style={styles.flexOne}>
        <Text style={[styles.text, styles.titleText, styles.totalBill]}>
          {messages.totalBill}
        </Text>
        <Text style={[styles.text, styles.totalBillAmount]}>
          {CURRENCY}
          {messages.amount}
        </Text>
        <TouchableOpacity style={styles.splitNowButton}>
          <Text style={styles.splitNowButtonText}>{messages.splitNow}</Text>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={[styles.text, styles.titleText, styles.splitWith]}>
          {messages.splitWith}
        </Text>
        <View style={styles.flexOne}>
          <View
            style={[styles.splitWithListContainer, { position: 'absolute' }]}>
            {[1, 2, 3, 4].map((item) => {
              return <View key={`${item}`} style={styles.splitWithItem} />;
            })}
            <View style={[styles.splitWithItem, styles.splitWithAddItem]}>
              <Text
                style={{
                  color: COLORS.WHITE_BACKGROUND,
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY_COLOR,
    borderRadius: 28,
    padding: 24,
  },
  text: { color: COLORS.TEXT_ON_SECONDARY_COLOR },
  titleText: { fontSize: 16, fontWeight: '500', marginBottom: 12 },
  totalBill: {},
  totalBillAmount: { fontSize: 28, fontWeight: '800' },
  splitWith: {},
  splitWithListContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    padding: 12,
  },
  splitWithItem: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 20,
    marginBottom: -8,
    borderWidth: 1,
    borderColor: COLORS.WHITE_BACKGROUND,
  },
  splitWithAddItem: {
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splitNowButton: {
    paddingHorizontal: 16,
    paddingVertical: 20,

    backgroundColor: COLORS.BACKGROUND_COLOR,
    alignSelf: 'baseline',
    marginTop: 20,

    borderRadius: 16,
  },

  splitNowButtonText: {
    color: COLORS.TEXT_ON_PRIMARY_COLOR,
    fontWeight: '700',
  },

  row: { flexDirection: 'row' },
  flexOne: { flex: 1 },
});

export { SplitterShortcut };
