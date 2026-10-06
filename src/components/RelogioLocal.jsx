import { useEffect, useState } from "react";
import "./RelogioLocal.css";

const FUSO = Intl.DateTimeFormat().resolvedOptions().timeZone;

function RelogioLocal() {
  const [agora, setAgora] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setAgora(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hora = agora.toLocaleTimeString("en-US", {
    timeZone: FUSO,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="relogio">
      <time className="relogio__hora">{hora}</time>
    </div>
  );
}

export default RelogioLocal;