import React, { useEffect, useState } from 'react';
import "./Home.css";

const words = [
  "a Full-stack Web Developer",
  "a Software Engineer",
  "a Tech Enthusiast",
  "a Lifelong Learner"
];

function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    const nextText = isDeleting
      ? currentWord.substring(0, displayedText.length - 1)
      : currentWord.substring(0, displayedText.length + 1);

    const handleTyping = () => {
      setDisplayedText(nextText);

      if (!isDeleting && nextText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className="typewriter">
      <h2>Hi, I'm Claire Njeri Muiru, <span>{displayedText}</span><span className="cursor">|</span></h2>
    </div>
  );
}

export default Home;
