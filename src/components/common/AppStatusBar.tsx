import React from "react";
import { StatusBar, useColorScheme, View, Platform } from "react-native";
// import { Colors } from "../theme/colors";

const AppStatusBar = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <StatusBar
      // Android के लिए background color
      backgroundColor={isDark ? "#4f5363" : "#fff"}
      // Icons का कलर (Time, Battery, Wifi)
      barStyle={isDark ? "light-content" : "dark-content"}
      // iOS के लिए ज़रूरी नहीं, लेकिन Android में इसे false रखें
      translucent={false}
    />
  );
};

export default AppStatusBar;