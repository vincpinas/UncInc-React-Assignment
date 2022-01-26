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
  const [baselink] = useState(window.location.href.includes('ma-cloud') ? 'http://30472.hosts1.ma-cloud.nl/UncInc/' : 'http://localhost:3000/')

  const findCurrentPageHref = () => pages.findIndex(page => {
    return window.location.href.includes(page.slug)
  });

  const [currentPage, setCurrentPage] = useState({
      data: findCurrentPageHref() > 0 ? (pages[findCurrentPageHref()]) : pages[0], 
      href: window.location.href
    });

  return (
    <>
      <Preview currentPage={currentPage} />
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} baselink={baselink} />
    </>
  );
}

export default App;
