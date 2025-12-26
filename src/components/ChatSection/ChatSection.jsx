import React, { useState } from "react";
import ChatRoom from "./ChatRoom";

function ChatSection() {
  const [roomId, setRoomId] = useState("Jesus");
  const [show, setShow] = useState(false);

  return (
    <div>
      <label htmlFor="chat-rooms">
        Select chat-room:
        <select
          name="chat-rooms"
          id="chat-rooms"
          onChange={(e) => setRoomId(e.target.value)}
        >
          <option value="Jesus">Jesus</option>
          <option value="sports">Sports</option>
          <option value="money">Money</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close Chat" : "Open Chat"}
      </button>
      {show && <hr />}
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}

export default ChatSection;
