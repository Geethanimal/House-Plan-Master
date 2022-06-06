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
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';
import { CheckBox } from 'react-native-elements';

import Button from '../components/Button';

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
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonTextStyle}>Next</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.centerFlex}>
        <Text style={styles.buttonTextStyleReg}>Contact Details</Text>
      </View>
      <View style={styles.centerFlex}>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Engineer Details</Text>
          <SelectDropdown
            data={dropData}
            defaultButtonText="Select"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Architecture Details</Text>
          <SelectDropdown
            data={dropData}
            defaultButtonText="Select"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Construction Details</Text>
          <SelectDropdown
            data={dropData}
            defaultButtonText="Select"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Carpenter Details</Text>
          <SelectDropdown
            data={dropData}
            defaultButtonText="Select"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.TextStyleRg}>Hardware Details</Text>
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

        {ButtonSub}
      </View>
    </View>
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
    width: SIZES.width * 0.4,
    paddingVertical: 7,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: COLORS.black,
    borderWidth: 0,
    color: COLORS.white,
    height: 50,
    width: 230,
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
});
