import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import { useDispatch } from 'react-redux';
import { setQRData } from './redux/qrSlice';
import { useNavigation } from '@react-navigation/native';
import { ScreenTransactionScanner } from '../ScreenTransfer/utils/types';
import {styles} from './ScreenScannerstyle'

const QRScanner = () => {
    const { hasPermission, requestPermission } = useCameraPermission();
    const [scannedCode, setScannedCode] = useState(null); 
    const device = useCameraDevice('back');
    const dispatch = useDispatch(); 
    const navigation = useNavigation<ScreenTransactionScanner>();

    useEffect(() => {
        const requestCameraPermission = async () => {
            const permission = await requestPermission();
            if (hasPermission === null) {
           //     const permission = await requestPermission();
             //   console.log('Camera permission status:', permission); 
                if (permission !== true) {
                    console.warn('Camera permission not granted');
                }
            }
        };
        requestCameraPermission();
    }, [hasPermission, requestPermission]);

    if (device == null) {
        return (
            <View style={styles.container}>
                <Text>Device not found</Text>
            </View>
        );
    }

    const handleBarcodeScanned = ({ data }: { data: any }) => {
        try {
            const parsedData: any = JSON.parse(data);
            dispatch(setQRData(parsedData));
            setScannedCode(parsedData.descriptionQR);
        } catch (error) {
            console.error('Failed to parse QR code data:', error);
        }
    };

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13', 'upc-a'],
        onCodeScanned: (codes) => {
          //  console.log(`Scanned ${codes.length} codes!`); 
          //  console.log(`Scanned code: ${codes[0].value}`); 
            handleBarcodeScanned({ data: codes[0].value });
            navigation.navigate('AddTransaction');
        },
    });

    if (hasPermission === false) {
        return (
            <View style={styles.containertext}>
                <Text>Camera permission is required to use this feature.</Text>
            </View>
        );
    }

    return (
        <Camera
            style={styles.qr}
            device={device}
            isActive={true}
            codeScanner={codeScanner}
        />
    );
};

// const styles = StyleSheet.create({
//     container: {
//        flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
// });

export default QRScanner;