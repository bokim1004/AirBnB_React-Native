import React from "react";
import {SafeAreaView} from "react-native";
import HomeScreen from "./src/screens/Home";
import SearchResultsScreen from "./src/screens/SearchResults";
import Post from "./src/components/post";
import feed from "./assets/data/feed";

const post1 = feed[0];
const post2 = feed[2];

const App = () => {
  return (
    <>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post2} /> */}
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
};
export default App;
