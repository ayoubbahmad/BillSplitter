import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { messages } from './messages';
import { COLORS } from 'theme/Colors';
import { ProfileAvatar } from 'components/ProfileAvatar';

export type IHeaderProps = {};

const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <View style={[styles.container, styles.row]}>
      <View style={styles.titlesCOntainer}>
        <Text style={[styles.headerText, styles.agecyName]}>
          {messages.agecyName}
        </Text>
        <Text style={[styles.headerText, styles.appName]}>
          {messages.appName}
        </Text>
      </View>
      <View style={styles.profileAvatarContainer}>
        <ProfileAvatar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  titlesCOntainer: { justifyContent: 'center' },
  headerText: {
    color: COLORS.TEXT_ON_PRIMARY_COLOR,
    fontSize: 32,
  },
  agecyName: {
    fontWeight: '300',
  },
  appName: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
  },
  profileAvatarContainer: {
    justifyContent: 'center',
  },
});

export { Header };
