import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import LoginScreen from '../screens/LogIn';
import Register from '../screens/Register';
import OnBoarding from '../screens/OnBoarding';
import BottomNavigator from './BottomNavigation/BottomNavigator';
import RowMaterial from '../screens/RowMaterial';
import CustomerReq from '../screens/CustomerReq';
import Estimate from '../screens/Estimate';
import Location from '../screens/Location';
import ItemDetails from '../screens/ItemDetails';
import ContactUs from '../screens/ContactUs';
import ScanFail from '../screens/ScanFail';
import MyItems from '../screens/MyItems';
import MyDetails from '../screens/MyDetails';
import Contact from '../screens/Contact';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

export const ScreenNames = {
  Estimate: 'Estimate',
  Contact: 'Contact',
  Login: 'Login',
  OnBoarding: 'OnBoarding',
  Register: 'Register',
  Home: 'Home',
  MyItems: 'MyItems',
  MyDetails: 'MyDetails',
  ItemDetails: 'ItemDetails',
  ContactUs: 'ContactUs',
  ScanFail: 'ScanFail',
  RowMaterial: 'RowMaterial',
  CustomerReq: 'CustomerReq',
  Items: 'Items',
  ItemsScreen: 'ItemsScreen',
  Location: 'Location',
  Profile: 'Profile',
};

export const { Navigator, Screen } = createStackNavigator();

export default function MainStackNavigator() {
  const userAuthToken = useSelector(state => state.auth.token);

  return (
    <Navigator
      initialRouteName={'OnBoarding'}
      screenOptions={{
        headerShown: false,
      }}>
      {/* {!userAuthToken || userAuthToken === '' ? (
        <Screen name={ScreenNames.OnBoarding} component={LoginScreen} />
      ) : ( */}
      {/* <> */}
      <Screen name={ScreenNames.Login} component={LoginScreen} />

      <Screen
        name={ScreenNames.Home}
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.OnBoarding}
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.MyItems}
        component={MyItems}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.MyDetails}
        component={MyDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.Register}
        component={Register}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.ItemDetails}
        component={ItemDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.ContactUs}
        component={ContactUs}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.ScanFail}
        component={ScanFail}
        options={{ headerShown: false }}
      />
      <Screen
        name={ScreenNames.RowMaterial}
        component={RowMaterial}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ScreenNames.Contact}
        component={Contact}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ScreenNames.CustomerReq}
        component={CustomerReq}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ScreenNames.Location}
        component={Location}
        options={{
          headerShown: false,
        }}
      />
      {/* </> */}
      {/* )} */}
    </Navigator>
  );
}
