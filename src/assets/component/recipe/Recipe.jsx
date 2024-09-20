import PropTypes from "prop-types";

const Recipe = ({ recipe, wantCook }) => {
    const {title,id,description,ingredients,time,calories,image}=recipe;
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                    <img 
                        src={image}
                        alt={title}
                        className="rounded-xl max-h-[300px]"
                    />
                </figure>
                <div className="card-body items-center text-center gap-5">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p><span className="font-bold ">Ingredients: </span> {ingredients.join(', ')}</p>
                    <div className="flex justify-between items-center  gap-20"> <p>Time: {time}</p>
                        <p>Calories: {calories}</p></div>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={()=> wantCook(id)}>Cook Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.shape({
        wantCook: PropTypes.func,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        time: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
      
    }).isRequired
};


export default Recipe;