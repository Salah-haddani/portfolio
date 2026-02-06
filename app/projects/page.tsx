/*"use client";
import React , { useEffect, useState } from "react";
// UPDATED IMPORT
import ProjectCarousel from "../_components/ProjectCarousel"; 
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
        "youtube:4eCeqY_yVZg",
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
        "youtube:AR2mc__y4rw",
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
        "youtube:sJez66c1Qu4",
      ]
    },
  ];

  // ✅ CORRECTED: Explicitly define state type as string[] or null
  const [activeMedia, setActiveMedia] = useState<string[] | null>(null);

  useEffect(() => {
    // Define the type for the custom event detail
    type ProjectDetail = string[] | null; 
    
    // Explicitly type 'e' as CustomEvent<ProjectDetail>
    const handler = (e: CustomEvent<ProjectDetail>) => {
      setActiveMedia(e.detail);
    };
  
    // Use the handler with EventListener cast
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
        <ProjectCarousel projects={projects} />
      </div>
    </>
  );
}
export default Page;
*/
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
        "youtube:4eCeqY_yVZg",
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
      title: "Landing Page",
      description:
        "an engaging and creative landing page to showcase a brand’s services, products.",
      image: "/sahara.png",
      link: "https://github.com/Salah-haddani/sahara",
      sourceCode: "",
      media: [
        "youtube:AR2mc__y4rw",
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
        "youtube:sJez66c1Qu4",
      ]
    },
    {
      title: "Ecommerce App",
      description:
        "modern e-commerce frontend UI for clothing with clean design and smooth interactions",
      image: "/store.png",
      link: "https://github.com/Salah-haddani/store",
      sourceCode: "",
      media: [
        "youtube:OJJQJ62CVPU",
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
      <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl  text-center mb-2 text-gray-900">
        Personal Projects
      </h2>
        <HorizontalScrollProjects projects={projects} />
      </div>
      
      
    </>
  );
}

export default Page;
