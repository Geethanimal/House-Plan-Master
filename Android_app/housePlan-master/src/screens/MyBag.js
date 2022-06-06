import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';

import DoneModal from '../components/DoneModal';
import ItemDetais from '../components/detailsMsg';
import Item from '../components/Item';

import { removeItemFromCart as removeItemFromCartActionCreator } from '../redux/cartItemsSlice';
import { SIZES } from '../constants';
import styles from '../constants/styling';
import { checkout } from '../api/checkoutAPI';

function MyBag({ navigation }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems.value);
  const userAuth = useSelector(state => state.auth.token);
  const [modalVisible, setModalVisible] = useState(false);

  const checkOut = () => {
    setModalVisible(true);

    var result = cartItems.map(function (a) {
      return a.productId;
    });

    checkoutOrder(result);
  };
  const checkoutOrder = result => {
    const payload = {
      items: [
        {
          productId: result[0],
        },
      ],
    };
    checkout(payload)
      .then(response => {
        if (response.error || !response.data.token) {
          showToast(response.error);
          return;
        }
        const { data } = response;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };
  const getSum = items => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].price;
    }
    return sum;
  };

  const removeItemFromCart = item =>
    dispatch(removeItemFromCartActionCreator(item));

  return (
    <View style={styles.container}>
      <View style={styles.rowFlex1}>
        <Text style={styles.headerText}>Build your dream house Details</Text>
      </View>
      <View style={styles.rowFlex21}>
        <View style={{ marginLeft: 20 }}>
          <ItemDetais msg={'Perches : 10'} />
          <ItemDetais msg={'Hectors : 10'} />
          <ItemDetais msg={'Length : 10'} />
          <ItemDetais msg={'Width : 10'} />
          <ItemDetais msg={'Area : 10'} />
        </View>
        <View style={{ marginLeft: 20 }}>
          <ItemDetais msg={'Room Count : 10'} />
          <ItemDetais msg={'Washroom Count : 10'} />
          <ItemDetais msg={'Washroom Count : 10'} />
          <ItemDetais msg={'Floors Count : 10'} />
        </View>
      </View>

      <View style={styles.rowFlex1}>
        <Text style={styles.headerText}>Finishing Details</Text>
      </View>
      <View style={{ marginLeft: 20 }}>
        <ItemDetais msg={'Ceiling Type : Hip Roof'} />
        <ItemDetais msg={'Stone Type :  Hip Roof'} />
        {/* </View>
      <View style={styles.rowFlex2}> */}
        <ItemDetais msg={'Roof Type :  Hip Roof'} />
        <ItemDetais msg={'Finishing Roof Type :  Hip Roof'} />
      </View>
    </View>
  );
}

export default MyBag;
