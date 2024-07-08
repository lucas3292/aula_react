import MenuNav from '../../components/menu_nav/MenuNavi'
import SectionBlog from '../../components/section_blog/SectionBlog'
import './Blog.css'
export default function Blog(){
    return(
        <main className='item-item'>
             <SectionBlog 
             imageBlog={"https://images.squarespace-cdn.com/content/v1/606d4deb4db8c15ea53b3624/1617783322870-GJ9WNZB821ZYWEIRFMEU/banner-3.jpg?format=2500w"} 
             titleBlog={"TEAM CHERRY HOLIDAY SIGN OFF"}
             textoBlog={"Happy Holidays Gang! With Christmas close and Team Cherry about to take a few days off after an intensive year’s development, we’re gonna try and keep this update as snap-sharp as we can."}
             dateBlog={"25/05/2023"}
             direction={2}/>
             <SectionBlog 
             imageBlog={"https://images.squarespace-cdn.com/content/v1/606d4deb4db8c15ea53b3624/1617783322870-GJ9WNZB821ZYWEIRFMEU/banner-3.jpg?format=2500w"} 
             titleBlog={"TEAM CHERRY HOLIDAY SIGN OFF"}
             textoBlog={"Happy Holidays Gang! With Christmas close and Team Cherry about to take a few days off after an intensive year’s development, we’re gonna try and keep this update as snap-sharp as we can."}
             dateBlog={"25/05/2023"}
             direction={3}/>
             <SectionBlog 
             imageBlog={"https://images.squarespace-cdn.com/content/v1/606d4deb4db8c15ea53b3624/1617783322870-GJ9WNZB821ZYWEIRFMEU/banner-3.jpg?format=2500w"} 
             titleBlog={"TEAM CHERRY HOLIDAY SIGN OFF"}
             textoBlog={"Happy Holidays Gang! With Christmas close and Team Cherry about to take a few days off after an intensive year’s development, we’re gonna try and keep this update as snap-sharp as we can."}
             dateBlog={"25/05/2023"}
             direction={4}/>
        </main>
       
    )
}