import React from "react";
import Layout from "@/../components/Layout";

// Mockup data about Julia's learning journey
const learningData = {
  introduction: {
    title: "My Learning Journey",
    description: "From curious beginner to passionate developer, here's my story of growth and discovery in the world of technology.",
  },
  skills: [
    { name: "React & Next.js", level: 85, icon: "⚛️" },
    { name: "TypeScript", level: 80, icon: "📘" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "Node.js", level: 70, icon: "🟢" },
    { name: "TailwindCSS", level: 85, icon: "🎨" },
    { name: "Git & GitHub", level: 80, icon: "🔧" },
  ],
  milestones: [
    {
      year: "2024",
      title: "Full-Stack Developer",
      description: "Built this personal blog using Next.js, implementing markdown support and beautiful UI/UX design with Tailwind CSS.",
      icon: "🚀",
    },
    {
      year: "2023",
      title: "Advanced React Development",
      description: "Mastered React hooks, context API, and state management. Created multiple interactive web applications.",
      icon: "⚡",
    },
    {
      year: "2022",
      title: "Web Development Fundamentals",
      description: "Started learning HTML, CSS, and JavaScript. Built my first responsive websites and fell in love with coding.",
      icon: "💡",
    },
    {
      year: "2021",
      title: "The Beginning",
      description: "Wrote my first line of code and discovered the magic of programming. The journey started here!",
      icon: "🌱",
    },
  ],
  currentFocus: [
    "Building scalable web applications",
    "Exploring AI and machine learning integration",
    "Contributing to open-source projects",
    "Learning system design and architecture",
  ],
};

const LearningJourneyPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
            {learningData.introduction.title}
          </h1>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            {learningData.introduction.description}
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-2">
            <span>💪</span> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningData.skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-purple-800 flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-pink-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-purple-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones Timeline Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-2">
            <span>📍</span> Journey Milestones
          </h2>
          <div className="space-y-6">
            {learningData.milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {milestone.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-bold text-purple-800">
                      {milestone.title}
                    </h3>
                    <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-purple-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Focus Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-2">
            <span>🎯</span> Current Focus
          </h2>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-md">
            <ul className="space-y-3">
              {learningData.currentFocus.map((focus, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-purple-700"
                >
                  <span className="text-pink-500 text-xl mt-0.5">✨</span>
                  <span className="flex-grow">{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Motivational Quote */}
        <section className="text-center mt-12 pt-8 border-t-2 border-pink-200">
          <blockquote className="text-lg italic text-purple-600">
            &quot;The journey of a thousand miles begins with a single line of code.&quot;
          </blockquote>
          <p className="text-sm text-pink-500 mt-2">- Every Developer, Ever 💜</p>
        </section>
      </div>
    </Layout>
  );
};

export default LearningJourneyPage;
