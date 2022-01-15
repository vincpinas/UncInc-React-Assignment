import React, { useState} from 'react';
import './App.css';

// Import components
import Pagination from './Components/Pagination/Pagination';
import Preview from './Components/Preview/Preview';

const pages = [
  {id: 1, name: "Ásbjörn Melisa",personality: "Bubbly", slug: "asbjorn-melisa"}, 
  {id: 2, name: "Lizbeth Anfisa",personality: "Analytic", slug: "lizbeth-anfisa"},
  {id: 3, name: "Ilija Justino",personality: "Cool headed", slug: "ilija-justino"}, 
  {id: 4, name: "Lotte Rafael",personality: "Energetic", slug: "lotte-rafael"},
  {id: 5, name: "Gunder Zsiga",personality: "Aggressive", slug: "gunder-zsiga"},
]

function App() {
  const findCurrentPageHref = () => pages.findIndex(page => {
    return window.location.href.includes(page.slug)
  });

  const [currentPage, setCurrentPage] = useState({data: pages[findCurrentPageHref()], href: window.location.href});

  return (
    <>
      <Preview currentPage={currentPage}/>
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
