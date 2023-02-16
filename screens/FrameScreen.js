import * as React from "react";
import { StyleSheet, View } from "react-native";

const FrameScreen = () => {
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
    top: 52,
    left: 52,
    width: 108,
    height: 53,
  },
  frameItem: {
    top: 182,
    left: 68,
    width: 112,
    height: 97,
  },
  frameInner: {
    top: 337,
    left: 89,
    width: 71,
    height: 44,
  },
  rectangleParent: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 503,
    overflow: "hidden",
  },
});

export default FrameScreen;
