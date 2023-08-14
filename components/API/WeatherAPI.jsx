import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {API_NAME} from '@env'

export default function WeatherAPI() {

    // const locationPos = async () => {
    //     const url = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=0OiFaUcTq079GAz9e4wqhIsvQtQdu9hV&q=thane'

    //     let response = await fetch(url);
    //     response = await response.json();

        
       
        
    // }

    // useEffect(() => {
    //     locationPos();
    // },[])
    console.log(API_NAME);
    return (
        <View>
            <Text>{API_NAME}</Text>
        </View>
    )
}