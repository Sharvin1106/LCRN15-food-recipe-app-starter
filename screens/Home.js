import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
} from "react-native";

import { CategoryCard } from "../components";
import { COLORS, dummyData, FONTS, icons, images, SIZES } from "../constants";

const Home = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: COLORS.darkGreen, ...FONTS.h2 }}>
            Hello ByProgrammers,{" "}
          </Text>
          <Text style={{ marginTop: 3, color: COLORS.gray, ...FONTS.body3 }}>
            What you want to cook today?
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log("Profile")}>
          <Image
            source={images.profile}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Image
          source={icons.search}
          style={{ width: 20, height: 20, tintColor: COLORS.gray }}
        />
        <TextInput
          style={{ marginLeft: SIZES.radius, ...FONTS.body4 }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipes"
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderSearchBar()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              containerStyle={{ marginHorizontal: SIZES.padding }}
              categoryItem={item}
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          );
        }}
        ListFooterComponent={<View style={{ marginBottom: 100 }} />}
      />
    </SafeAreaView>
  );
};

export default Home;
