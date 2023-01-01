import React, { useState, useEffect } from 'react';
import './style.css';

import CPP from './code/cpp';
import Java from './code/java';
import JavaScript from './code/javascript';
import Python from './code/python';
import Swift from './code/swift';
import Php from './code/php';

export default function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const langList = [
    { label: 'C++', lang: <CPP /> },
    { label: 'Java', lang: <Java /> },
    { label: 'Javascript', lang: <JavaScript /> },
    { label: 'Python', lang: <Python /> },
    { label: 'Swift', lang: <Swift /> },
    { label: 'PHP', lang: <Php /> },
  ];

  useEffect(() => {
    let interval = setInterval(
      () => setCurrentIndex((prevState) => (prevState + 1) % langList.length),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="langlist">{langList[currentIndex]['lang']}</div>
      <footer>{langList[currentIndex]['label']}</footer>
    </>
  );
}
