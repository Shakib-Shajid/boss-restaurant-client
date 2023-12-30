import { useEffect, useState } from "react";
import RecommendItem from "./RecommendItem";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                recommend.map(recommendItem => <RecommendItem key={recommendItem._id} recommendItem={recommendItem}></RecommendItem>)
            }
        </div>
    );
};

export default ChefRecommend;