import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { CustomButton } from "../components";

import { COLORS, FONTS, images, SIZES } from "../constants";

const Login = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
        <ImageBackground
          source={images.loginBackground}
          style={{ flex: 1, justifyContent: "flex-end" }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: COLORS.white,
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetail = () => {
    return (
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            ...FONTS.body3,
          }}
        >
          Discover more than 1200 food recipes in your hands and cooking it
          easily
        </Text>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            buttonText={"Sign Up"}
            buttonContainerStyle={{ paddingVertical: 18, borderRadius: 20 }}
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace("Home")}
          />
          <CustomButton
            buttonText={"Login"}
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            colors={[]}
            onPress={() => navigation.replace("Home")}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      {renderDetail()}
    </View>
  );
};

export default Login;
