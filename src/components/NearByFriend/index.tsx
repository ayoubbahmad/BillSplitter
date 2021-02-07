import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ColorValue,
  ImageSourcePropType,
} from 'react-native';
import { COLORS } from 'theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CircularAvatar } from 'components/CircularAvatar';

export type INearByFreindProps = {
  avatar: {
    backgroundColor: ColorValue;
    imageUrl: ImageSourcePropType;
    name: string;
  };
};

const NearByFriend: React.FC<INearByFreindProps> = ({ avatar }) => {
  return (
    <View style={styles.container}>
      <CircularAvatar avatar={avatar} />
      <Text style={styles.name}>{avatar.name}</Text>

      <View style={styles.plusButton}>
        <TouchableOpacity>
          <AntDesign
            name="pluscircle"
            color={COLORS.SECONDARY_COLOR}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderRadius: 130,
    alignItems: 'center',
    paddingVertical: 12,
  },
  name: {
    paddingVertical: 8,
    paddingTop: 16,
    color: COLORS.TEXT_DEFAULT_COLOR,
    fontWeight: '700',
    fontSize: 12,
  },
  plusButton: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -12,
    borderRadius: 20,
  },
});

export { NearByFriend };
