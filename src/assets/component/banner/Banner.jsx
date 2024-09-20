import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen banner-bg " >
                <div className="hero-content text-center">
                    <div className="lg:w-3/4 text-white flex flex-col gap-10">
                        <h1 className="text-5xl font-bold ">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="py-6">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className='flex justify-center gap-8'>
                            <button className="btn ">Explore Now</button>
                            <button className="btn btn-primary">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;