import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import Loading from '../loading/Loading';
import {useTheme} from '@react-navigation/native';

export default function BaseScreen({
  children = undefined,
  style = {backgroundColor: 'transparent'},
  loading = false,
}) {
  const {colors} = useTheme();
  const {backgroundColor} = style;
  let customStyle = {backgroundColor};

  return (
    <>
      <SafeAreaView style={[styles.wrapper, customStyle]}>
        <View style={[styles.wrapper]}>
          {children ? (
            children
          ) : (
            <Text style={{color: colors.text}}>Hola!</Text>
          )}
        </View>
      </SafeAreaView>
      <Loading active={loading} />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
