import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { API_KEY } from '@env';

export default function WeatherAPI() {

    const locationPos = async () => {
       
        const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=thane`

        let response = await fetch(url);
        response = await response.json();
        
        console.log(response[0].Key)
    }

    useEffect(() => {
        locationPos();
    }, [])

    return (
        <View>
            <Text></Text>
        </View>
    )
}