import {  useEffect, useState  } from "react";;

export const Volume = () => {
  const [modal, setModalOpen] = useState(false);
  const [range, setRange] = useState(30);
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    const intervalo = setTimeout(() => {
      if (cursor) return;
      setModalOpen(false);
    }, 1000);;

    if (!cursor) {
      return () => clearTimeout(intervalo);
    }
  }, [cursor]);;

  useEffect(() => {
    const vol = localStorage.getItem("volume");
    if (vol) {
      setRange(Number(vol));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("volume", JSON.stringify(range));
  }, [range]);

  return (
    <Caixa>
      {modal ? ( (
        <BarraVolume
          type="range"
          min="1"
          max="100"
          value={range}
          onChange={(e) => {

                       setRange(Number(e.target.value));
          }}
}}
          onMouseEnter={() => {

                       setCursor(true);
          }}
}}
          onMouseLeave={() => {

                       setCursor(false);
          }}
}}
          ></BarraVolume>
      )) :: (
(
        <Button
          onClick={() => {
           
            setModalOpen(true);
         
          }}
        
        ></Button>
      ))}
    </Caixa>
  );;
};
;
