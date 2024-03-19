import { SIZES, COLORS } from '../themes/themes';
import { Image, Animated, StyleSheet, SafeAreaView, Button } from 'react-native';
import React, { useRef, useEffect } from 'react'
export const Logo = (props) => {

    return (
        <Image style={props.style} source={require('../assets/Logo.png')} />
    )
}
const Intro = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const yAnim = useRef(new Animated.Value(-500)).current;
    const handleLogoAnim = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(yAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start()
    }
    useEffect(() => {
        handleLogoAnim()
    }, [handleLogoAnim])
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: yAnim }] }}>
                <Logo style={styles.logo} />
            </Animated.View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.main
    },
    logo: {
        width: 20 * SIZES.xLarge,
        height: 20 * SIZES.xLarge,
        opacity: 0.75
    }
})
export default Intro