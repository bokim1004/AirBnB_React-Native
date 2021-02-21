import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./styles.js";

const Post = (props) => {
  const post = props.post;
  console.log(props);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedrooms}>
        {post.bed}bed {post.bedroom}bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.price}</Text>
        /night
      </Text>
      <Text styles={styles.totalPrice}>${post.totalPrice} Total</Text>
    </View>
  );
};
export default Post;
