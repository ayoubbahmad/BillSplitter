import React, { useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from 'theme/Colors';
import { useNavigation } from '@react-navigation/native';

export const SplitNowHeader: React.FC<ISplitNowHeaderProps> = ({}) => {
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
        <Feather
          name="chevron-left"
          size={32}
          color={COLORS.TEXT_ON_PRIMARY_COLOR}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Slit Now</Text>
      <TouchableOpacity style={styles.moreButton}>
        <Feather
          name="more-vertical"
          size={28}
          color={COLORS.TEXT_ON_PRIMARY_COLOR}
        />
      </TouchableOpacity>
    </View>
  );
};

export interface ISplitNowHeaderProps {}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackButton: {
    padding: 20,
    backgroundColor: COLORS.PRIMARY_COLOR,
    alignSelf: 'baseline',
    borderRadius: 20,
  },
  title: {
    flex: 1,
    textAlign: 'right',
    color: COLORS.TEXT_ON_PRIMARY_COLOR,
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 1.4,
    marginRight: 12,
  },
  moreButton: {
    padding: 8,
    alignSelf: 'baseline',
    borderRadius: 16,
  },
});

export default SplitNowHeader;
