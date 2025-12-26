import React, { useEffect } from "react";
import createConnection from "./connection";

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return (
    <div>
      <h1>Chats in room {roomId}</h1>
    </div>
  );
}

export default ChatRoom;
