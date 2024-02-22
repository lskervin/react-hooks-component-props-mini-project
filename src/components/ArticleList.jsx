import Article from "./Article"


const ArticleList =({posts})=>{
    return(
        <main>
           {posts.map((post) => { 
           return (
           <Article 
           key={post.id} 
           title={post.title} 
           date={post.date} 
           preview={post.preview}
           />)})} 
            {/* <MinutesToRead minutes={postList.minutes} /> */}
        </main>
    )
}

export default ArticleList;