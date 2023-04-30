import {
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  
  const Cricketdetails=({route, navigation}:any)=> {
    const {match_subtitle, venue, status, home, away, date} = route.params;
  
    return (
      <View ><View style={{
        flexDirection:'column',
        padding: 20,
        margin: 15,
        backgroundColor: 'green',
        borderRadius: 25,
      }}>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10, fontWeight:'bold'}}>Match Subtitle</Text>
        </View>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10}}>{match_subtitle}</Text>
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
            <Text style={{color:'white',fontSize:10}}>{venue}</Text>
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
            <Text style={{color:'white',fontSize:10, fontWeight:'bold'}}>Status</Text>
        </View>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10}}>{status}</Text>
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
            <Text style={{color:'white',fontSize:10, fontWeight:'bold'}}>Home</Text>
        </View>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10}}>{home.name}</Text>
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
            <Text style={{color:'white',fontSize:10, fontWeight:'bold'}}>Away</Text>
        </View>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10}}>{away.name}</Text>
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
            <Text style={{color:'white',fontSize:10, fontWeight:'bold'}}>Date</Text>
        </View>
        <View style={{alignItems:'center'}} >
            <Text style={{color:'white',fontSize:10}}>{date}</Text>
        </View>
    </View>
    
      </View>

      
    );
  }
  export default Cricketdetails;