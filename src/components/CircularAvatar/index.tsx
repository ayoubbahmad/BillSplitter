import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  ColorValue,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import { COLORS } from 'theme/Colors';

export type ICircularAvatarProps = {
  avatar: { backgroundColor: ColorValue; imageUrl: ImageSourcePropType };
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
};

const CircularAvatar: React.FC<ICircularAvatarProps> = (props) => {
  const { avatar, containerStyle, imageStyle } = props;
  return (
    <View
      style={[
        styles.splitWithItem,
        { backgroundColor: avatar.backgroundColor },
        { ...containerStyle },
      ]}>
      <Image
        source={avatar.imageUrl}
        resizeMode="contain"
        style={[styles.splitWithAvatar, { ...imageStyle }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splitWithItem: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 20,
    marginBottom: -8,
    borderWidth: 2,
    borderColor: COLORS.WHITE_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splitWithAvatar: {
    width: 28,
    height: 28,
  },
});

export { CircularAvatar };
