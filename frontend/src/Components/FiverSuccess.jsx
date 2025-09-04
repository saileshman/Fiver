const FiverrSuccess = () => {
  return (
    <section className="py-16 bg-gray-50 flex flex-col items-center justify-center">
      {/* Container */}
      <div className="w-full max-w-5xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          What success on Fiverr looks like
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Vontélle Eyewear turns to Fiverr freelancers to bring their vision to life.
        </p>

        {/* Video */}
        <div className="w-full overflow-hidden rounded-xl shadow-lg">
          <video
            className="w-full h-auto"
            autoPlay
            controls
            playsInline
            preload="auto"
            poster="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef51b45f79342925d5268e0b2377eae8-1704717764992/thumbnail.png"
          >
            <source
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
              type="video/mp4"
            />
            <track
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/subtitles_en.c0bcbb7.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
              default
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default FiverrSuccess;
