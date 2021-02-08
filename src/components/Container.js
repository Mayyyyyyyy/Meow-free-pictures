
const Container = ({images}) => {
    return ( 
        <div className="container">
         {images.map(image=>(
             <div className="card" id={image.id}>
               <div className="image">
                 <img src={image.previewURL} alt="picture"></img>
               </div>
               <div className="imageInfo">
                <div>
                        <p><i class="fa fa-user-circle" aria-hidden="true"></i> : {image.user}</p>
                </div>
                <div>
                        <p><i class="fa fa-eye" aria-hidden="true"></i>: {image.views}</p>
                        <p><i class="fa fa-thumbs-up" aria-hidden="true"></i>: {image.likes}</p>
                        <p><i class="fa fa-download" aria-hidden="true"></i>: {image.downloads}</p>  
                        <p><i class="fa fa-tags" aria-hidden="true"></i> : {image.tags.split(",").map(tag=>`#${tag}`)}</p>       
                </div>
               </div>
               <div>
                 <a href={image.pageURL} target="_blank"><button>Download</button></a>
               </div>
             </div>
         ))}
        </div>
     );
}
 
export default Container;