import { SIZES, COLORS } from '../themes/themes'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Intro from './Intro'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisiable, setPasswordVisiable] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }, [])
    return (
        <View style={styles.container}>
            {
                isLoading ?
                    <Intro /> :
                    <View style={styles.container}>
                        <Image source={require('../assets/login-asset.png')} style={[styles.asset, { top: 0, transform: [{ translateY: -200 }] }]} />
                        <Image source={require('../assets/login-asset.png')} style={[styles.asset, { bottom: 0, transform: [{ translateY: 200 }] }]} />
                        <View style={{ width: "80%", marginBottom: 30 }}>
                            <Text style={styles.header}>Lets Sign You In</Text>
                            <Text style={styles.headerText}>Welcome Back ,
                                You have been missed
                            </Text>
                        </View>
                        <TextInput
                            value={email}
                            keyboardType='email-address'
                            inputMode='email'
                            autoComplete='email'
                            autoCapitalize='none'
                            style={[styles.inputField, { marginBottom: 20 }]}
                            label={<Text style={{ color: COLORS.text }}>Enter E-mail</Text>}
                            mode='outlined'
                            onChangeText={setEmail}
                            outlineColor={COLORS.coloredTextOne}
                            activeOutlineColor={COLORS.second}
                            textColor={COLORS.text}
                        />
                        <TextInput
                            value={password}
                            autoCapitalize='none'
                            inputMode='text'
                            style={styles.inputField}
                            label={<Text style={{ color: COLORS.text, opacity: 0 }}>Enter Password</Text>}
                            mode='outlined'
                            onChangeText={setPassword}
                            secureTextEntry={!passwordVisiable}
                            outlineColor={COLORS.coloredTextOne}
                            activeOutlineColor={COLORS.second}
                            textColor={COLORS.text}
                            right={<TextInput.Icon onPress={() => { setPasswordVisiable(!passwordVisiable) }} icon={() => passwordVisiable ? <FontAwesomeIcon icon="fa-solid fa-eye" color={COLORS.text} /> : <FontAwesomeIcon icon="fa-solid fa-eye-slash" color={COLORS.text} />}></TextInput.Icon>}
                        />
                        <View>
                            <Pressable style={{ marginTop: 10 }}>
                                <Text style={styles.textCreateLink}>Forgot your Password?</Text>
                            </Pressable>
                        </View>
                        <Button mode='elevated' buttonColor={COLORS.coloredTextTwo} textColor={COLORS.main} style={{ margin: 20, width: '80%' }} onPress={() => navigation.navigate('home')}>Sign In</Button>
                        <Text style={{ color: COLORS.text, fontSize: 35 }}>OR</Text>
                        <View style={styles.socials}>
                            <TouchableOpacity onPress={() => { console.log('facebook'); }}>
                                <Image source={require('../assets/facebook.png')} style={{ width: 3 * SIZES.xLarge, height: 3 * SIZES.xLarge }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log('google'); }}>
                                <Image source={require('../assets/google.png')} style={{ width: 3 * SIZES.xLarge, height: 3 * SIZES.xLarge }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: COLORS.text }}>
                                Don't Have Account ?{' '}
                            </Text>
                            <Pressable onPress={() => { navigation.navigate('signUp') }}>
                                <Text style={styles.textCreateLink}>Register Now</Text>
                            </Pressable>
                        </View>
                    </View>
            }
        </View>
    )
}
export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.main
    },
    header: {
        color: COLORS.text,
        fontWeight: 'bold',
        fontSize: 3 * SIZES.xLarge,
        marginTop: 2.5 * SIZES.xLarge
    },
    headerText: {
        color: COLORS.text,
        fontSize: 2.5 * SIZES.large
    },
    asset: {
        width: 20 * SIZES.xLarge,
        height: 20 * SIZES.xLarge,
        opacity: 0.45,
        position: 'absolute',
    },
    inputField: {
        width: '80%',
        backgroundColor: COLORS.main,
    },
    textCreateLink: {
        color: COLORS.coloredTextTwo,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    socials: {
        flexDirection: 'row',
        gap: SIZES.xLarge,
        margin: SIZES.xLarge
    }
})