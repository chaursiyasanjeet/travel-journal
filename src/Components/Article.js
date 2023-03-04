export default function Article(props) {

    return (

        <div className="article">
            <img src={props.imageUrl} className="article-img" alt="travle-location-img" />
            <div className="main-article">
                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <span className="location-Name">{props.location}</span>
                    <a href="{props.googleMapsUrl}" target="_blank" className="location-Link">view on Google Maps</a>
                </div>

                <h1 className="title">{props.title}</h1>
                <p className="visiting-time">{props.date}</p>
                <p className="description">{props.description}</p>
            </div>
        </div >

    )

}