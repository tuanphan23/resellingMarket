import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Tuan Phan"
          subTitle="tuanphan.ph235@gmail.com"
          image={require("../assets/tuan.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
