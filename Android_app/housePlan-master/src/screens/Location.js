/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { FlatGrid } from 'react-native-super-grid';
import Button from '../components/Button';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import Description from '../components/Description';
import Discount from '../components/Discount';

import { addItemToCart as addItemToCartActionCreator } from '../redux/cartItemsSlice';
import { COLORS, icons, SIZES } from '../constants';
import styles from '../constants/styling';

const initialData = {
  productId: '4baa331e-9f43-473a-af9e-3839e9f2101e',
  code: '298KDF679',
  name: "Men's Dry-FIT Tee",
  colorCode: '#141414',
  colorName: 'Black',
  size: 'S',
  desc: "The Nike Dri-FIT Men's T-Shirt delivers a soft feel, workout in total comfort.The Nike men's workout shirt has a standard fit for a \nrelaxed, easy feel during physical activity.The Nike Dry fabric material moves \nwith you for optimal range while you play. The Nike t-shirt for men has a ribbed\ncrew neck that gives you a comfortable fit when active. The cut is designed to \nlay smoothly against the skin. ",
  images: ['298KDF679-1.jpeg', '298KDF679-2.jpeg'],
  price: 16.81,
  discount: 10,
  poNumber: '4537DF0978',
  countryOfOrigin: 'Sri Lanka',
  dateCode: '3121',
};

export default function RowMaterial({ navigation, route }) {
  const dispatch = useDispatch();
  const userAuthToken = useSelector(state => state.auth.token);

  const [RowMaterial, setRowMaterial] = useState(initialData);
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
  ]);

  useEffect(() => {
    //TODO: extract this to the shared directory
    const showToast = message => {
      Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
    };
    setRowMaterial({
      name: 'item3',
      price: 340,
      image: 'https://picsum.photos/200/300',
    });
  }, []);
  const care = [
    {
      icon: icons.wash,
      text: 'Machine wash at max. 300C/860F with short spin cycle',
    },
    {
      icon: icons.doNot,
      text: 'Do not use bleach',
    },
    {
      icon: icons.iron,
      text: 'Iron at a maximum of 11OC/230F',
    },
  ];
  const header = (
    <View style={styles.rowFlexScanResHed}>
      <Text style={styles.headerText}>3D House</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {header}
        <View style={styles.centerFlex}>
          {RowMaterial.image && (
            <View
              style={{
                marginLeft: 10,
              }}>
              <Image
                source={{
                  uri: 'https://picsum.photos/200/300',
                  headers: {
                    Authorization: `Bearer ${userAuthToken}`,
                  },
                }}
                resizeMode="cover"
                style={{
                  height: SIZES.height * 0.5,
                  width: SIZES.width * 0.8,
                  marginLeft: SIZES.width * 0.05,
                  marginRight: SIZES.width * 0.05,
                }}
              />
            </View>
          )}
        </View>
        <View style={styles.rowFlexScanRes}>
          <Text style={styles.itemTextStyle}>
            Ea quis deserunt incididunt sit tempor q uis. Ea quis deserunt
            incididunt sit tempor q uis.
          </Text>
        </View>

        <View style={styles.centerFlex}>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}>View Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('RowMaterial')}>
            <Text style={styles.buttonTextStyle}>View Row Material</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
