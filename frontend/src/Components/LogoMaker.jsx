export default function LogoMaker() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Small logo/icon (optional) */}
        <small className="block mb-4 text-gray-400">
          <i className="logo-maker-logo">🎨</i>
        </small>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Make an incredible <br />
          <em className="text-green-500">logo in seconds</em>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-8">
          Pre-designed by top talent. Just add your touch.
        </p>

        {/* CTA Button */}
        <a
          href="/logo-maker?source=LOHP_banner"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Try Fiverr Logo Maker
        </a>
      </div>
    </section>
  );
}
