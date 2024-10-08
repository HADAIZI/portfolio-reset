"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Game Aimlab",
    description: "An aim trainer game to improve FPS accuracy. Set time limits (10s to unlimited) and difficulty levels (Easy, Medium, Hard) challenge players to achieve high hits and accuracy. Features include 3 lives per game, fullscreen mode, and built in JavaScript.",
    image: "/images/aimlab.png",
    tag: ["All", "Webdev"],
    gitUrl: "https://github.com/HADAIZI/Tugas-Pweb-Game-Aimlab",
    previewUrl: "Aimlab",
  },
  {
    id: 2,
    title: "JanjiTemu",
    description: "A web application to organize, find, and register for events and communities post-COVID-19 isolation. Built with Laravel and Bootstrap, using PostgreSQL for database management. Features include user authentication, event creation, group management, and robust search functionality.",
    image: "/images/Janjitemu.jpeg",
    tag: ["All", "Webdev"],
    gitUrl: "https://github.com/HADAIZI/JanjiTemu?tab=readme-ov-file",
    previewUrl: "Janjitemu Project",
  },
  {
    id: 3,
    title: "Sistem Pendeteksi Gerakan Tangan dengan Flex Sensor untuk Terjemahan Bahasa Isyarat Real-Time dan Kontrol Nada Instrumen Musik berbasis Microcontroller",
    description: "A real-time hand gesture detection system using flex sensors and microcontrollers to translate sign language into text and control musical tones, integrating machine learning with a Random Forest Classifier and various sensors.",
    image: "/images/Hand-Sign-Pred.jpeg",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Used Bookstore",
    description: "a sample application using ASP.NET Core 6.0, demonstrating a monolithic n-tier architecture with an MVC front end and a Microsoft SQL Server backend. The application features a customer portal for book searching, shopping cart functionality, check-out process, and book resale, as well as an administration portal for inventory management and order processing.",
    image: "/images/bookstore.jpeg",
    tag: ["All", "Webdev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Cats vs Dogs",
    description: "Implement a VGG network for image classification about Cats v Dogs",
    image: "/images/CvD.jpeg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/HADAIZI/Cats-vs-Dogs",
    previewUrl: "Project Link",
  },
  {
    id: 6,
    title: "Multi Class Classification",
    description: "Develops a convolutional neural network (CNN) to classify handwritten sign language letters using TensorFlow and Keras. The model achieves high accuracy through effective data augmentation and robust architecture, demonstrating excellent generalization to unseen data.",
    image: "/images/MultiClasss.jpeg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://colab.research.google.com/drive/1032CW7l3EOuz4ZvJ4R1nEzLz30gJq9LI?usp=sharing",
    previewUrl: "Collab Link",
  },
  {
    id: 7,
    title: "Image Segmentation",
    description: "This project uses a Convolutional Neural Network (CNN) with a custom downsampling path and FCN-8 upsampling architecture to segment handwritten digits from the M2NIST dataset. The model is evaluated using Intersection over Union (IOU) and Dice Score metrics.",
    image: "/images/Img-Segmentation.jpeg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://colab.research.google.com/drive/13pXtUmA0zG8yjCOQoudmqHRskNOJrMfj?authuser=1#scrollTo=vG4JE2JNYGUG",
    previewUrl: "Collab Link",
  },
  {
    id: 8,
    title: "Batikhub",
    description: "BatikHub is an application designed to classify various types of batik motifs based on user input. This application not only functions as a classification tool, but also as an educational tool regarding the history and meaning behind each identified batik motif. The results of the motif prediction will be stored in the history page, making it easier for users to access and learn about previously explored batik motifs. ",
    image: "/images/batikhub.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/VanGarman21/BatikHub",
    previewUrl: "Project Link",
  },
  {
    id: 9,
    title: "Shinkaigan",
    description: "Part of the Shinkaigan research project, this GAN model generates a anime picture from aa skech image based on Makoto Shinkai style using Unet architecture. The model is trained on a dataset of anime sketches and images to learn the mapping between the two domains.",
    image: "/images/shinkaigan.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/echelon2718/ShinkaiGAN",
    previewUrl: "Project Link",
  },
  {
    id: 10,
    title: "Breast Cancer Prediction",
    description: "Train a neural network on the Breast Cancer Dataset to predict if a tumor is malignant or benign. This involves data preprocessing, model training, and evaluation using accuracy and F1 Score metrics.",
    image: "/images/Cancerpred.jpeg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/HADAIZI/Breast-Cancer-Prediction",
    previewUrl: "Collab Link",
  },
  {
    id: 11,
    title: "Bike Sharing Analysis",
    description: "Analyzed the Bike Sharing Dataset using Python to uncover rental patterns and factors like weather, seasonal trends, and user behaviors. Presented insights through visualizations to support data-driven decisions for optimizing bike rental services.",
    image: "/images/Bike-analysis.jpeg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/HADAIZI/Project_dicoding",
    previewUrl: "Project Link",
  }
  
  

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Webdev"
          isSelected={tag === "Webdev"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
