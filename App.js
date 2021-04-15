import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Pixel } from "./src/Pixel"


export default function App() {
  const [select, setSelect] = useState(null)
  const [destiny, setDestiny] = useState(null)
  const ref = useRef(null);

  //-23.45977016739272, -46.417903319058960
  // para saber as coordenadas clica com o botao direito do mouse no lugar
  //  que deseja no google mapas,  primeiros valores posivelmente e a coordenadas
  // -23.46690408730418, -46.43008151891749
  useEffect(() => {

    async function location() {
      await navigator.geolocation.getCurrentPosition(
        (({ coords: { latitude, longitude } }) => {
          setSelect({
            latitude,
            longitude,
            latitudeDelta: 0.0092,
            longitudeDelta: 0.0421,

          })


        }),
        ((error) => {
          alert(error.code)
        }),
        {
          enableHighAccuracy: true,
          timeout: 2000,
          maximumAge: 1000,
        }
      )
    }
    location();
  }, [])

  function change(lat, lon) {
    setDestiny({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0092,
      longitudeDelta: 0.0421,

    })
  }
  function changeSchooll(lat, lon) {
    setDestiny({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0092,
      longitudeDelta: 0.0421,

    })

  }


  return (
    <SafeAreaView style={styles.container} >


      <MapView

        ref={ref}
        style={styles.map}
        region={select}
        showsUserLocation
        minZoomLevel={13
        }
        loadingEnabled={true}
      >

        {destiny &&
          //e necessário referenciar o mapa quando onReady estiver pronto,porque caso
          // não fizer não abre totalmente o mapa,referencia vai ser so o ponto de partida
          //dessa forma nossa referncia e o map em sisrc/Pixel
          <MapViewDirections
            strokeColor='#000'
            origin={select}
            destination={destiny}
            apikey="AIzaSyAv_RE1XRre7PrxXKN_KkQ6qNrghp3J1Z0"
            strokeWidth={5}
            onReady={result => {

              ref.current.fitToCoordinates(result.coordinates), {
                edgePadding: {
                  rigth: Pixel(50),
                  left: Pixel(50),
                  top: Pixel(50),
                  button: Pixel(50),
                }
              }

            }}

          />

        }

      </MapView>

      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >

        <View style={styles.buttonView} >

          <TouchableOpacity style={styles.button}
            onPress={() => change(-23.45977016739272, -46.41790331905896)}

          >

            <Text> Hamburguer </Text>

          </TouchableOpacity>

        </View >

        <View style={styles.buttonView} >
          <TouchableOpacity style={styles.button} >

            <Text> Farmacia </Text>

          </TouchableOpacity>

        </View>

        <View style={styles.buttonView} >
          <TouchableOpacity style={styles.button} >

            <Text> Estacionamento </Text>

          </TouchableOpacity>

        </View>

        <View style={styles.buttonView}>

          <TouchableOpacity style={styles.button} >

            <Text> Supermecado </Text>

          </TouchableOpacity>

        </View>

        <View style={styles.buttonView} >

          <TouchableOpacity
            style={styles.button}
            onPress={() => changeSchooll(-23.46690408730418, -46.43008151891749)}
          >

            <Text> Escola </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    position: 'absolute',
    top: 120,
  },

  map: {
    width: '100%',
    height: 450,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  button: {
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: "#DEB887",
    height: 50,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  }



});

