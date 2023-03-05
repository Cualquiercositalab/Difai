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
  Platform,
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IconDownload from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

const extraIos = Platform.OS === "ios" ? 0 : -350;

const Voucher = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {

  //variables de ruta 
  const fromName = route.params?.fromName;
  const fromCedula = route.params?.fromCedula;
  const fromNumero = route.params?.fromNumero;
  const amount = route.params?.amount;
  const fecha = route.params?.fecha;
  
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
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={[stylesB.completo, stylesO.completo__flexGrow]}
          scrollEnabled
          extraScrollHeight={extraIos}
          enableOnAndroid={true}
          endFillColor="#000"
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
        >
          <View style={stylesM.boxArrow}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[stylesM.boxArrow_buttom, stylesL.JustifyAlign]}
              onPress={() => navigation.navigate("BalanceWallet")}
            >
              <Image
                style={[stylesM.boxArrow_buttom_image]}
                source={require("../../assets/img/leftArrow.webp")}
              />
            </TouchableOpacity>
          </View>
          <View style={[stylesM.marginTopSeventy, stylesL.Justify]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeTwenty,
                fontMedium(),
              ]}
            >
              Comprobante
            </Text>
          </View>
          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopFourtyFive,
              stylesM.radiusTopTwentyEight,
              stylesL.AlignItems,
            ]}
          >
            <Text
              style={[
                stylesM.textColorLightGray,
                stylesM.fontSizeSixteen,
                fontMedium(),
                stylesM.marginTopThirtyFive,
              ]}
            >
              Movimiento hecho en Genesys
            </Text>

            <Image
              style={[stylesM.Voucher_img, stylesM.marginTopTwelve]}
              source={require("../../assets/img/voucher.webp")}
            />

            <Text
              style={[
                stylesM.textColorLightGray,
                stylesM.fontSizeSixteen,
                fontMedium(),
                stylesM.marginTopSeven,
              ]}
            >
              Número de referencia:
            </Text>
            <Text
              style={[
                stylesM.textColorLightGray,
                stylesM.fontSizeSixteen,
                fontMedium(),
                stylesM.marginTopTwo,
              ]}
            >
              M9870001
            </Text>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                stylesM.buttonDownloadVoucher,
                stylesM.backgroundNavy,
                stylesM.radiusTwenty,
                stylesL.JustifyAlign,
                stylesL.flexRow,
                stylesM.marginTopEight,
              ]}
              // onPress={() => navigation.navigate("ConsultServices")}
            >
              <Text
                style={[
                  stylesM.textColorSnow,
                  stylesM.fontSizeFifteen,
                  fontMedium(),
                ]}
              >
                Descargar
              </Text>

              <View style={[stylesM.iconDownload]}>
                <IconDownload
                  name="arrow-down-circle-outline"
                  size={RFValue(18.5)}
                  color="white"
                />
              </View>
            </TouchableOpacity>

            <View
              style={[
                stylesM.widthTotal,
                stylesM.paddingHorizontalSixtySix,
                stylesM.marginTopTwentyFour,
              ]}
            >
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Para:
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                {fromName}
              </Text>

              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopThirteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Número de documento:
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                {fromCedula}
              </Text>

              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopThirteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Número de cuenta:
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                {fromNumero}
              </Text>

              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopThirteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Cantidad enviada:
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                ${amount}
              </Text>

              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopThirteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Fecha y hora de envío:
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                {fecha}
              </Text>
              <View style={stylesL.JustifyAlign}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.buttonFinishVoucher,
                    stylesM.backgroundNavy,
                    stylesM.marginTopThirtyEight,
                    stylesM.radiusTwenty,
                    stylesL.JustifyAlign,
                  ]}
                  onPress={() => navigation.navigate("BalanceWallet")}
                >
                  <Text
                    style={[
                      stylesM.textColorSnow,
                      stylesM.fontSizeFifteen,
                      fontMedium(),
                    ]}
                  >
                    Terminar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Voucher;