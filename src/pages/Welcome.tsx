import React from 'react'
import {
    Image, StyleSheet, Text,
    TouchableOpacity, SafeAreaView, Dimensions
} from 'react-native'
import img from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

export default () => {

    const nav = useNavigation()

    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.title} >
                Gerencie{'\n'}
                suas plantas{'\n'}de
                 forma facil!</Text>
            <Image source={img}
                style={styles.image} />
            <Text style={styles.subtitle} >
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar sempre que precisar.
            </Text>
            <TouchableOpacity
                onPress={() => nav.navigate('UserIdentity')}
                style={styles.btn}>
                <Text style={styles.btntext} >
                    <Entypo name='chevron-right' size={34} />
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 34,
        fontFamily: fonts.heading
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    btn: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        width: 56,
        height: 56
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    btntext: {
        color: colors.white,
        fontSize: 24
    }
})