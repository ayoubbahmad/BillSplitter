import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from 'theme/Colors';

export type INearByFreindProps = {};

const NearByFriend: React.FC<INearByFreindProps> = ({}) => {
  return (
    <View
      style={{
        flex: 1,
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
          backgroundColor: COLORS.SECONDARY_COLOR,
          position: 'absolute',
          bottom: -12,
          padding: 12,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          width: 20,
          height: 20,
        }}
      />
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
