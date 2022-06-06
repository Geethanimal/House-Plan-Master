import React from 'react';
import { Text, View } from 'react-native';

import styles from '../constants/styling';

// const DEFAULT_NO_ITEMS_MESSAGE = 'Sorry ! \nThere are no items here';

const NoItemsMessage = ({ msg }) => (
  <View style={styles.emptyCartContainerMsg}>
    <Text style={styles.emptyCartMessage}>{msg}</Text>
  </View>
);

export default NoItemsMessage;
