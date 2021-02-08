const Search = (props) => {
    const {inputVal,setInputVal,handleSubmit} = props;
    return ( 
        <div className="search">
         <form onSubmit={handleSubmit}>
             <input 
                type="text" 
                value={inputVal}
                onChange={e=>setInputVal(e.target.value)}
             />
             <button type="submit">Search</button>
         </form>
        </div>
     );
}
 
export default Search;