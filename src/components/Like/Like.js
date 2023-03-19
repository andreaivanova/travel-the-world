
const Like = ({likes,
    hasLiked,
    handleLike}) =>{


    return (
        <>
        <h2>{likes} people like this destination</h2>


        {hasLiked ? null :  <button onClick={handleLike}  className="like-button like-button2" >Like</button>}
     
        </>
    );
}


export default Like;

