import MenuNav from "../menu_nav/MenuNavi"
import "./SectionBlog.css"
export default function SectionBlog({imageBlog,titleBlog,textoBlog,dateBlog,direction}){
    return(
            direction%2 === 0?
                <section className="container-blog-section">
                    <div  className="content-blog-section">
                        <img src={imageBlog} width={1160} style={{marginLeft: '-300px'}} />
                    </div>
                    <div className="content-blog-section">
                        <h1>{titleBlog}</h1>
                        <p>{textoBlog}</p>
                        <time>{dateBlog}</time>
                    </div>
                </section>
                :
                <section className="container-blog-section">
                    <div className="content-blog-section">
                        <h1>{titleBlog}</h1>
                        <p>{textoBlog}</p>
                        <time>{dateBlog}</time>
                    </div>
                    <div  className="content-blog-section">
                        <img src={imageBlog} width={1160} style={{marginLeft: '-300px'}} />
                    </div>
                
                </section>
    
    )
}