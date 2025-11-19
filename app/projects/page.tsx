"use client";

import React , { useEffect, useState } from "react";
import HorizontalScrollProjects from "../_components/HorizontalScrollProjects"; 
import ProjectModal from "../_components/ProjectModal";


function Page() {
  const projects = [
    {
      title: "ReadPlanner",
      description:
        "a web app to upload books, take notes, and track your reading habit effortlessly.",
      image: "/readplanner.png",
      link: "https://github.com/Salah-haddani/read-planner",
      sourceCode: "",
      media: [
        "youtube:yT_ncpVBZkw",
      ]
    },
    {
      title: "FriendPay",
      description:
        "Track group expenses, manage payments, and stay organized with balances and tasks.",
      image: "/frdpay.png",
      link: "https://github.com/Salah-haddani/expenses-tracking/",
      sourceCode: "",
      media: [
        
        "youtube:LEtpUZj3PlQ",
      ]
    },
    {
      title: "QuizMaker",
      description:
        "a quiz platform where teachers create quizzes and students take them via unique access codes.",
      image: "/quiz.png",
      link: "https://github.com/Salah-haddani/quiz-app",
      sourceCode: "",
      media: [
        "/projects/quizmaker/1.png",
        "/projects/quizmaker/2.png",
        "/projects/quizmaker/3.png",
        "/projects/quizmaker/4.PNG",
        "/projects/quizmaker/5.PNG",
        "/projects/quizmaker/6.PNG",
        "/projects/quizmaker/7.PNG",
        "/projects/quizmaker/8.PNG",
        "/projects/quizmaker/9.PNG",
        "/projects/quizmaker/10.PNG",
        "youtube:uN7c7rkhjWY",
      ]
    },
    {
      title: "Ugaming",
      description:
        "Ugaming is an online store to showcase products and provide a seamless shopping experience.",
      image: "/ugaming.png",
      link: "https://github.com/Salah-haddani/ecommerce-app",
      sourceCode: "",
      media: [
        "/projects/ugaming/1.png",
        "/projects/ugaming/2.PNG",
        "/projects/ugaming/3.PNG",
        "/projects/ugaming/4.PNG",
        "/projects/ugaming/5.PNG",
        "/projects/ugaming/6.PNG",
        "/projects/ugaming/7.PNG",
        "/projects/ugaming/demo.mp4",
      ]
    },
    {
      title: "Chat-App",
      description:
        "a real-time messaging app to connect users instantly with smooth, interactive conversations.",
      image: "/chat.png",
      link: "https://github.com/Salah-haddani/chat-app",
      sourceCode: "",
      media: [
        "/projects/chatapp/1.png",
        "/projects/chatapp/2.png",
        "/projects/chatapp/3.png",
      ]
    },
    {
      title: "Landing Pages",
      description:
        "an engaging and creative landing pages to showcase a brand’s services, products.",
      image: "/sahara.png",
      link: "https://github.com/Salah-haddani/sahara",
      sourceCode: "",
      media: [
        "/projects/landingpage/1.png",
        "/projects/landingpage/2.png",
        "/projects/landingpage/3.png",
        "/projects/landingpage/4.png",
        "/projects/landingpage/5.png",
        "/projects/landingpage/6.png",
        "/projects/landingpage/7.png",
        "/projects/landingpage/8.png",
        "/projects/landingpage/demo.png",
      ]
    },
    {
      title: "Evaluation Form",
      description:
        "a form app with multiple question types including ratings, checkboxes, radio buttons, ...",
      image: "/form.png",
      link: "https://github.com/Salah-haddani/form",
      sourceCode: "",
      media: [
        "/projects/form/1.png",
        "/projects/form/2.png",
        "/projects/form/4.png",
        "/projects/form/5.png",
        "/projects/form/6.png",
        "/projects/form/7.png",
        "/projects/form/demo.png",
      ]
    },
  ];


  const [activeMedia, setActiveMedia] = useState(null);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setActiveMedia(e.detail);
    };
  
    window.addEventListener("open-project", handler as EventListener);
  
    return () => {
      window.removeEventListener("open-project", handler as EventListener);
    };
  }, []);


  return (
    <>
      {activeMedia && (
          <ProjectModal
            media={activeMedia}
            onClose={() => setActiveMedia(null)}
          />
      )}
      <div className="max-w-5xl mx-auto mt-20">
        <HorizontalScrollProjects projects={projects} />
      </div>
      
      
    </>
  );
}

export default Page;
