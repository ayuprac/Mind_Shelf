
import banner from "../../public/Banner.jpg";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
             Reading is not just for information, it is for {" "}
              <span className="text-red-600">Transformation!!! </span>
          
            </h1>
             <p className="italic font-light pl-95 text-2xl">– Swami Vivekananda</p>
            <br/>
            <p className="text-sm md:text-xl">
             
              Step into a world where books find you. With our online bookstore, your next favorite read is just a click away... Welcome to MindShelf , where you can Browse & Buy your favourite books! Because we believe your time should be spent reading, not endlessly scrolling. Mindshelf brings the shelves to you. 
            </p>
            
          </div>
        
          <Link
                  to="/signup"
                  className="btn mt-6 bg-gray-200 border-2 border-black hover:bg-blue-400 hover:text-white duration-200"
                >
                  Get Started
        </Link>{" "}
        <br/>
        <br/>
        <br/>
        <hr/>
          
        </div>

        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-4xl"
            alt=""
          />
        </div>
        
      </div>
    </>
  );
}

export default Banner;
