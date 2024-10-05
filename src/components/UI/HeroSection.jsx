import {FaLongArrowAltRight} from "react-icons/fa";

export const HeroSection = ()=>{
    return(
        <main className="hero-section main">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the World, one Country at a Time
                </h1>
                <p className="paragraph">
                    discover the history, culture, and beauty of every nation. sort search and filter through countries to find the details you need.
                </p>
                <button className="btn btn-darken btn-inline bg-white-box">
                    Start Exploring <FaLongArrowAltRight /> 
                </button>
            </div>
            <div className="hero-image">
                <img className="banner-image" src="/images/world.png" alt="world beauty" />
            </div>
        </div>
    </main>
    )
}