import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import styles from './productDetails.style'
import { COLORS, SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native'

const ProductDetails = ({navigation}) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
   if (count > 1){
    setCount(count - 1)
   }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image 
      source={{uri: "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg?w=900&t=st=1706158834~exp=1706159434~hmac=2766408d9a37968ef6f33b2d762e5c105f9b174ea59aef89898dbdac393f96b4"}}
      style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>15 500 FCFA</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1,2,3,4,5].map((index) => (
                <Ionicons 
                key={index}
                name='star'
                size={24}
                color="gold"
                 />
              ))}
              <Text style={styles.ratingText}>  (4.9)</Text>
            </View>

            <View style={styles.rating}>
             <TouchableOpacity onPress={()=> increment()}>
                <SimpleLineIcons 
                name='plus' size={20}
                />
             </TouchableOpacity>
              <Text style={styles.ratingText}>{count}</Text>

              <TouchableOpacity onPress={()=> decrement()}>
                <SimpleLineIcons 
                name='minus' size={20}
                />
             </TouchableOpacity>
            </View>

        </View>
        <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has 
            survived not only five centuries, but also the leap
             into electronic typesetting, remaining essentially 
             unchanged. It was popularised in the 1960s with the 
             release of Letraset sheets containing Lorem Ipsum 
             passages, and more recently with desktop publishing 
             software like Aldus PageMaker including versions of
            Lorem Ipsum.
            </Text>
        </View>
        <View style={{marginBottom: SIZES.small}}>
            <View style={styles.location}>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons name='location-outline' size={20}/>
                  <Text>  Cocody, Riviera 2</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                  <Text>  Free Delivery  </Text>
                </View>
            </View>
        </View>

        <View style={styles.cardRow}>
            <TouchableOpacity onPress={()=>{}} style={styles.cardBtn}>
                <Text style={styles.cardTitle}>BUY NOW</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}} style={styles.addCard}>
                <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite} />
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default ProductDetails

