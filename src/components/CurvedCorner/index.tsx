import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from 'theme/Colors';

type cornerPositions = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export type ICurvedCornerProps = {
  size?: number;
  cornerPosition?: cornerPositions;
};

const DEFAULT_CURVED_SECTION_SIZE = 40;

const CurvedCorner: React.FC<ICurvedCornerProps> = ({
  size = DEFAULT_CURVED_SECTION_SIZE,
  cornerPosition = 'bottomRight',
}) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View
        style={[
          styles.shape,
          {
            width: size * 2,
            height: size * 2,
            borderRadius: size,
            borderWidth: size / 2,
            left: -size,
            top: -size,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  shape: {
    backgroundColor: 'transparent',
    borderColor: COLORS.PRIMARY_COLOR,
    overflow: 'hidden',
    padding: 10,
  },
});

export { CurvedCorner };
