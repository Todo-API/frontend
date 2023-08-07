import { View, Text,SafeAreaView } from 'react-native'
import tw from 'twrnc';
import React from 'react'

const RemoveTodo = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={tw`text-black`}>RemoveTodo</Text>
      </View>
    </SafeAreaView>
  )
}

export default RemoveTodo