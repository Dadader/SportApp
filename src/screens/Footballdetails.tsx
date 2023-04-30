import {
    View,
    Text,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  
 const Footballdetails=({route, navigation}:any) =>{
    const {fixture, league, teams} = route.params;
  
    return (
      <View>
        <View style={{
        flexDirection:'column',
        padding: 20,
        margin: 15,
        backgroundColor: 'green',
        borderRadius: 25,
      }}>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10, fontWeight:'bold'}}>League Name</Text>
        </View>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10}}>{league.name}</Text>
        </View>
    </View>

    <View style={{
        flexDirection:'column',
        padding: 20,
        margin: 15,
        backgroundColor: 'green',
        borderRadius: 25,
      }}>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10, fontWeight:'bold'}}>League Seson</Text>
        </View>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10}}>{league.season}</Text>
        </View>
    </View>

    <View style={{
        flexDirection:'column',
        padding: 20,
        margin: 15,
        backgroundColor: 'green',
        borderRadius: 25,
      }}>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10, fontWeight:'bold'}}>Venue</Text>
        </View>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10}}>{fixture.venue.name}</Text>
        </View>
    </View>

    <View style={{
        flexDirection:'column',
        padding: 20,
        margin: 15,
        backgroundColor: 'green',
        borderRadius: 25,
      }}>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10, fontWeight:'bold'}}>Winner</Text>
        </View>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10}}>{teams.home.winner == true ? (
            teams.home.name
          ) : teams.away.winner == true ? (
            teams.away.name
          ) : (
            <Text>Tie</Text>
          )}</Text>
        </View>
    </View>
      </View>
    );
  }
  export default Footballdetails;