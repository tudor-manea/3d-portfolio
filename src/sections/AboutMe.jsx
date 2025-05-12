import AnimatedCounter from "../components/AnimatedCounter"
import { counterItems } from "../constants"

const AboutMe = () => {
  const experienceItem = counterItems[0]
  return (
    <section id="about_me" className="px-5 md:px-10 mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-2">
            Get to Know More
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
        </div>
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-10">
          {/* LEFT: Profile Image */}
          <div className="xl:col-span-5">
            <img
              src="/images/profile.png"
              alt="Tudor Manea"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          {/* RIGHT: Experience counter, Education card, and about text */}
          <div className="xl:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience Counter */}
              <AnimatedCounter
                items={[experienceItem]}
                id="experience-counter"
                wrapperClassName="w-full"
                gridClassName="grid grid-cols-1 gap-6"
              />
              {/* Education Card */}
              <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                <h3 className="text-white text-2xl font-semibold mb-2">Education</h3>
                <p className="text-white-50">B.Sc. Placeholder University</p>
                <p className="text-white-50">M.Sc. Placeholder Institute</p>
              </div>
            </div>
            {/* About Me Text */}
            <p className="text-white-50 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};
export default AboutMe
