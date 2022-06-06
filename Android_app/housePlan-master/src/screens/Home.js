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
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonTextStyle}>Submit your detail</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.centerFlex}>
        <Text style={styles.buttonTextStyleReg}>Build your dream house</Text>
      </View>
      <View style={styles.centerFlex}>
        <View style={styles.rowFlex}>
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Perches" //12345
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Hectors" //12345
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Length" //12345
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Width" //12345
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Area" //12345
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Room Count" //12345
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Washroom Count" //12345
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
          <TextInput
            style={[styles.inputStyle]}
            // onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Floors Count" //12345
            placeholderTextColor={COLORS.third}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
          />
        </View>
        <View style={styles.rowFlex}>
          <CheckBox title="Garage" checked={false} />

          <CheckBox title="Click Here" checked={false} />
        </View>
        <View style={styles.rowFlex}>
          <SelectDropdown
            data={dropData}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText="Roof Type"
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
          <SelectDropdown
            data={dropData}
            defaultButtonText="Stone Type"
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
          <SelectDropdown
            style={styles.inputStyle}
            data={dropData}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText="Floor Type"
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
          <SelectDropdown
            style={{ width: SIZES.width * 0.3 }}
            data={dropData}
            defaultButtonText="Ceiling Type"
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
        {ButtonSub}
        <View style={styles.rowFlex}>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={{
              width: SIZES.width * 0.4,
              height: SIZES.width * 0.46,
            }}
          />
          <Text style={styles.TextStyleRg}>
            Qui exercitation excepteur ex nulla pariatur deserunt amet excepteur
            tempor enim deserunt labore minim eiusmod. Qui exercitation
            excepteur ex nulla pariatur deserunt amet excepteur tempor enim
            deserunt labore minim eiusmod.
          </Text>
        </View>
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
