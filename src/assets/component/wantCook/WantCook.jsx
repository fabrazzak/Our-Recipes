import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const WantCook = ({ singleCook, prepareCook }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch("../../../../public/recipes.json");
                const data = await res.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching the recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    const wantCooks = recipes.filter(recipe => recipe.id == singleCook);

    return (
        <div>
            {wantCooks.map(wantCook => (
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
                                <th>
                                    <button onClick={() => prepareCook(wantCook.id)} className="btn btn-primary btn-xs">
                                        Preparing
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

WantCook.propTypes = {
    singleCook: PropTypes.number.isRequired,
    prepareCook: PropTypes.func.isRequired,
};

export default WantCook;
