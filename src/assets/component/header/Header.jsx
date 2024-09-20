

const Header = () => {
    return (
        <div>

            <div className="bg-base-100 container mx-auto">

                <div className="flex justify-between py-4 ">
                    <h1 className="text-2xl font-bold ">Recipe Calories</h1>
                    <div>
                        <ul className="flex gap-5 ">
                            <li className="list-none font-bold">Homepage</li>
                            <li className="list-none font-bold">Portfolio</li>
                            <li className="list-none font-bold">About</li>
                        </ul>
                    </div>
                    <h2 className="text-xl font-bold ">Profile</h2>
                </div>



            </div>

        </div>
    );
};

export default Header;