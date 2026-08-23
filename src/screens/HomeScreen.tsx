import { View, Text, ScrollView } from 'react-native'
import React, { FC } from 'react'
import { commonStyles } from '../styles/commonStyles'
import HomeHeader from '../components/home/HomeHeader'
import SendRecieveButton from '../components/home/SendRecieveButton'
import Options from '../components/home/Options'
import Misc from '../components/home/Misc'

const HomeScreen:FC = () => {
  return (
    <View style={commonStyles.baseContainer}>
      <HomeHeader />
      <ScrollView
      contentContainerStyle={{paddingBottom:100,padding:15}}
      showsVerticalScrollIndicator={false}
      >
        <SendRecieveButton />
        <Options />
        <Misc />
      </ScrollView>
    </View>
  )
}

export default HomeScreen