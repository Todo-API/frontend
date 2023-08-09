import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import axios from 'axios';

const FindTodo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.0.101:8080/api/v1/todos/');
      setSearchResults(response.data.data); // Handle the response data here
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(`http://192.168.24.12:8080/api/v1/todos/64ce5bdf7e4311c8fa03a773}`);
  //     setSearchResults(response.data.data);
  //   } catch (error) {
  //     console.error('Error searching data:', error);
  //   }
  // };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`p-4`}>
        <TextInput
          style={tw`border border-black p-3 mb-4 rounded text-black`}
          placeholder="Search todos by their title....."
          placeholderTextColor='black'
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 p-3 rounded`}
          // onPress={handleSearch}
        >
          <Text style={tw`text-white text-center font-bold`}>Search</Text>
        </TouchableOpacity>
        <ScrollView style={tw`mb-24`}>
            <View style={tw`bg-white rounded-lg p-4 my-4 shadow`}>
              <Text style={tw`text-black text-lg font-bold`}>{searchResults.title}</Text>
              <Text style={tw`text-gray-600 mb-2`}>{searchResults.description}</Text>
            </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FindTodo;
