import { View, Text, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '@env';

export default function WeatherAPI() {

    const [place, setPlace] = useState();
    const [locationCode, setLocationCode] = useState();
    const [temp, setTemp] = useState();

    const locationPos = async () => {


        const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=delhi`;

        let response = await fetch(url);
        response = await response.json();

        location_Key = response[0].Key;
        setLocationCode(location_Key);

        (async () => {

            const url = `http://dataservice.accuweather.com/currentconditions/v1/${location_Key}?apikey=${API_KEY}`;

            let response = await fetch(url);
            response = await response.json();

            let temperature = response[0].Temperature.Metric.Value;
            setTemp(temperature);
        })()
    }
    useEffect(() => {
        locationPos();
    }, [])

    return (
        <View>
            <TextInput
                style={{ borderWidth: 1, width: 200, }}
                placeholder='city'
                onChangeText={(text) => setPlace(text)}
            />
            <Text>{locationCode}</Text>
            <Text>{temp}</Text>
        </View>
    )
}