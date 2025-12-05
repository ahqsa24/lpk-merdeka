import React from "react";
import { HeroSection } from "../organisms/HeroSection";
import { ProgramGrid } from "../organisms/ProgramGrid";
import { StatsGrid } from "../organisms"
import { LeaderboardTemplate } from "./LeaderboardTemplate";
import { TestimoniSection } from "../organisms/TestimoniSection";

type ProgramType = {
  id: number;
  name: string;
  description: string;
};

type HomeTemplateProps = {
  programs: Array<ProgramType>;
};

export const HomeTemplate = ({ programs }: HomeTemplateProps) => {
  const programItems = programs.map((program) => ({
    id: program.id,
    title: program.name,
    img: "",
    desc: "",
  }));
  
  return (
  <main className="mx-auto min-h-screen w-full">
    <div className="bg-red-50">
      <HeroSection />
    </div>
      <ProgramGrid list={programItems} />
      <StatsGrid />
      <TestimoniSection />
      <LeaderboardTemplate data={[
        {
          id: 1,
          title: "Ahmad Rizki",
          description: "Full Stack Developer",
          avatar: "https://via.placeholder.com/56",
          score: 950
        },
        {
          id: 2,
          title: "Siti Nurhaliza",
          description: "Data Scientist",
          avatar: "https://via.placeholder.com/56",
          score: 920
        },
        {
          id: 3,
          title: "Budi Santoso",
          description: "UI/UX Designer",
          avatar: "https://via.placeholder.com/56",
          score: 890
        }
      ]} />
  </main>
  )
};