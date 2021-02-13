import { CircularAvatar } from 'components/CircularAvatar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from 'theme/Colors';

export interface IReceiptSplitWithProps {}

const splitWIthAvatars = [
  {
    id: 1,
    imageUrl: require('assets/avatars/avatar1.png'),
    backgroundColor: '#90b5df',
    name: 'fadwa',
  },
  {
    id: 3,
    imageUrl: require('assets/avatars/avatar5.png'),
    backgroundColor: '#b59aef',
    name: 'Ahmed',
  },
  {
    id: 2,
    imageUrl: require('assets/avatars/avatar3.png'),
    backgroundColor: '#eda798',
    name: 'Ayoub',
  },
];

export const ReceiptSplitWith: React.FC<IReceiptSplitWithProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {splitWIthAvatars.map((avatar, index) => (
          <View style={{ zIndex: index === 1 ? 1 : 0 }} key={`${avatar.id}`}>
            <CircularAvatar
              avatar={avatar}
              containerStyle={styles.avatarContainer}
            />
          </View>
        ))}
      </View>
      <Text style={styles.title}>Splitting With</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  avatarContainer: {
    borderColor: COLORS.BACKGROUND_COLOR,
    marginBottom: 0,
    marginHorizontal: -8,
    height: 44,
    width: 44,
    borderRadius: 44,
  },
  title: {
    color: '#e9e8ed',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 8,
  },
});
export default ReceiptSplitWith;
