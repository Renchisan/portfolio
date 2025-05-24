'use client';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [text, setText] = useState('');
  const [stage, setStage] = useState<'typing' | 'outro'>('typing');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fullText = '@mondo';
    let current = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) {
        clearInterval(typing);
        setTimeout(() => setStage('outro'), 700);
        setTimeout(() => setFadeOut(true), 700); // trigger fade out
      }
    }, 300);

    return () => clearInterval(typing);
  }, []);

  return (
    <div
      className={`flex items-center justify-center h-screen w-screen text-white text-3xl font-mono transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      } bg-black`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Loader;
