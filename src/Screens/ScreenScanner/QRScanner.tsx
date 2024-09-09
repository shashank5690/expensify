import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';

const QRScanner = () => {
    const { hasPermission, requestPermission } = useCameraPermission();
    const [scannedCode, setScannedCode] = useState(null); 
    const device = useCameraDevice('back');

    useEffect(() => {
        const requestCameraPermission = async () => {
            const permission = await requestPermission();
            console.log('Camera permission status:', permission); 
            if (permission !== true) {
                console.warn('Camera permission not granted');
            }
        };
        requestCameraPermission();
    }, [requestPermission]);

    if (device == null) {
        return (
            <View style={styles.container}>
                <Text>Device not found</Text>
            </View>
        );
    }

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13','upc-a'],
        onCodeScanned: (codes:any) => {
            console.log(`Scanned ${codes.length} codes!`); 
            for (const code of codes) {
                console.log(`Scanned code: ${code.value}, Type: ${code.type}`); 
            }
        },
    });

    return (
        <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            codeScanner={codeScanner}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default QRScanner;