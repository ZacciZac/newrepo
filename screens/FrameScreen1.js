import * as React from "react";
import { StyleSheet, View } from "react-native";

const FrameScreen1 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameBg]} />
      <View style={[styles.frameItem, styles.frameBg]} />
      <View style={[styles.frameInner, styles.frameBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameBg: {
    backgroundColor: "#d9d9d9",
    position: "absolute",
  },
  frameChild: {
    top: 69,
    left: 73,
    width: 263,
    height: 119,
  },
  frameItem: {
    top: 286,
    left: 43,
    width: 267,
    height: 195,
  },
  frameInner: {
    top: 558,
    left: 156,
    width: 169,
    height: 129,
  },
  rectangleParent: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 731,
    overflow: "hidden",
  },
});

export default FrameScreen1;
