import { CurvedCorner } from 'components/CurvedCorner';
import { NearByFriend } from 'components/NearByFriend';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { COLORS } from 'theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const nearByAvatars = [
  {
    id: 1,
    imageUrl: require('assets/avatars/avatar1.png'),
    backgroundColor: '#90b5df',
    name: 'fadwa',
  },
  {
    id: 2,
    imageUrl: require('assets/avatars/avatar5.png'),
    backgroundColor: '#b59aef',
    name: 'Ahmed',
  },
  {
    id: 3,
    imageUrl: require('assets/avatars/avatar3.png'),
    backgroundColor: '#eda798',
    name: 'Ayoub',
  },
  {
    id: 4,
    imageUrl: require('assets/avatars/avatar4.png'),
    backgroundColor: '#ceccbb',
    name: 'zineb',
  },
];

const SEARSH_SIZE = 72;
const SPACE = 8;

const CURVED_SECTION_SIZE = 52;

const Friends: React.FC<IFriendsProps> = ({}) => {
  return (
    <View>
      <View style={[styles.container, styles.row]}>
        <View style={[styles.searchContainer]}>
          <AntDesign name="search1" size={32} />
        </View>
        <View style={styles.nearByFriendsHeaderContainer}>
          <View style={[styles.nearByFriendsTitleSeeAllContainer, styles.row]}>
            <Text style={[styles.title, styles.nearByFriendsTitle]}>
              Nearby friends
            </Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <View style={styles.fillSpace} />
          <View style={styles.curvedSectionContainer}>
            <CurvedCorner size={CURVED_SECTION_SIZE} />
          </View>
        </View>
      </View>
      <View style={styles.recentlyContainer}>
        <View style={[styles.recentlyAvatarsContainer, styles.row]}>
          {nearByAvatars.slice(1, nearByAvatars.length).map((item) => {
            return (
              <View
                style={{ flexGrow: 1 / (nearByAvatars.length + 1) }}
                key={`${item.id}`}>
                <NearByFriend avatar={item} />
              </View>
            );
          })}
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={[styles.title]}>Recently split</Text>
          <View
            style={[
              styles.row,
              { justifyContent: 'space-between', marginTop: 12 },
            ]}>
            {nearByAvatars.map((item) => {
              return (
                <View style={{ alignItems: 'center' }} key={`${item.id}`}>
                  <View
                    style={[
                      styles.recentlyAvatarContainer,
                      { backgroundColor: item.backgroundColor },
                    ]}>
                    <Image
                      source={item.imageUrl}
                      style={styles.recentlyAvatar}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.recentlyName}>{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export type IFriendsProps = {};

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  container: {},
  searchContainer: {
    backgroundColor: COLORS.SECONDARY_COLOR,
    height: SEARSH_SIZE,
    width: SEARSH_SIZE,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  nearByFriendsHeaderContainer: {
    marginLeft: SPACE,
    backgroundColor: COLORS.PRIMARY_COLOR,
    flex: 1,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    color: COLORS.SECONDARY_COLOR,
    fontWeight: '600',
  },
  nearByFriendsTitleSeeAllContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    width: '100%',
    padding: 16,
  },
  nearByFriendsTitle: {},
  fillSpace: {
    height: SPACE,
    width: '100%',
    backgroundColor: COLORS.PRIMARY_COLOR,
    marginBottom: -SPACE,
  },
  curvedSectionContainer: {
    position: 'absolute',
    bottom: -CURVED_SECTION_SIZE / 2 - SPACE,
    left: -CURVED_SECTION_SIZE / 2,
  },
  recentlyContainer: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    padding: 20,
    marginTop: SPACE,
    borderRadius: 20,
    borderTopRightRadius: 0,
  },
  recentlyName: {
    paddingVertical: 8,
    color: COLORS.TEXT_DEFAULT_COLOR,
    fontWeight: '600',
  },
  recentlyAvatarsContainer: {
    marginLeft: SEARSH_SIZE + SPACE,
    marginTop: -(SPACE + SEARSH_SIZE / 4 + 20), // 20px => padding value
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  recentlyAvatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentlyAvatar: { width: 32, height: 32 },
  seeAll: {
    color: COLORS.TEXT_DEFAULT_COLOR,
  },
});

export { Friends };
