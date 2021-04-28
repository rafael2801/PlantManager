import React from 'react'
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


interface btnProps extends TouchableOpacityProps{
    title:string
}

export default ({title,...rest}:btnProps) => {
    return (
        <TouchableOpacity style={styles.btn} >
            <Text 
            style={styles.text}
            {...rest}
             >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
})