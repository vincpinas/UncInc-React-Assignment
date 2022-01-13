import React from 'react';
import './App.css';

// Import components
import Pagination from './Components/Pagination/Pagination';

const pages = [
  {name: "Ásbjörn Melisa",personality: "Bubbly", slug: "asbjorn-melisa"}, 
  {name: "Lizbeth Anfisa",personality: "Analytic", slug: "lizbeth-anfisa"},
  {name: "Ilija Justino",personality: "Cool headed", slug: "ilija-justino"}, 
  {name: "Lotte Rafael",personality: "Energetic", slug: "lotte-rafael"},
  {name: "Gunder Zsiga",personality: "Aggressive", slug: "gunder-zsiga"},
]

function App() {
  return (
    <>
      <Pagination pages={pages} />
    </>
  );
}

export default App;
