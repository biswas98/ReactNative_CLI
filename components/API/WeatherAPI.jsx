import { View, Text, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '@env';

import styles from './style'

export default function WeatherAPI() {

    const [place, setPlace] = useState();
    const [locationCode, setLocationCode] = useState();
    const [temp, setTemp] = useState();

    const locationPos = async () => {


        try {
            const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${place}`;

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
            
            console.log("succeful");

        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        locationPos();
    }, [place])

    return (
        <View style={styles.apiContainer}>
            <TextInput
                style={[styles.inputBox, styles.commonMargin]}
                placeholder='city'
                onChangeText={(text) => setPlace(text)}
            />
            {/* <Text>{locationCode}</Text> */}
            <Text>The weather at {place}</Text>
            <Text>{temp}</Text>
        </View>
    )
}