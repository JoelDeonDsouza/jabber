import React from "react";
import { FlatList, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
import chatRoomData from "../data/Chats";
import bg from "../assets/images/bg.png";

const ChatRoomScreen = () => {
  const route = useRoute();
  //   console.log(route.params);

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={bg}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
