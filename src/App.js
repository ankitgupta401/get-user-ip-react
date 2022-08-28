import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [ip, setIp] = useState("");
  useEffect(() => {
    getUserIp();
  }, []);

  const getUserIp = async () => {
    const ip = await axios.get("https://ipapi.co/json");
    console.log(ip.data);
    setIp(ip.data.ip);
  };

  return (
    <div>
      <h1>IP Address: {ip}</h1>
    </div>
  );
}

export default App;
