import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "../appTheme/styles/styles";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const MobileOperators = ({ navigation, route }: { navigation: any; route: any }) => {
  //fonts
  const [fontsLoadedBold] = useFonts({
    RobotoBold: require("../appTheme/fonts/Roboto-Bold.ttf"),
  });

  const [fontsLoadedMedium] = useFonts({
    RobotoMedium: require("../appTheme/fonts/Roboto-Medium.ttf"),
  });

  const [fontsLoadedLight] = useFonts({
    RobotoLight: require("../appTheme/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoadedBold || !fontsLoadedMedium || !fontsLoadedLight) {
    return null;
  }

  const fontBold = () => ({ fontFamily: "RobotoBold" });
  const fontMedium = () => ({ fontFamily: "RobotoMedium" });
  const fontLight = () => ({ fontFamily: "RobotoLight" });

  return (
    <LinearGradient
      style={stylesB.linear}
      colors={["#3A0CA3", "#0f9172"]}
      start={{ x: 0, y: 0.01 }}
      end={{ x: 0, y: 0.7 }}
    >
      <SafeAreaView style={stylesB.body}>
        <BarStatus />
        <View style={stylesB.completo}>
          <View style={stylesM.boxArrow}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[stylesM.boxArrow_buttom, stylesL.JustifyAlign]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={[stylesM.boxArrow_buttom_image]}
                source={require("../../assets/img/leftArrow.webp")}
              />
            </TouchableOpacity>
          </View>
          <View style={[stylesM.boxTitle, stylesL.Justify]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeSixteen,
                fontMedium(),
              ]}
            >
              Operadores Móviles
            </Text>
          </View>
          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopTwenty,
              stylesM.radiusTopEighteen,
              stylesL.FlexOne,
            ]}
          >
            <View style={[stylesM.widthTotal, stylesL.Justify]}>
              <View
                style={[
                  stylesM.paddingHorizontalTwentyOne,
                  stylesM.marginTopTwentyFour,
                  stylesM.marginBottomNineteen,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColorDarkPurpleOpc,
                    stylesM.fontSizeSixteen,
                    fontLight(),
                  ]}
                >
                  Selecciona el operador con el que desea comprar la recarga
                  para tu celular.
                </Text>
              </View>

              <ScrollView
                contentContainerStyle={[
                  { paddingBottom: 50 },
                  stylesM.paddingHorizontalTwentyOne,
                ]}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                endFillColor="#000"
                overScrollMode="never"
              >
                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.marginTopTwentyFive,
                    stylesM.paddingHorizontalTwentyFour,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() =>
                        navigation.navigate("OperatorsPlans", {
                          operators: "claro",
                        })
                      }
                    >
                      <Image
                        style={[stylesM.buttonOperators_img]}
                        source={require("../../assets/img/logoClaro.webp")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() =>
                        navigation.navigate("OperatorsPlans", {
                          operators: "tigo",
                        })
                      }
                    >
                      <Image
                        style={[stylesM.buttonOperators_img]}
                        source={require("../../assets/img/logoTigo.webp")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() =>
                        navigation.navigate("OperatorsPlans", {
                          operators: "movistar",
                        })
                      }
                    >
                      <Image
                        style={[stylesM.buttonOperators_img]}
                        source={require("../../assets/img/logoMovistar.webp")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.marginTopSixty,
                    stylesM.paddingHorizontalTwentyFour,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() =>
                        navigation.navigate("OperatorsPlans", {
                          operators: "wom",
                        })
                      }
                    >
                      <Image
                        style={[stylesM.buttonOperators_img]}
                        source={require("../../assets/img/logoWom.webp")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() =>
                        navigation.navigate("OperatorsPlans", {
                          operators: "virgin",
                        })
                      }
                    >
                      <Image
                        style={[stylesM.buttonOperators_img]}
                        source={require("../../assets/img/logoVirgin.webp")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={[stylesM.buttonOperators_img]}></View>
                </View>

                <ScrollView
                  contentContainerStyle={[stylesM.marginTopThirtyEight]}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  endFillColor="#000"
                  overScrollMode="never"
                >
                  <LinearGradient
                    style={[
                      stylesM.radiusTwenty,
                      stylesM.buttonAdvertisingOperators,
                      stylesM.paddingHorizontalTwentyFour,
                      stylesM.paddingVerticalTwentyOne,
                      stylesL.flexRow,
                    ]}
                    colors={["#1FBD8E", "#7962F5"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <View
                      style={[
                        stylesM.widthPercentageFourty,
                        stylesL.JustifyAlign,
                      ]}
                    >
                      <Image
                        style={[
                          stylesM.buttonAdvertisingOperators_img,
                          stylesM.radiusTwentyEight,
                        ]}
                        source={require("../../assets/img/acueducto.webp")}
                      />
                    </View>
                    <View
                      style={[
                        stylesM.widthPercentageSixty,
                        stylesM.paddingLeftThirty,
                        stylesL.Justify,
                      ]}
                    >
                      <Text
                        numberOfLines={4}
                        style={[
                          stylesM.textColorWhite,
                          stylesM.fontSizeSixteen,
                          fontMedium(),
                        ]}
                      >
                        Compra un novedoso paralante Inalambrico
                      </Text>
                    </View>
                  </LinearGradient>

                  <LinearGradient
                    style={[
                      stylesB.linear,
                      stylesM.radiusTwenty,
                      stylesM.buttonAdvertisingOperators,
                      stylesM.paddingHorizontalTwentyFour,
                      stylesM.paddingVerticalTwentyOne,
                      stylesL.flexRow,
                    ]}
                    colors={["#1FBD8E", "#7962F5"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <View
                      style={[
                        stylesM.widthPercentageFourty,
                        stylesL.JustifyAlign,
                      ]}
                    >
                      <Image
                        style={[
                          stylesM.buttonAdvertisingOperators_img,
                          stylesM.radiusTwentyEight,
                        ]}
                        source={require("../../assets/img/acueducto.webp")}
                      />
                    </View>
                    <View
                      style={[
                        stylesM.widthPercentageSixty,
                        stylesM.paddingLeftThirty,
                        stylesL.Justify,
                      ]}
                    >
                      <Text
                        numberOfLines={4}
                        style={[
                          stylesM.textColorWhite,
                          stylesM.fontSizeSixteen,
                          fontMedium(),
                        ]}
                      >
                        Compra un novedoso paralante Inalambrico
                      </Text>
                    </View>
                  </LinearGradient>
                </ScrollView>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MobileOperators;
