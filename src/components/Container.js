
const Container = ({images}) => {
    return ( 
        <div className="container">
         {images.map(image=>(
             <div className="card" key={image.id}>
               <div className="image">
                 <img src={image.previewURL} alt="different things"></img>
               </div>
               <div className="imageInfo">
                <div>
                        <p><i className="fa fa-user-circle" aria-hidden="true"></i> : {image.user}</p>
                </div>
                <div>
                        <p><i className="fa fa-eye" aria-hidden="true"></i>: {image.views}</p>
                        <p><i className="fa fa-thumbs-up" aria-hidden="true"></i>: {image.likes}</p>
                        <p><i className="fa fa-download" aria-hidden="true"></i>: {image.downloads}</p>  
                        <p><i className="fa fa-tags" aria-hidden="true"></i> : {image.tags.split(",").map(tag=>`#${tag}`)}</p>       
                </div>
               </div>
               <div>
                 <a href={image.pageURL} target="_blank" rel="noreferrer"><button>Download</button></a>
               </div>
             </div>
         ))}
        </div>
     );
}
 
export default Container;