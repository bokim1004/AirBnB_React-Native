import React, {useState} from "react";
import {View, TextInput, FlatList, Text} from "react-native";
import styles from "./styles.js";
import {useNavigation} from "@react-navigation/native";

// import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

const DestinationSearchScreen = (props) => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={35} />
              <Text style={styles.locationText}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
