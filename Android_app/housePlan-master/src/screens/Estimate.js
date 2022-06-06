import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Platform,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';
import ItemDetais from '../components/NoItemsMessage';

import { images, SIZES, COLORS } from '../constants';
import { getOffers } from '../api/offersAPI';
import SelectDropdown from 'react-native-select-dropdown';
const dropData = ['data1', 'data2', 'data3', 'data4'];
export default function Home({ navigation }) {
  const [offers, setOffers] = useState([]);
  const userAuthToken = useSelector(state => state.auth.token);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: 'item1',
        price: 100,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 2,
        name: 'item2',
        price: 400,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 3,
        name: 'item3',
        price: 340,
        image: 'https://picsum.photos/200/300',
      },
    ];
    setOffers(data);
  }, []);

  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };
  const ButtonSub = (
    <View style={styles.centerFlex}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonTextStyle}>Estimate Time and Total Cost</Text>
      </TouchableOpacity>
    </View>
  );
  const ButtonSub2 = (
    <View style={styles.centerFlex}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttonTextStyle}>Contact Details</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.centerFlex}>
        <Text style={styles.buttonTextStyleReg}>
          Estimate Time and Total Cost
        </Text>
      </View>
      <View style={styles.centerFlex}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{
            marginTop: 10,
            width: SIZES.width * 0.8,
            height: SIZES.width * 0.36,
          }}
        />
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Row Material Total cost</Text>
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Total Worker Cost</Text>
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Estimate Total Cost</Text>

          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Estimate Date</Text>

          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>

        <View style={styles.centerFlex}>
          <Text style={styles.buttonTextStyleReg}>Worker Price</Text>
        </View>
        <View style={styles.rowFlex2}>
          <ItemDetais />
          <ItemDetais msg={'Price'} />
          <ItemDetais msg={'Details'} />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Engineer Details</Text>
          <TextInput
            style={[styles.inputStyle2]}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
          <TextInput
            style={[styles.inputStyle2]}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Architecture Details</Text>
          <TextInput
            style={[styles.inputStyle2]}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
          <TextInput
            style={[styles.inputStyle2]}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Construction Details</Text>
          <TextInput
            style={[styles.inputStyle2]}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
          <TextInput
            style={[styles.inputStyle2]}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Carpenter Details</Text>
          <TextInput
            style={[styles.inputStyle2]}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
          <TextInput
            style={[styles.inputStyle2]}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Total Worker Cost</Text>
          <TextInput
            style={[styles.inputStyle2]}
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        {ButtonSub}
        {ButtonSub2}
        <View style={{ height: 100 }}></View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  banner: {
    marginTop: -30,
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.8,
    height: 40,
    overflow: 'hidden',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    // flex: 1,
    alignItems: 'center',
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  rowFlex2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
  },
  centerFlex2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  offerText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: SIZES.width,
    alignContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  buttonTextStyleReg: {
    color: COLORS.third,
    fontSize: 20,
    paddingVertical: 7,
    fontWeight: 'bold',
  },
  buttonTextStyle: {
    color: COLORS.white,
    fontSize: 20,
    paddingVertical: 7,
    fontWeight: 'bold',
  },
  TextStyleRg: {
    color: COLORS.third,
    fontSize: 15,
    width: SIZES.width * 0.3,
    paddingVertical: 7,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.black,
    borderWidth: 0,
    color: COLORS.white,
    height: 50,
    width: 330,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },

  inputStyle: {
    flex: 1,
    width: SIZES.width * 0.3,
    color: COLORS.third,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: COLORS.darkgray,
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 20,
    margin: 5,
  },
  inputStyle2: {
    flex: 1,
    width: SIZES.width * 0.2,
    color: COLORS.third,
    borderColor: COLORS.darkgray,
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 2,
    margin: 5,
  },
});
