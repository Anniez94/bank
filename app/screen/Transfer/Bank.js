import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';

import bank from "./data";
import styles from "./style";

const Bank = ({ props}) => {

  return (
    <Dropdown
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      containerStyle={styles.containerStyle}
      placeholderStyle={styles.placeholderStyle}
      search
      maxHeight={260}
      data={bank}
      valueField="name"
      labelField="name"
      placeholder="Select Bank"
      searchPlaceholder="Search..."
      onChange={e => {
        props.setFieldValue('bank', props.values.bank.name ? props.values.bank.name : e.name)
        props.setFieldTouched('bank', true, false);

      }}
      dropdownPosition="bottom"
      inputSearchStyle={styles.placeholderStyle}
      activeColor="green"
    />
  );
};

export default Bank;

