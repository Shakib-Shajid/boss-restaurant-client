import { useEffect, useState } from "react";
import RecommendItem from "./RecommendItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommend = () => {

    const [recommend, setRecommend] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const chefItem = data.filter(item => item.category === 'offered')
                setRecommend(chefItem);
            })
    }, [])
    return (
        <section>
            <SectionTitle subHeading={"---Should Try---"} heading={"CHEF RECOMMENDS"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    recommend.map(recommendItem => <RecommendItem key={recommendItem._id} recommendItem={recommendItem}></RecommendItem>)
                }
            </div>
        </section>
    );
};

export default ChefRecommend;