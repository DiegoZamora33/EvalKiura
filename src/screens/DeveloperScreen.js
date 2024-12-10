import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {useTheme} from '@react-navigation/native';
import BaseScreen from '../components/base_screen/BaseScreen';

const DeveloperScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {colors} = useTheme();

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <BaseScreen loading={isLoading}>
      <WebView
        source={{uri: 'https://diegozamora.com.mx/'}}
        style={styles.webview}
        onLoad={handleLoad}
      />
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
  },
});

export default DeveloperScreen;
