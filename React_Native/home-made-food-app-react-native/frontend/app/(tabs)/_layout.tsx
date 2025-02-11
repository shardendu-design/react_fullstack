
import { Tabs } from "expo-router"

const TabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home" }}/>
        <Tabs.Screen name="about" options={{ title: "About" }}/>
        <Tabs.Screen name="menu" options={{ title: "Menu" }}/>
    </Tabs>
  );
};


export default TabLayout;