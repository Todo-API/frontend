import { View, Text,SafeAreaView } from 'react-native'
import tw from 'twrnc';
import React from 'react'

const AddTodo = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={tw`text-black`}>AddTodo</Text>
      </View>
    </SafeAreaView>
  )
}

export default AddTodo