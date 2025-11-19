import React from "react";
import ProjectItems from "../_components/ProjectItems";
import Timline from "../_components/Timline";
import { FlipWords } from "@/components/ui/lip-words";

function page() {
  const words = ["engineer", "developer"];

  return (
    <div className="  max-w-5xl mx-auto px-8  mt-8">
      
      <Timline />
    </div>
  );
}

export default page;
