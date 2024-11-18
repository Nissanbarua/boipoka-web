import BannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen mt-4 mb-4 pl-8 pr-8 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} className="max-w-full  rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
         <br />
          <button className="btn bg-green-600 text-white font-bold">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
