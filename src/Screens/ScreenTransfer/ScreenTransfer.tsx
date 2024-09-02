import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styleTransfer';
import TopNavbar from './Assets/TopNavbar';
import Notification from './Assets/Notification';
import Rectangle from './Assets/Rectangle';
import Card from './Assets/Card';

const ScreenTransfer = () => {
    const amount = 250.00;

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TopNavbar />
        <Text style={styles.text}>Confirmation</Text>
        <Notification />
      </View>
      <View style={styles.policytext}>
        <Text style={styles.sure}>Are you sure?</Text>
        <Text style={styles.policy}>
          We care about your privacy. please make sure that you want to transfer
          money.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./Assets/Profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.rec}>
          <Rectangle />
        </View>
        <View style={styles.div}>
          <Text style={styles.name}>Shashank Mehra</Text>
          <Text style={styles.number}>1******6103</Text>
          <TouchableOpacity>
            <Image
              source={require('./Assets/Transaction.png')}
              style={styles.transaction}
            />
          </TouchableOpacity>
          <View style={styles.contain}>
            <Text style={styles.amount}>${amount.toFixed(2)}</Text>
            <Text style={styles.currency}>USD</Text>
          </View>
          <View style={styles.card}>
          <Card/>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Money</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenTransfer;
