import React, {useRef, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Animated,
  Image,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface FeedHeaderProps {
  title: string;
  navigation: any;
  colors: {
    text: string;
    primary: string;
  };
}

const FeedHeader: React.FC<FeedHeaderProps> = ({title, navigation, colors}) => {
  const jumpAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(jumpAnimation, {
          toValue: -2,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(jumpAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [jumpAnimation]);

  return {
    headerTitle: '',
    headerLeft: () => (
      <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
    ),
    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: colors.text}}>Tap aqui!! {'->'} </Text>
        <TouchableOpacity
          style={{
            marginHorizontal: wp('3%'),
          }}
          onPress={() => navigation.navigate('Developer')}>
          <Animated.View
            style={[
              {
                width: wp('13%'),
                height: wp('13%'),
                borderRadius: wp('13%'),
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
              },

              {transform: [{translateY: jumpAnimation}]},
            ]}>
            <Image
              source={require('../../assets/img/profile.jpg')}
              style={[
                {
                  width: wp('12%'),
                  height: wp('12%'),
                  borderRadius: wp('12%'),
                },
              ]}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
    ),
    headerStyle: Platform.OS === 'ios' && {
      height: hp('14%'),
    },
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: wp('3%'),
  },
});

export default FeedHeader;
