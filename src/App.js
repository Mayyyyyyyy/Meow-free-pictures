import Container from "./components/Container";
import Search from "./components/Search";
import React, { useState,useEffect } from 'react';
import Pagination from "./components/Pagination";

function App() {
  const [inputVal,setInputVal] = useState('');
  const [search,setSearch] = useState('');
  const [images,setImages] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const API_KEY = '20160203-ef96c5e27098c2049162ae034';

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${ API_KEY }&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`)
     .then(res=>res.json())
     .then(data=>setImages(data.hits))
  },[search,currentPage])

  const handleSubmit = (e)=>{
    e.preventDefault();
    setSearch(inputVal);
    setInputVal('');
  }

  const handlePagination = (pagination)=>{
     if(pagination === "next"){
       setCurrentPage(previousPage=>previousPage+1);
     }else if (pagination === "prev" && currentPage!==1){
       setCurrentPage(previousPage=>previousPage-1);
     }
     window.scrollTo(0,0);
  }

  return (
    <div className="App">
      <Search 
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleSubmit={handleSubmit}
      />
      <Container 
        images={images}
      />
      <Pagination 
        images={images}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default App;
