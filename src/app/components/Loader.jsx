import { useEffect, useState } from "react";

const greetings = [
     "Hello",
     "Hola",
     "Bonjour",
     "Hallo",
     "Ciao",
     "Olá",
     "Привет",
     "你好",
     "こんにちは",
     "안녕하세요",
     "مرحبا",
];

export default function Loader() {
     const [index, setIndex] = useState(0);

     useEffect(() => {
          const interval = setInterval(() => {
               setIndex((prev) => (prev + 1) % greetings.length);
          }, 500);
          return () => clearInterval(interval);
     }, []);

     return (
          <div className="flex items-center justify-center min-h-screen bg-neutral-900">
               <span className="text-white text-4xl font-semibold">
                    &bull; {greetings[index]}
               </span>
          </div>
     );
}