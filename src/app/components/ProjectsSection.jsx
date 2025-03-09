"use client";
import React , { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
      id: 1,
      title: "NEXT.js Portfolio Website",
      description: "The website you are currently viewing is my Portfolio Website.",
      image: "/images/projects/portfolio-website.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/richard-pius/Portfolio-Website",
      previewUrl: "https://portfolio-website-beige-six.vercel.app/",
    },
    {
      id: 2,
      title: "Simple Linux Distro",
      description: "This project is about a simple text-based linux distro. ",
      image: "/images/projects/linux-distro.jpg",
      tag: ["All", "Software"],
      gitUrl: "https://github.com/richard-pius/simple-linux-distro-",
      previewUrl: "https://github.com/richard-pius/simple-linux-distro-/releases",
    },
    {
      id: 3,
      title: "Todo List Website",
      description: "This project is about a Todo List website.",
      image: "/images/projects/todo.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/richard-pius/Todolist",
      previewUrl: "https://github.com/richard-pius/Todolist/releases",
    },
  ];

  const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) => 
      project.tag.includes(tag)
  );

    return(
        <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
        </div>
        <div className="text-white flex flex-row justify-center items-center gap-8 py-6">
            {filteredProjects.map((project) => <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />)}
        </div>
        </section>
    );
};

export default ProjectsSection;