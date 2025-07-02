import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('LOGIN');
  };
  const handleSignup = () => {
    navigation.navigate('SIGNUP');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/man.png')} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipsum dolor.</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore 
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colors.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper, { backgroundColor: colors.white }]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 70,
  },
  bannerImage: {
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.Regular,
    textAlign: 'center',
    paddingHorizontal: 60,
    color: colors.black,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    textAlign: 'center',
    color: colors.secondary,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.secondary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',

    borderRadius: 98,
  },
  loginButtonText: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});
