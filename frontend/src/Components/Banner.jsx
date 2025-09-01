import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Find the perfect{" "}
          <span className="text-green-400">freelance services</span>, right away
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Work with talented freelancers across the globe for your projects.
        </p>

        {/* Search bar */}
        <div className="mt-6 mx-auto flex items-center bg-white rounded-full overflow-hidden shadow-lg w-full max-w-xl">
          <input
            type="text"
            placeholder="Try 'web development'"
            className="flex-grow px-4 py-3 text-gray-700 outline-none"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 flex items-center gap-2">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
