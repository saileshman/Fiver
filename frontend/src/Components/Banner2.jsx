const Banner2 = () => {
  return (
    <section className="relative h-[30vh] w-full bg-[#8f1e31] flex items-center justify-center py-6">
      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Stuck At Vibe Coding?
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Get matched with the right expert to turn your prototype into real,{" "}
          <span className="font-semibold">working product.</span>
        </p>

        <div className="py-4 "> <button className=" bg-white hover:bg-[#19A463] 
        text-black hover:text-white font-semibold px-6 py-3 rounded-full transition 
        duration-300 cursor-pointer"> 
        Find an Expert 
        </button>
         </div>
      </div>
    </section>
  );
};

export default Banner2;
