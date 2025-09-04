export default function FreelanceHighlights() {
  const features = [
    {
      title: "Access a pool of top talent across 700 categories",
      image: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.8badf97.svg",
    },
    {
      title: "Enjoy a simple, easy-to-use matching experience",
      image: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/matching.0eef7cc.svg",
    },
    {
      title: "Get quality work done quickly and within budget",
      image: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/quickly.6879514.svg",
    },
    {
      title: "Only pay when you’re happy",
      image: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/happy.42ed7bd.svg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Make it all happen with freelancers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              <p className="text-gray-700 font-medium">{feature.title}</p>
            </div>
          ))}
        </div>

        <a
          href="/join?source=lohp_uspss"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Join now
        </a>
      </div>
    </section>
  );
}
