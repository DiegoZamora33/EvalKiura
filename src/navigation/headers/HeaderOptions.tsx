import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface HeaderOptionsProps {
  title: string;
  navigation: any;
  colors: {
    text: string;
    primary: string;
  };
}

const HeaderOptions: React.FC<HeaderOptionsProps> = ({
  title,
  navigation,
  colors,
}) => {
  // Retorna las opciones del encabezado
  const options: StackNavigationOptions = {
    title,
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{
            width: wp('8.5%'),
            height: wp('8.5%'),
            marginHorizontal: wp('3%'),
          }}
          source={require('../../assets/icons/back.png')}
          tintColor={colors.primary}
        />
      </TouchableOpacity>
    ),
  };

  return options;
};

export default HeaderOptions;
