import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from 'theme/Colors';
import { messages } from './messages';

export type IProfileAvatarProps = {};

const ProfileAvatar: React.FC<IProfileAvatarProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('assets/avatars/avatar3.png')}
        style={styles.profilAvatar}
      />
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>{messages.username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderColor: `${COLORS.WHITE_BACKGROUND}50`,
    borderWidth: 1,
  },
  profilAvatar: {
    height: 48,
    width: 48,
    marginTop: -10,
    alignSelf: 'center',
  },
  userNameContainer: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  userName: {
    color: COLORS.TEXT_DEFAULT_COLOR,
    fontWeight: '700',
    fontSize: 12,
  },
});

export { ProfileAvatar };
