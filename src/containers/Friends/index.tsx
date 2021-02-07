import { CurvedCorner } from 'components/CurvedCorner';
import { NearByFriend } from 'components/NearByFriend';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from 'theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export type IFriendsProps = {};

const SEARSH_SIZE = 72;
const SPACE = 8;

const CURVED_SECTION_SIZE = 20;

const Friends: React.FC<IFriendsProps> = ({}) => {
  return (
    <View>
      <View style={[styles.container, styles.row]}>
        <View style={[styles.searchContainer]}>
          <AntDesign name="search1" size={32} />
        </View>
        <View style={styles.nearByFriendsHeaderContainer}>
          <View
            style={[
              {
                flex: 1,
                padding: 16,
              },
            ]}>
            <View
              style={[styles.nearByFriendsTitleSeeAllContainer, styles.row]}>
              <Text style={[styles.title, styles.nearByFriendsTitle]}>
                Nearby friends
              </Text>
              <Text style={styles.seeAll}>See all</Text>
            </View>
          </View>
          <View
            style={{
              height: SPACE,
              width: '100%',
              backgroundColor: COLORS.PRIMARY_COLOR,
              marginBottom: -SPACE,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: -CURVED_SECTION_SIZE - SPACE,
              left: -CURVED_SECTION_SIZE,
            }}>
            <CurvedCorner />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: COLORS.PRIMARY_COLOR,
          padding: 20,
          marginTop: SPACE,
          borderRadius: 20,
          borderTopRightRadius: 0,
        }}>
        <View
          style={[
            {
              marginLeft: SEARSH_SIZE + SPACE,
              marginTop: -(CURVED_SECTION_SIZE + SPACE + SEARSH_SIZE / 4),
              justifyContent: 'space-between',
              marginBottom: 12,
            },
            styles.row,
          ]}>
          <View style={{ flexGrow: 0.3 }}>
            <NearByFriend />
          </View>
          <View style={{ flexGrow: 0.3 }}>
            <NearByFriend />
          </View>
          <View style={{ flexGrow: 0.3 }}>
            <NearByFriend />
          </View>
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={[styles.title]}>Recently split</Text>
          <View
            style={[
              styles.row,
              { justifyContent: 'space-between', marginTop: 12 },
            ]}>
            <View>
              <View style={styles.recentlyAvatar} />
              <Text style={styles.recentlyName}>Name</Text>
            </View>
            <View>
              <View style={styles.recentlyAvatar} />
              <Text style={styles.recentlyName}>Name</Text>
            </View>
            <View>
              <View style={styles.recentlyAvatar} />
              <Text style={styles.recentlyName}>Name</Text>
            </View>
            <View>
              <View style={styles.recentlyAvatar} />
              <Text style={styles.recentlyName}>Name</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  nearByFriendsTitle: {},
  recentlyName: {
    paddingVertical: 8,
    color: COLORS.TEXT_DEFAULT_COLOR,
    fontWeight: '600',
  },
  recentlyAvatar: {
    padding: 20,
    backgroundColor: COLORS.SECONDARY_COLOR,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },

  seeAll: {
    color: COLORS.TEXT_DEFAULT_COLOR,
  },
});

export { Friends };
