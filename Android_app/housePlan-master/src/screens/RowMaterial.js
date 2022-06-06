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
import ItemDetais from '../components/NoItemsMessage';
import Button from '../components/Button';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import Description from '../components/Description';
import Discount from '../components/Discount';

import { addItemToCart as addItemToCartActionCreator } from '../redux/cartItemsSlice';
import { COLORS, icons, SIZES } from '../constants';
import styles from '../constants/styling';
import { authenticateProduct } from '../api/getProductAPI';
import BASE_URL from '../shared/configs';

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

  // const { nfcData } = route.params;

  const addItemToCart = () => {
    navigation.navigate('CustomerReq');
  };

  useEffect(() => {
    const payload = {
      // nfc: {
      //   uuid: nfcData.uuid,
      //   signature: nfcData.signature,
      // },
      location: {
        lat: '123',
        lon: '123',
      },
    };
    //TODO: extract this to the shared directory
    const showToast = message => {
      Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
    };
    setRowMaterial({
      name: 'item3',
      price: 340,
      image: 'https://picsum.photos/200/300',
    });

    // authenticateProduct(payload)
    //   .then(response => {
    //     if (response.error || !response.data.token) {
    //       return;
    //     }
    //     const { data } = response;
    //     if (!data || !data.success) {
    //       navigation.navigate('ScanFail', {
    //         nfcData,
    //       });
    //       return;
    //     }
    //     setRowMaterial(data.product);
    //   })
    //   .catch(error => {
    //     showToast(error.response.data.message);
    //   });
  }, []);

  const header = (
    <View style={styles.rowFlexScanResHed}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={icons.close}
          resizeMode="contain"
          style={{
            tintColor: COLORS.primary,
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Row Material</Text>
      <ShoppingCartIcon />
    </View>
  );
  const data = [
    {
      name: 'Cement',
      cost: '$10',
      quantity: '21',
    },
    {
      name: 'Brick',
      cost: '$13',
      quantity: '15',
    },
    {
      name: 'Sand',
      cost: '$20',
      quantity: '14',
    },
    {
      name: 'Stone',
      cost: '$10',
      quantity: '1',
    },
    {
      name: 'Cement',
      cost: '$10',
      quantity: '12',
    },
    {
      name: 'Brick',
      cost: '$13',
      quantity: '10',
    },
    {
      name: 'Sand',
      cost: '$20',
      quantity: '2',
    },
    {
      name: 'Stone',
      cost: '$10',
      quantity: '1',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {header}
        <View style={styles.centerFlex}>
          <View style={styles.rowFlex2}>
            <ItemDetais msg={'Category'} />
            <ItemDetais msg={'Cost'} />
            <ItemDetais msg={'Quantity'} />
          </View>
          {data
            ? data.map((item, index) => {
                return (
                  <View style={styles.rowFlex2} key={index}>
                    <ItemDetais msg={item.name} />
                    <ItemDetais msg={item.cost} />
                    <ItemDetais msg={item.quantity} />
                  </View>
                );
              })
            : null}
        </View>
        <View style={{ marginTop: 100 }}>
          <Text style={styles.headerText}>Full Cost : $1290</Text>
          <View style={styles.centerFlex}>
            <Button
              text="Customer Requirement"
              onPress={() => addItemToCart()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
