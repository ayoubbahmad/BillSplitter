import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from 'theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export type INearByFreindProps = {};

const NearByFriend: React.FC<INearByFreindProps> = ({}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.BACKGROUND_COLOR,
        borderRadius: 130,
        alignItems: 'center',
        paddingVertical: 12,
        paddingBottom: 20,
      }}>
      <View
        style={{
          padding: 20,
          backgroundColor: 'white',
          borderRadius: 50,
        }}
      />
      <Text style={styles.name}>Name</Text>

      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: -12,
          borderRadius: 20,
        }}>
        <AntDesign name="pluscircle" color={COLORS.SECONDARY_COLOR} size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    paddingVertical: 8,
    color: COLORS.TEXT_DEFAULT_COLOR,
    fontWeight: '600',
  },
});

export { NearByFriend };
