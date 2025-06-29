
import './App.css'

import { useState } from 'react';

function Sayac() {
  const [sayi, setSayi] = useState(0);

  return (
    <div>
      <h1> sayı: {sayi}</h1>
      <button onClick={()=> setSayi(sayi+1)}>artır</button>
    </div>
  );
}

export default Sayac;
