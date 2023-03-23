import { useEffect, useState } from "react";

export const Fetching = (url) => {
  const [resultado, setResultado] = useState({ cargando: true, data: null });

  useEffect(() => {
    getDatos(url);
  }, [url]);

  const getDatos = async () => {
    setResultado({
      cargando: true,
      data: null,
    });

    const res = await fetch(url);
    const data = await res.json();

    setResultado({ cargando: false, data });
  };

  return resultado;
};
