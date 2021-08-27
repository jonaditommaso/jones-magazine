import NewsBox from "./NewsBox";

const InsideTheNews = ({title, src, alt, content}) => {
    return ( 
        <div>
            <div>
                <h1>{title}</h1>
                <img src={src} alt={alt} />
            </div>
            <div>
                {content}
            </div>

            <div>
               <p>MIRA TAMBIÉN</p>
               <div>
                    <NewsBox />
                </div>
                <div>
                    <NewsBox />
                </div>
               
            </div>
        </div>
     );
}
 
export default InsideTheNews;