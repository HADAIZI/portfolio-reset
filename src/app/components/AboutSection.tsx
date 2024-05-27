"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Tensorflow</li>
        <li>Sequelize</li>
        <li>React</li>
        <li>NextJs</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bangkit Batch 6 Program Machine Learning</li>
        <li>Institute Technology of Sepuluh Nopember</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>TensorFlow: Advanced Techniques Specialization</li>
        <li>DeepLearning.AI TensorFlow Developer Professional Certificate</li>
        <li>TensorFlow: Data and Deployment Specialization</li>
        <li>DeepLearning.AI TensorFlow Developer Professional Certificate</li>
        <li>Mathematics for Machine Learning and Data Science Specialization</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/images.jpg" alt="Profile image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
      
          <p className="text-base lg:text-lg text-justify">
            I am an enthusiastic Data Analyst/Machine Learning engineer with a passion for analyzing data and making predictions using machine learning. Skilled in Python, TensorFlow, and SQLite, I excel at turning raw data into actionable insights. Additionally, my expertise in JavaScript, React, Next.js, PostgreSQL, HTML, CSS, and Git allows me to bridge the gap between data analysis and frontend development. As a fast learner and adaptable team player, I thrive in collaborative environments and am excited to continuously expand my skills and contribute to innovative projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;