function createConnection(roomId) {
  return {
    connect() {
      console.log(`You are connected to ${roomId}`);
    },
    disconnect() {
      console.log(`You are disconnected to ${roomId}`);
    },
  };
}

export default createConnection;
