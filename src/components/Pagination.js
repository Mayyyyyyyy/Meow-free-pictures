const Pagination = ({images,handlePagination}) => {
    return ( 
        <>
        {images.length === 0 
         ? (<h1 className="error">No image found...</h1>)
         : (
             <div className="pagination">
                <button onClick={e => handlePagination('prev')}>prev</button>
                <button onClick={e => handlePagination('next')}>next</button>
             </div>
         )
        }
        
        </>
     );
}
 
export default Pagination;