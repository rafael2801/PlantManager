import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import LoadAn from '../assets/load.json'

export default () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
            <LottieView
                source={LoadAn}
                autoPlay
                loop
                style={{backgroundColor:'transparent',width:200,height:200}}
            />
        </View>
    )
}