import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import Btn from '../components/Btn'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'
 

export default () => {
    const nav = useNavigation()

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>()


    function inFocus() {
        setIsFocused(true)
    }
    function inBlur() {
        setIsFocused(false)
        setIsFilled(!!name)
    }
    function inChange(t: string) {
        setIsFilled(!!t)
        setName(t)
    }


    return (
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container} >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}>
                    <View style={styles.content} >
                        <View style={styles.form} >
                            <View style={{ alignItems: 'center' }} >
                                <Text style={styles.emoji}  >
                                    😀
                    </Text>
                                <Text style={styles.title} >
                                    Como podemos{"\n"}
                        chamar voce?
                    </Text>
                            </View>
                            <TextInput
                                onBlur={inBlur}
                                onFocus={inFocus}
                                onChangeText={inChange}
                                placeholder='Digite um nome'
                                style={[
                                    styles.input, (isFocused || isFilled) && { borderColor: colors.green }]}
                            />
                            <View style={styles.footer}>
                                <Btn
                                    title='Confirmar'
                                    onPress={async() =>{ 
                                        if(!name) return Alert.alert("Med diz como chamar voce 😢 ")
                                        await AsyncStorage.setItem('@plantManager:user',name)
                                        nav.navigate('Confirmation',{
                                            title:'Prontinho!',
                                            subtitle:'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
                                            buttonTitle:'Começar',
                                            icon:'smile',
                                            nextScreen:'PlantSelect'
                                        })}}
                                />
                            </View>
                        </View>

                    </View>
                </TouchableWithoutFeedback>


            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: "space-around",

    },
    content: {
        flex: 1,
        width: "100%"
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: "100%",
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    footer: {
        marginTop: 40,
        width: "100%",
        paddingHorizontal: 20
    }
})