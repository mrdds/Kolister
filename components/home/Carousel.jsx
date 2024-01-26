import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from '../../constants';

const Carousel = () => {
    const slides = [
        "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg?w=900&t=st=1706158834~exp=1706159434~hmac=2766408d9a37968ef6f33b2d762e5c105f9b174ea59aef89898dbdac393f96b4", 
        "https://img.freepik.com/photos-gratuite/belle-photo-cuisine-salle-manger-maison-moderne_181624-2870.jpg?t=st=1706090577~exp=1706091177~hmac=65286bdef2195064f2ee90fd7377b6920991918a81b7677d95dbdee5884065df",
        "https://img.freepik.com/photos-gratuite/charmante-maison-jaune-fenetres-bois-jardin-gazonne-vert_181624-8074.jpg?t=st=1706090577~exp=1706091177~hmac=21beb88fa190eb45a2424dbdfc058448d8aeb18180b72fe32ec38eb156b0db86",
    ]
  return (
    <View style={styles.carouselContainer}>
        <SliderBox images={slides} 
        dotColor= {COLORS.primary}
        inactiveDotColor = {COLORS.secondary}
        ImageComponentStyle = {{borderRadius: 15, width: "92%", marginTop: 15}}
        autoplay
        circleLoop
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
    }
})