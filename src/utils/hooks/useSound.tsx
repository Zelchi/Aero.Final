import { useRef, useEffect, useState } from "react";
import hit from "../../assets/audios/hit.mp3";
import menu from "../../assets/audios/menu.mp3";

const efeitosSonoros = {
    hit,
    menu,
} as const;

type som = keyof typeof efeitosSonoros;

const verificarVolume = () => {
    if (localStorage.getItem("volume")) {
        return Number(localStorage.getItem("volume")) / 1000;
    } else {
        return 0.1
    }
}

export const useSound = (src: som) => {
    const [vol, setVol] = useState(verificarVolume());

    useEffect(() => {
        setVol(Number(localStorage.getItem("volume")) / 1000)
    }, []);

    const som = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        const audio = document.createElement("audio");
        document.body.appendChild(audio);
        const source = document.createElement("source");
        source.setAttribute("type", "audio/mpeg");
        source.setAttribute("src", efeitosSonoros[src]);
        audio.appendChild(source);
        som.current = audio;
        audio.volume = vol;
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
