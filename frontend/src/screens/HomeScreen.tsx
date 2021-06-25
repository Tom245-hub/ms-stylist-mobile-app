import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native";

import { getStylist } from "../data/actions/stylistActions";
import { RootState } from "../data/reducers/rootReducers";

import Input from "../components/FormElements/Input";
import Image from "../components/UIElements/Image";
import Button from "../components/FormElements/Button";

import { StyledContainer } from "./HomeScreen.css";

interface HomeScreenProps {
  navigation: {
    navigate: (arg1: string) => void;
  };
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [login, onChangeLogin] = React.useState<string>("");
  const [password, onChangePassword] = React.useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStylist("609f71a91683f73450306a6b"));
  }, [getStylist]);

  const stylist = useSelector((state: RootState) => state.stylist.data);
  const name =
    Object.keys(stylist).length >= 1 ? stylist.personalData.firstName : "Kasia";

  return (
    <StyledContainer>
      <Image source={require("../../assets/logotyp_symbol_white.png")} />
      <Text>Zaloguj się do swojego konta: </Text>
      <Input onChangeText={onChangeLogin} value={login} placeholder='login' />
      <Input
        onChangeText={onChangePassword}
        value={password}
        placeholder='hasło'
        secureTextEntry={true}
      />

      <Button onPress={() => navigation.navigate("Dashboard")} title='Zaloguj' />

      <Text>Name:{name}</Text>
    </StyledContainer>
  );
};

export default HomeScreen;
