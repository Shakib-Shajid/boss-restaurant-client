import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white pt-10">
            <SectionTitle
                subHeading={'check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can I get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius a aspernatur quos fuga. In maxime quos eius illo optio omnis repellat, officiis possimus dicta laborum error doloribus ea harum, perferendis aliquid eaque quasi maiores, similique fugiat beatae. Sequi ea ut perspiciatis. Sequi voluptatibus laudantium soluta alias sapiente? Accusantium, excepturi.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;