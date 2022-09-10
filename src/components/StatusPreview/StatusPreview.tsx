import React from "react";
import { Image, StyleSheet, View } from "react-native";

type Props = {
  viewed?: boolean;
};

export default function StatusPreview({ viewed = false }: Props) {
  return (
    viewed ? (
      <View>
        <Image source={require("../../../assets/user_default.jpg")} style={styles.viewedMask} />
        <Image source={require("../../../assets/user_default.jpg")} style={styles.imageViewed} />
      </View>
    ) : ( <Image source={require("../../../assets/user_default.jpg")} style={styles.image} /> )
  );
}

const styles = StyleSheet.create({
  image: {
    width: 54,
    height: 54,
    borderRadius: 32,
    borderWidth: 4,
    borderColor: "#1D2757",
  },
  imageViewed: {
    width: 54,
    height: 54,
    borderRadius: 32,
    position: 'absolute',
    opacity: 0.5,
  },
  viewedMask: {
    tintColor: 'gray',
    width: 54,
    height: 54,
    borderRadius: 32,
  }
});
