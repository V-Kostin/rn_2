import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Item from './Item'
import { imgs } from './data'
import { SIZE, r } from './constants'

const s = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  containerButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 300,
  },
  button: {
    margin: 10,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  images: {
    marginTop: 10,
    width: '100%',
    height: SIZE,
  },
  animated: {
    backgroundColor: 'black',
    width: r * 2.5,
    height: r * 2.5,
    borderRadius: r * 2.5,
  },
});


function App() {
  const [images, setImages] = useState([imgs[0]])
  const img = images[images.length - 1];

  function pressMe(el) {
    if (el.id !== images.id) {
      setImages([img, el])
    }
  }

  return (
    <View style={s.container}>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        {
          images.map((el) => (
            <Image key={el.id} style={[{ ...StyleSheet.absoluteFillObject }, s.images]} source={el.picture} />
          ))
        }
        {
          images.map((el) => (
            <View key={el.id} style={[{ ...StyleSheet.absoluteFillObject }]}  >
              <Item el={el} s={s} />
            </View>

          ))
        }
        <View style={s.containerButtons}>
          {imgs.map((el, key) => (
            <TouchableOpacity style={[s.button, {
              backgroundColor: el.color
            }]} key={key} onPress={() => pressMe(el)} />
          ))}
        </View>
      </SafeAreaView>
    </View >
  );
};

export default App;
