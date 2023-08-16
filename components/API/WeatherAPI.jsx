import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '@env';

export default function WeatherAPI() {

    const [data, setData] = useState();

    const locationPos = async () => {
       
        const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=thane`

        let response = await fetch(url);
        response = await response.json();
        
        location_Key = response[0].Key;
        setData(location_Key);
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