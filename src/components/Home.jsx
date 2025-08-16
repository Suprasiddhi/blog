import octopusImg from "../assets/gaintOctopus.webp";

function Home() {
  return (
    <div className="flex flex-col m-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to Our Website
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <img
          src={octopusImg}
          alt="home banner"
          className="w-[400px] rounded-lg shadow-lg"
        />
        <p className="text-gray-700 leading-relaxed max-w-lg">
          We are dedicated to delivering high-quality content and services.
          Explore our blogs, learn more about our team, and get in touch for
          collaborations. Stay tuned for our latest updates and stories that
          inspire creativity and innovation.
        </p>
      </div>
    </div>
  );
}

export default Home;
