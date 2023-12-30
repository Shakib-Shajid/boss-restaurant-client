
const RecommendItem = ({ recommendItem }) => {

    const { image, name, recipe } = recommendItem;
    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions ">
                        <button className="btn text-lg text-[#BB8506] bg-[#E8E8E8] border-b-[#BB8506] hover:bg-[#1F2937]">Add to cart</button>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default RecommendItem;