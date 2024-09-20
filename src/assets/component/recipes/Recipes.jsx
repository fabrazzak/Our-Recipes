import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../recipe/Recipe";
import WantCook from "../wantCook/WantCook";
import Currently from "../currently/Currently";


const Recipes = () => {

    const [recipes, setRecipes] = useState([])
    const [wantCooks, setWantCooks] = useState([])
    const [readyCooks, setReadyCooks] = useState([])
    const [readyCooks2, setReadyCooks2] = useState([])
    


    useEffect(() => {
        fetch("../../../../public/recipes.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])


    const wantCook = (id) => {
        setWantCooks([...wantCooks, id])
    }

    const prepareCook = (id) => {

        setReadyCooks([...readyCooks, id])

        const newRecipes = wantCooks.filter(n=> n != id );
       
            setWantCooks(newRecipes);
      
      
        const currentCooks = recipes.filter(recipe => recipe.id == id);
        setReadyCooks2([...readyCooks2, currentCooks])

    }


    
    const flatRecipeArray = readyCooks2.flat();

   
  
    const totalTime = flatRecipeArray.reduce( (sumTime, {time})=> sumTime + time ,0);
    const totalCalories = flatRecipeArray.reduce((sumCalories, { calories }) => sumCalories + calories,0);
    
   




    return (
        <div className="container mx-auto text-center my-10 ">

            <h2 className="text-4xl font-bold my-8">Our Recipes</h2>
            <p className="lg:w-2/4 mx-auto text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla laudantium dolorem labore voluptas quaerat ipsam quas, perferendis obcaecati vero.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
                <div className="col-span-2 grid md:grid-cols-2 gap-6">
                    {
                        recipes.map((recipe, index) => <Recipe recipe={recipe} prepareCook={prepareCook} wantCook={wantCook} key={index} ></Recipe>)

                    }
                </div>
                <div>



                    <div className="card bg-base-100  shadow-xl pb-10 ">


                        <h2 className="text-2xl font-bold mb-10 ">Want to cook: {wantCooks.length}  </h2>
                        <div className="overflow-x-auto">
                            <table className="table  ">
                                {/* head */}
                                <thead>
                                    <tr >
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                        <th>Button</th>

                                    </tr>
                                </thead>


                            </table>
                        </div>

                        {
                            wantCooks.map((singleCook, index) => (<WantCook key={index} prepareCook={prepareCook} singleCook={singleCook}></WantCook>))
                        }

                        <h2 className="my-10 text-2xl font-bold "> Currently cooking: {readyCooks.length}</h2>

                        {readyCooks.length > 0 ?
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Time</th>
                                            <th>Calories</th>
                                            <th>Button</th>

                                        </tr>
                                    </thead>


                                </table>
                            </div> :""}
                        {
                            readyCooks.map((readyCook, index) => (<Currently key={index} readyCook={readyCook}></Currently>))
                        }

                        <div className="mt-6">
                            <hr />
                        </div>
                        <div className="mt-10 flex  justify-around">

                            <h4 className="font-bold text-lg ">Total Time : {totalTime} min</h4>
                            <h4 className="font-bold text-lg">Total Total Calories: {totalCalories} </h4>
                        </div>



                    </div>






                </div>

            </div>

        </div>
    );
};

export default Recipes;