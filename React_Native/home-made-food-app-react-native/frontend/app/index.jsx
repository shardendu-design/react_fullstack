// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }


import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{
      backgroundColor: "skyblue",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

    }} 
    >
      <Text>
        Main Page

      </Text>
      <Link href={"/menu"}>
      Go to Menu
      </Link>
    </View>
  );
};


export default Index;