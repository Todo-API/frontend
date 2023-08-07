import { View, Text ,SafeAreaView} from 'react-native'
import tw from 'twrnc';
import React from 'react'

const EditTodo = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={tw`text-black`}>EditTodo</Text>
      </View>
    </SafeAreaView>
  )
}

export default EditTodo