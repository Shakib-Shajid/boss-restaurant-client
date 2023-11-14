import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={'check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can I get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius a aspernatur quos fuga. In maxime quos eius illo optio omnis repellat, officiis possimus dicta laborum error doloribus ea harum, perferendis aliquid eaque quasi maiores, similique fugiat beatae. Sequi ea ut perspiciatis. Sequi voluptatibus laudantium soluta alias sapiente? Accusantium, excepturi.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;