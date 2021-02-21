import "react-native-gesture-handler";
import React from "react";
import {SafeAreaView} from "react-native";
import HomeScreen from "./src/screens/Home";
import Router from "./src/navigation/Router";

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};
export default App;
