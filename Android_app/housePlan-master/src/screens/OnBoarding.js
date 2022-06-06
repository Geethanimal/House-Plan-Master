import React, { createRef, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { COLORS, icons, images, SIZES } from '../constants';
import { setClientToken } from '../shared/axios';
import { login } from '../api/authAPI';
import { authSuccess } from '../redux/authSlice';
import { storeUserToken, getUserToken } from '../shared/asyncStorage';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const animationLogoScale = useRef(new Animated.Value(0)).current;
  const animationLogoPosition = useRef(new Animated.Value(100)).current;
  const animationInputOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(animationLogoScale, {
        toValue: 1,
        useNativeDriver: true,
        mass: 1.2,
      }),
      Animated.parallel([
        Animated.spring(animationLogoPosition, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.spring(animationInputOpacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [animationLogoScale, animationLogoPosition, animationInputOpacity]);

  //Check if token is available and auto login if available
  useEffect(() => {
    getUserToken().then(token => {
      if (token) {
        setClientToken(token);
        dispatch(authSuccess(token));
        navigation.navigate('Home');
      }
    });
  });

  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };

  const onPressLogin = () => {
    dispatch(authSuccess('data.token'));
    navigation.navigate('Home');
    // const payload = {
    //   username: userEmail,
    //   password: userPassword,
    // };
    // login(payload)
    //   .then(response => {
    //     if (response.error || !response.data.token) {
    //       showToast(response.error);
    //       return;
    //     }
    //     const { data } = response;
    //     setClientToken(data.token);
    //     storeUserToken(data.token).then(result =>
    //       console.log('Remove me if not needed', result),
    //     );
    //     dispatch(authSuccess(data.token));
    //     navigation.navigate('Home');
    //   })
    //   .catch(error => {
    //     showToast(error.response.data.message);
    //   });
  };
  const passwordInputRef = createRef();

  const userName = (
    <View style={styles.rowFlex}>
      <Image
        source={icons.user}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
        }}
      />
      <View style={styles.SectionStyle}>
        <TextInput
          editable={false}
          style={[styles.inputStyle]}
          onChangeText={UserEmail => setUserEmail(UserEmail)}
          placeholder="Test user"
          placeholderTextColor={COLORS.third}
          autoCapitalize="none"
          disabled
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
      </View>
    </View>
  );
  const password = (
    <View style={styles.rowFlex}>
      <Image
        source={icons.mic}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
        }}
      />
      <View style={styles.SectionStyle}>
        <TextInput
          editable={false}
          style={[styles.inputStyle]}
          onChangeText={UserPassword => setUserPassword(UserPassword)}
          placeholder="Tap to Record" //12345
          placeholderTextColor={COLORS.third}
          keyboardType="default"
          ref={passwordInputRef}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          secureTextEntry={true}
          underlineColorAndroid="#f000"
          returnKeyType="next"
        />
      </View>
    </View>
  );
  const logInButton = (
    <View style={styles.centerFlex}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => onPressLogin()}>
        <Text style={styles.buttonTextStyle}>Next</Text>
      </TouchableOpacity>
    </View>
  );
  const regButton = (
    <View style={styles.centerFlex}>
      <TouchableOpacity
        // style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonTextStyleReg}>
          Don't have account? register here
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Animated.View
            style={[
              styles.centerFlex,
              {
                transform: [{ translateY: animationLogoPosition }],
              },
            ]}>
            <Animated.View
              style={{
                transform: [{ scale: animationLogoScale }],
              }}>
              <Image
                source={{ uri: 'https://picsum.photos/200/300' }}
                style={{
                  width: SIZES.width * 0.9,
                  height: SIZES.width * 0.46,
                }}
              />
              <Text
                style={{
                  color: COLORS.thrid,
                  fontSize: 10,
                  marginLeft: 30,
                  marginTop: 10,
                }}>
                Ex amet sint eu do consectetur incididunt exercitation officia.
              </Text>
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={{
              opacity: animationInputOpacity,
            }}>
            {userName}
            {password}
            <TextInput
              style={{
                color: COLORS.thrid,
                fontSize: 10,
                marginLeft: 30,
                marginTop: 10,
              }}
              multiline={true}
              numberOfLines={4}
              value={
                'Est commodo cupidatat officia ipsum veniam minim non voluptat eEst commodo cupidatat officia ipsum veniam minim non voluptate.'
              }
            />

            {logInButton}
          </Animated.View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: SIZES.width * 0.1,
    alignContent: 'center',
  },
  mainBody: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  SectionStyle: {
    height: 40,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.black,
    borderWidth: 0,
    color: COLORS.white,
    height: 50,
    width: 130,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 7,
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonTextStyleReg: {
    color: COLORS.third,
    // paddingVertical: 7,
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputStyle: {
    flex: 1,
    color: COLORS.third,
    paddingLeft: 15,
    paddingRight: 15,
    width: SIZES.width * 0.7,
  },
  inputStyleError: {
    flex: 1,
    color: COLORS.third,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'red',
    paddingLeft: 15,
    paddingRight: 15,
    width: SIZES.width * 0.7,
  },
});
