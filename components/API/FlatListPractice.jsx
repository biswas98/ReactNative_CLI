import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function FlatListPractice() {
	const response = [
		{
			key: 0,
			head: 'ArcGIS.com Web Site',
			message: 'Service is operation normally'
		},
		{
			key: 1,
			head: 'ArcGIS.com REST API',
			message: 'Service is operation normally'
		},
		{	
			key: 2,
			head: 'Hosted Feature Services',
			message: 'Service is operation normally'
		},
		{
			key: 3,
			head: 'Feature Publishing',
			message: 'Service is operation normally'
		},
		{
			key: 4,
			head: 'Hosted Tile Services',
			message: 'Service is operation normally'
		},
		{
			key: 5,
			head: 'Tile Publishing',
			message: 'Service is operation normally'
		},
		{
			key: 6,
			head: 'Esri Basemaps',
			message: 'Service is operation normally'
		}
	]
	// console.log(data);

  return (
	<View>
		<FlatList 
			keyExtractor={ data => data.key}
			data={response} 
			renderItem={ ({item}) => <Text>{item.head}</Text>}
		/>
	</View>
  )
}