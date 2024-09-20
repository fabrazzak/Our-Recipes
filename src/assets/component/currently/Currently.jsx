import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Currently = ({readyCook})=> {

    const [recipes, setRecipe] = useState([]);

    const currentCooks= recipes.filter(recipe => recipe.id == readyCook)
   

    useEffect( ()=>{
       const fetchRecipes = async ()=>{
           try {
               const res = await fetch("../../../../public/recipes.json");
               const data = await res.json();
               setRecipe(data)

           }
           catch (error) {

               console.error("Error fetching the recipes:", error);
           }
       }
        fetchRecipes();

    }, [readyCook])

 
    return (
        <div>

            {currentCooks.map(wantCook => (
                <div key={wantCook.id} className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={wantCook.image}
                                                    alt={wantCook.title}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {wantCook.title}
                                </td>
                                <td>{wantCook.time}</td>
                                <td>{wantCook.calories}</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
            
        </div>
    );
};

Currently.propTypes = {
    readyCook: PropTypes.shape({
    readyCook: PropTypes.number.isRequired, }).isRequired
};

export default Currently;