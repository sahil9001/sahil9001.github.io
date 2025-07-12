export default function IntroductionSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-transparent">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl flex items-center justify-center px-8 md:px-16 py-16">
        <div className="flex flex-col font-normal text-gray-800 text-lg md:text-xl gap-6 w-full items-center text-center">
          <p>
            As a Software Developer at <a href="https://adobe.com" target="_blank" className="underline decoration-dotted text-blue-600 hover:text-blue-800 transition-colors">Adobe</a>, I'm continuously expanding my skillset while contributing to innovative projects. My childhood fascination with technology has blossomed into a fulfilling career, allowing me to turn my passion into impactful solutions in the tech industry.
          </p>
          <p>
            In 2023, I graduated from the <a href="https://nitrr.ac.in" target="_blank" className="underline decoration-dotted text-blue-600 hover:text-blue-800 transition-colors">National Institute of Technology, Raipur</a>, with a Bachelors degree in Computer Science. During this time, I worked with various startups/companies to grow their business.
          </p>
          <p>
            In my spare time, I enjoy going to the gym, playing video games, speaking at events, making apps and learning new things.
          </p>
        </div>
      </div>
    </section>
  );
}
