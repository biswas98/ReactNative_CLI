import { View, Text } from 'react-native'
import React from 'react'

export default function FlatList() {
	const data = {
		0:{
			head: 'ArcGIS.com Web Site',
			message: 'Service is operation normally'
		},
		1:{
			head: 'ArcGIS.com REST API',
			message: 'Service is operation normally'
		},
		2:{
			head: 'Hosted Feature Services',
			message: 'Service is operation normally'
		},
		3:{
			head: 'Feature Publishing',
			message: 'Service is operation normally'
		},
		4:{
			head: 'Hosted Tile Services',
			message: 'Service is operation normally'
		},
		5:{
			head: 'Tile Publishing',
			message: 'Service is operation normally'
		},
		6:{
			head: 'Esri Basemaps',
			message: 'Service is operation normally'
		}
	}

  return (
	<View>
	  <FlatList>

	  </FlatList>
	</View>
  )
}