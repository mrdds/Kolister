import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { TouchableOpacity } from 'react-native'
import { Welcome } from '../components'
import Carousel from '../components/home/Carousel'
import Headings from '../components/home/Headings'
import ProductRow from '../components/products/ProductRow'



const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
            <Ionicons name='location-outline' size={24}/>

            <Text style={styles.location}>Shanghai china</Text>

            <View style={{alignItems: "flex-end"}}>
                <View style={styles.cartCount}>
                  <Text style={styles.cartNum}>8</Text>
                </View>
                <TouchableOpacity>
                  <Fontisto name='shopping-bag' size={24} />
                </TouchableOpacity>
            </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

