import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ApiTest() {

    const [Data, setData] = useState([]);

    // fetch API
    const getAPIResponse = async () => {
        
        const url = 'https://cat-fact.herokuapp.com/facts';
        let response = await fetch(url);
        response = await response.json();
        setData(response);

    }


    useEffect(() => {
        getAPIResponse();
    }, [])


    //   console.log(Data[0])
    return (
        <View>
            {
                Data ?
                    <View style={style.container}>
                        <Text style={{ fontSize: 30, textDecorationLine: 'underline' }}>Facts About Cats</Text>
                        {
                            // redenering each index using map()
                            Data.map((item, index) => {
                                console.log(item);
                                return <Text style={style.textStyle}>{item?.text}</Text>
                            }
                            )
                            //map(f(item,index))
                        }
                    </View> : null
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        margin: 10,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
    }
})