import React from 'react';
import { View } from 'react-native';
import { COLORS } from 'theme/Colors';

export type ICurvedCornerProps = {};

const SEARSH_SIZE = 72;
const SPACE = 8;

const CURVED_SECTION_SIZE = 20;

const CurvedCorner: React.FC<ICurvedCornerProps> = ({}) => {
  return (
    <View
      style={{
        width: CURVED_SECTION_SIZE * 2,
        height: CURVED_SECTION_SIZE * 2,
        overflow: 'hidden',
        zIndex: 0,
      }}>
      <View
        style={{
          width: CURVED_SECTION_SIZE * 4,
          height: CURVED_SECTION_SIZE * 4,
          backgroundColor: COLORS.BACKGROUND_COLOR,
          borderRadius: CURVED_SECTION_SIZE * 2,
          borderColor: COLORS.PRIMARY_COLOR,
          borderWidth: CURVED_SECTION_SIZE,
          overflow: 'hidden',
          padding: 10,
          left: -CURVED_SECTION_SIZE * 2,
          top: -CURVED_SECTION_SIZE * 2,
        }}
      />
    </View>
  );
};

export { CurvedCorner };
