import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '@env';

export default function WeatherAPI() {

    const [locationCode, setLocationCode] = useState();
    const [temp, setTemp] = useState();

    const locationPos = async () => {

        const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=thane`;

        let response = await fetch(url);
        response = await response.json();

        location_Key = response[0].Key;
        setLocationCode(location_Key);

        const sm = async () => {

            const url = `http://dataservice.accuweather.com/currentconditions/v1/${location_Key}?apikey=${API_KEY}`;

            let response = await fetch(url);
            response = await response.json();

            let temperature = response[0].Temperature.Metric.Value;
            setTemp(temperature);
        }

        sm();
    }

    useEffect(() => {
        locationPos();
        // temperature();
    }, [])

    return (
        <View>
            <Text>{locationCode}</Text>
            <Text>{temp}</Text>
        </View>
    )
}