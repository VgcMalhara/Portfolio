import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Chiran Vidanagamage, an undergraduate at ITUM with a passion for full stack web development. I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js—alongside Tailwind CSS, JavaScript, and HTML. I enjoy building modern, responsive web applications that are both visually appealing and functionally powerful.
        As a developer, I focus on creating smooth user experiences on the front end and building secure, scalable systems on the back end. I’m always eager to learn new technologies, take on real-world projects, and grow as a developer.
        Beyond coding, I’m passionate about continuous learning, problem solving, and collaborating with others to bring ideas to life through technology.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
