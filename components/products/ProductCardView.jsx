import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = ({item}) => {
    const navigation = useNavigation();
  return (
      <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={{uri: "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg?w=900&t=st=1706158834~exp=1706159434~hmac=2766408d9a37968ef6f33b2d762e5c105f9b174ea59aef89898dbdac393f96b4"}}
                style={styles.image}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={styles.supplier} numberOfLines={1}>BANANANA</Text>
                <Text style={styles.price}>14 123 FCFA</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
      </TouchableOpacity>  
  )
}

export default ProductCardView

