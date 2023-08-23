import { useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

const Home = () => {
  console.log(client);

  useEffect(() => {
    client.onopen = () => {
      console.log("Websocket Client Connected");
    }
    client.onmessage = (message) => {
      console.log(JSON.parse(message.data));
      
    }
  }, [])

  const handleClick = () => {
    client.send(JSON.stringify({
      type: "message",
      msg: "Hello app"
    }))
  }

  return (
    <div>
      <button onClick={handleClick}>Hello</button>
    </div>
  )
}

export default Home