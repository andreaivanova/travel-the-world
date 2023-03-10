const Edit = () => {

    return (
        <>
        <div id="post__single-page">
          <section className="above-the-fold above_the_fold_create_and_edit">
            <div className="container_wrapper container_wrapper--loginView 
             container_wrapper--editandCreateView">
            

              <section id="comment-form">
                <h1 id="above-the-fold__description">Edit your post</h1>
                <form className="comment-form__container form--login form--style--edit--create">
                <input className="comment__name"  type="text" placeholder="city"/>
<input className="comment__name"  type="text" placeholder="country"/>
<input className="comment__name"  type="text" placeholder="description"/>
<input className="comment__name"  type="text" placeholder="image url"/>
<input className="comment__name"  type="text" placeholder="why do you recommend it?"/>
<input className="comment__name"  type="text" placeholder="have you ever been there? share some of your experience"/>


                  <button className="comment__action">Edit</button>
           
                </form>
              </section>
            </div>
          </section>
        </div>
      
                    </>
    )
}

export default Edit;