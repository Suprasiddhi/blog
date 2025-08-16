import octopusImg from "../assets/gaintOctopus.webp";

function AboutUs() {
  return (
    <div className="flex flex-col m-4">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <p className="text-gray-700 leading-relaxed max-w-lg">
          Our mission is to connect people through design and storytelling. We
          believe in the power of community, innovation, and collaboration. From
          humble beginnings, our journey has been about building a platform
          where ideas can flourish and creativity can thrive.
        </p>
        <img
          src={octopusImg}
          alt="about us"
          className="w-[400px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default AboutUs;
