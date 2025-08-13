import octopusImg from "../assets/gaintOctopus.webp";
import "./BlogPage.css";

function BlogPage() {
  return (
    <div className="flex flex-col m-2">
      <h1 className="flex text-2xl font-bold items-center justify-center">
        Blog Page
      </h1>
      <div className="flex-1 m-2">
        {/* Highlight section */}
        <div className="mb-6">
          <img src={octopusImg} alt="octopus" className="w-[500px]" />
          <p className="text-gray-600 mt-5">
            Learn more about our latest product releases and their early impact
            on lead flow to designers.
          </p>
        </div>

        {/* Blog items */}
        <div className="space-y-6">
          <div className="flex flex-row items-center justify-start">
            <div className="flex-shrink-0 m-2">
              <img
                src={octopusImg}
                alt="octopus"
                className="w-[200px] cursor-pointer"
              />
            </div>
            <div className="m-2">
              <h3 className="font-semibold">Work In Progress</h3>
              <p className="text-gray-600">
                Learn more about June’s product releases and their early impact
                on lead flow to designers.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-start">
            <div className="flex-shrink-0 m-2">
              <img
                src={octopusImg}
                alt="octopus"
                className="w-[200px] cursor-pointer"
              />
            </div>
            <div className="m-2">
              <h3 className="font-semibold">
                Celebrating Pride Month Through Design
              </h3>
              <p className="text-gray-600">
                Dribbble is proud to celebrate the LGBTQIA+ community through
                design. We’ve curated a selection of impactful Pride-themed
                artwork from our talented designers, each sharing their
                connection to the work and the deeper meaning behind their
                creations.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-start">
            <div className="flex-shrink-0 m-2">
              <img
                src={octopusImg}
                alt="octopus"
                className="w-[200px] cursor-pointer"
              />
            </div>
            <div className="m-2">
              <h3 className="font-semibold">
                Unlock opportunity and showcase your skills with a Webflow
                Expert badge
              </h3>
              <p className="text-gray-600">
                If you’re a designer who has mastered Webflow and wants to show
                off your skills, you can earn an Expert badge for your Dribbble
                profile and appear on our exclusive Webflow Expert landing page.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-start">
            <div className="flex-shrink-0 m-2">
              <img
                src={octopusImg}
                alt="octopus"
                className="w-[200px] cursor-pointer"
              />
            </div>
            <div className="m-2">
              <h3 className="font-semibold">
                Balkan Bros: Building a Legacy of Trust from Progressive
                Insurance to AWS
              </h3>
              <p className="text-gray-600">
                BB Agency’s success story is built on the power of long-term
                relationships and creative innovation. When a design project for
                Progressive Insurance led to a new product design for AWS, BB
                Agency’s seamless transition across industries and companies
                created a lasting impression of trust and consistency. Explore
                how they navigated these partnerships and how platforms like
                Dribbble played a crucial role in their growth and visibility
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-start">
            <div className="flex-shrink-0 m-2">
              <img
                src={octopusImg}
                alt="octopus"
                className="w-[200px] cursor-pointer"
              />
            </div>
            <div className="m-2">
              <h3 className="font-semibold">
                How to Make Emails That Survive the Delete Button
              </h3>
              <p className="text-gray-600">
                What worked back in the day–or even a few years ago (cough,
                cough: emojis in email subject lines; random personalization
                that feels specific but isn’t), no longer captures attention. In
                fact, there are some common reasons why your emails might end up
                in the SPAM folder (or be left unread forever).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
