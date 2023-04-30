import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Image,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import Game from '../../data/football.json';
  
  const Football=({navigation}:any) =>{
    const [isLoaded, setIsloaded] = useState(true);
    const [data, setData] = useState(Game.response);
    // useEffect(() => {
    //   fetch(`https://cricket-live-data.p.rapidapi.com/fixtures`, {
    //     headers: {
    //       'X-RapidAPI-Key': '6130a43ad0msh7feb49b4f970724p129b08jsn93fcc4f54d74',
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
  
  
    const RenderList = ({index, item}:any) => (
      <TouchableOpacity
        style={{
          padding: 15,
          margin: 15,
          backgroundColor: index % 2 === 0 ? 'blue' : 'green',
          justifyContent: 'space-around',
        }}
        onPress={() => {
          navigation.navigate('Football Details', {
            fixture: item.fixture,
            league: item.league,
            teams: item.teams,
          });
        }}>
        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
          <View>
            <Image
              source={{uri: item.teams.home.logo}}
              style={{width: 60, height: 60}}
            />
            <Text style={{fontSize: 18, color: 'white'}}>
              {item.teams.home.name.length > 10
                ? item.teams.home.name.substring(0, 10) + '...'
                : item.teams.home.name}
            </Text>
          </View>
          <Text
            style={{fontSize: 20, color: 'white', textAlignVertical: 'center'}}>
            Vs
          </Text>
          <View>
            <Image
              source={{uri: item.teams.away.logo}}
              style={{width: 60, height: 60}}
            />
            <Text style={{fontSize: 18, color: 'white'}}>
              {item.teams.away.name.length > 10
                ? item.teams.away.name.substring(0, 10) + '...'
                : item.teams.away.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={{flex: 1}}>
       <View style={{backgroundColor: 'red'}}>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'white', padding: 5,
          marginTop: 23}}>
            Football Game Fixture
          </Text>
        </View>
        {isLoaded ? (
          <FlatList
            data={data}
            renderItem={RenderList}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View >
            <ActivityIndicator color={'red'}  />
          </View>
        )}
      </View>
    );
  }
  export default Football;