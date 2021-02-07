import React from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { COLORS } from 'theme/Colors';
import { messages } from './messages';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CircularAvatar } from 'components/CircularAvatar';

export type ISplitterShortcutProps = {};

const CURRENCY = '$';

const splitWithAvatars = [
  {
    id: 1,
    imageUrl: require('assets/avatars/avatar1.png'),
    backgroundColor: '#90b5df',
  },
  {
    id: 2,
    imageUrl: require('assets/avatars/avatar2.png'),
    backgroundColor: '#b59aef',
  },
  {
    id: 3,
    imageUrl: require('assets/avatars/avatar3.png'),
    backgroundColor: '#eda798',
  },
  {
    id: 4,
    imageUrl: require('assets/avatars/avatar4.png'),
    backgroundColor: '#ceccbb',
  },
];

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
        <View style={styles.splitWIthButtonContainer}>
          <TouchableOpacity
            style={[styles.splitNowButton]}
            onPress={() => {
              alert('split now');
            }}>
            <View>
              <Text style={styles.splitNowButtonText}>{messages.splitNow}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={[styles.text, styles.titleText, styles.splitWith]}>
          {messages.splitWith}
        </Text>
        <View style={styles.flexOne}>
          <View style={[styles.splitWithListContainer]}>
            {splitWithAvatars.map((item) => {
              return <CircularAvatar avatar={item} key={`${item.id}`} />;
            })}
            <TouchableOpacity
              style={[styles.addSplitWith]}
              onPress={() => {
                alert('Add action');
              }}>
              <AntDesign name="pluscircle" color={'#f1aa9b'} size={38} />
            </TouchableOpacity>
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
  splitWIthButtonContainer: {
    alignSelf: 'baseline',
  },
  splitWith: {},
  splitWithListContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    padding: 12,
    position: 'absolute',
  },
  addSplitWith: {
    backgroundColor: 'white',
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
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
