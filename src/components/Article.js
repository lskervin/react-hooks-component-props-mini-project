function Article ({title, date= "January 1, 1970", preview, minutes}) {
    
    return( 
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{minutes < 30 ? '☕️'.repeat(Math.ceil(minutes / 5)) : minutes > 30? '🍱'.repeat(Math.ceil(minutes / 10)):''}</p>
    </article>               
    )
}
export default Article;