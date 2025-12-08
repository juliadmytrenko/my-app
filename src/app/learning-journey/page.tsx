import React from "react";
import Layout from "@/../components/Layout";

export default function LearningJourney() {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          My Learning Journey
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            About Me
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Hi! 👋 I'm a passionate developer on a continuous journey of learning
            and growth. This blog is my digital garden 🌱 where I document my
            experiences, discoveries, and the lessons I've learned along the way
            in the world of web development.
          </p>
          <p className="text-base leading-relaxed mb-4">
            I believe in learning by doing 💪, sharing knowledge with the
            community 🤝, and constantly pushing the boundaries of what I can
            create with code 💻.
          </p>
          <p className="text-base leading-relaxed">
            When I'm not coding, you'll find me immersed in video games 🎮 and 
            board games 🎲, exploring the rich world of Japanese pop culture 🇯🇵✨, 
            or enjoying a good game of tennis 🎾. These hobbies not only help me 
            unwind but also inspire creative thinking and problem-solving in 
            my development work.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Git",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg text-center font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            My Learning Path
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                2024 - Present: Advanced Web Development
              </h3>
              <p className="text-gray-700">
                Building full-stack applications with Next.js and exploring
                modern web technologies. Creating this blog to share my journey
                and help others learn.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                2023: Frontend Foundations
              </h3>
              <p className="text-gray-700">
                Mastered React and component-based architecture. Learned about
                state management, hooks, and building responsive user
                interfaces.
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                2022: The Beginning
              </h3>
              <p className="text-gray-700">
                Started my coding journey with HTML, CSS, and JavaScript. Fell
                in love with creating interactive web experiences.
              </p>
            </div>

            <div className="border-l-4 border-pink-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                2018: Computer Science Studies
              </h3>
              <p className="text-gray-700">
                First year of computer science studies - this was when I first took coding seriously.
              </p>
            </div>

            <div className="border-l-4 border-purple-300 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                ~2014: First Steps
              </h3>
              <p className="text-gray-700">
                First encounter with writing algorithms on paper in school.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            Current Goals
          </h2>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>
                Build and maintain a technical blog to share knowledge
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Contribute to open-source projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Master advanced TypeScript patterns</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>
                Explore backend development with Node.js and databases
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Build projects that solve real-world problems</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            What I'm Learning Now
          </h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-md">
            <p className="text-base mb-3">Currently diving deep into:</p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>
                Server-side rendering and static site generation with Next.js
              </li>
              <li>Advanced CSS techniques and animations</li>
              <li>Writing clean, maintainable code</li>
              <li>Best practices in web performance optimization</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            Let's Connect
          </h2>
          <p className="text-base leading-relaxed">
            I'm always excited to connect with fellow developers and learners!
            Whether you want to discuss web development, share ideas, or
            collaborate on projects, feel free to reach out. Follow my blog for
            regular updates on my learning journey and technical discoveries.
          </p>
        </section>
      </div>
    </Layout>
  );
}
