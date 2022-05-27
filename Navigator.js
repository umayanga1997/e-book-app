import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./screens/Auth/SignIn";
import SignUp from "./screens/Auth/SignUp";
import BookDetails from "./screens/BookDetails";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";

function Navigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcom"
      >
        <Stack.Screen
          //   options={{
          //     headerShown: false,
          //   }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          //   options={{
          //     headerShown: false,
          //   }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Book Details",
          }}
          name="BookDetails"
          component={BookDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
