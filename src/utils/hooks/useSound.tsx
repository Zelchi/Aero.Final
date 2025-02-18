import { useRef, useEffect } from "react";
import hit from "../../assets/audios/hit.mp3";
import menu from "../../assets/audios/menu.mp3";

const efeitosSonoros = {
  hit,
  menu,
} as const;

type som = keyof typeof efeitosSonoros;

export const useSound = (src: som) => {
  const som = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const audio = document.createElement("audio");
    document.body.appendChild(audio);
    const source = document.createElement("source");
    source.setAttribute("type", "audio/mpeg");
    source.setAttribute("src", efeitosSonoros[src]);
    audio.appendChild(source);
    som.current = audio;
    audio.volume = 0.3;
    return () => {
      document.body.removeChild(audio);
    };
  }, [src]);

  const play = () => {
    if (som.current) {
      som.current.load();
      som.current.play();
    }
  };

  const pause = () => {
    if (som.current) {
      if (som.current.paused) {
        som.current.play();
      } else {
        som.current.pause();
      }
    }
  };

  const stop = () => {
    if (som.current) {
      som.current.load();
    }
  };

  return [play, pause, stop];
};
