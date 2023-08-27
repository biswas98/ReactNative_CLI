import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function FlatListPractice() {
	const response = [
		{
		  key: 0,
		  head: 'ArcGIS.com Web Site',
		  events: [],
		},
		{
		  key: 1,
		  head: 'ArcGIS.com REST API',
		  events: [],
		},
		{
		  key: 2,
		  head: 'Hosted Feature Services',
		  events: [{type: 'Performance issue'}],
		},
		{
		  key: 3,
		  head: 'Feature Publishing',
		  events: [{type: 'Service disruption'}],
		},
		{
		  key: 4,
		  head: 'Hosted Tile Services',
		  events: [{type: 'Informational Message'}],
		},
		{
		  key: 5,
		  head: 'Tile Publishing',
		  events: [{type: 'Performance issue'}],
		},
		{
		  key: 6,
		  head: 'Esri Basemaps',
		  events: [{type: 'Service is operation normally'}],
		},
		{
		  key: 7,
		  head: 'Geocoding',
		  events: [{type: 'Service is operation normally'}],
		},
		{
		  key: 8,
		  head: 'Directions and Routing',
		  events: [{type: 'Service is operation normally'}],
		},
		{
		  key: 9,
		  head: 'GeoEnrichment and Demographics',
		  events: [{type: 'Service is operation normally'}],
		},
		{
		  key: 10,
		  head: 'Spatial Analysis',
		  events: [{type: 'Service is operation normally'}],
		},
	  ];
	// console.log(data);

  return (
	<View>
		<FlatList 
			keyExtractor={ data => data.key}
			data={response} 
			renderItem={ ({item}) => (
				<View>
					<View>
						<Text>{item.head}</Text>
						{item.events.map((item)=>{
							<Text>{item?.type}</Text>
						})}
					</View>
					<View>    
						<Text>😄</Text>
					</View>
				</View>
 			 )}
		/>
	</View>
  )
}