import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/components/navigation/navigationTheme";
import AppNavigator from "./app/components/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
