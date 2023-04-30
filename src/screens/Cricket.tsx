import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import Game from '../../data/cricket.json';
  
  const Cricket=({navigation}:any) => {
      // useEffect(() => {
      //   fetch(`https://cricket-live-data.p.rapidapi.com/fixtures`, {
      //     headers: {
      //       'X-RapidAPI-Key': 'a5d882a7eemshef619057279aa28p16dde5jsncfd93b5de941',
      //       'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
      //     },
      //   })
      //     .then(response => {
      //       return response.json();
      //     })
      //     .then(c => setData(c.results))
      //     .catch(err => {
      //       console.log(err);
      //     })
      //     .finally(() => {
      //       setIsloaded(true);
      //     });
      // }, []);
    const [isLoaded, setIsloaded] = useState(true);
    const [data, setData] = useState(Game.results);
  
    const RenderList = ({index, item}:any) => (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: index % 2 === 0 ? 'blue' : 'green',
          padding: 15,
          margin: 15,
        }}
        onPress={() => {
          navigation.navigate('Cricket Details', {
            match_subtitle: item.match_subtitle,
            venue: item.venue,
            status: item.status,
            home: item.home,
            away: item.away,
            date: item.date,
          });
        }}>
        <Text key={index} style={{fontSize: 12, color: 'white'}}>
          {item.match_title}
        </Text>
      </TouchableOpacity>
    );
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'red'}}>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'white', padding: 5,
          marginTop: 23}}>
            Cricket Game Fixture
          </Text>
        </View>
        {isLoaded ? (
          <FlatList
            data={data}
            renderItem={RenderList}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View>
            <ActivityIndicator color={'red'} />
          </View>
        )}
      </View>
    );
  };
  export default Cricket;