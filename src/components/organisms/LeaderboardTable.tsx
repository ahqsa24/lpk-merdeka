import React from "react";
import { AvatarWithName } from "../molecules";
import { LineHeading } from "../molecules";

interface LeaderboardEntry {
  id: number;
  title: string;
  description: string;
  avatar: string;
  score: number;
}
interface LeaderboardProps {
  data: LeaderboardEntry[];
}
export const LeaderboardTable: React.FC<LeaderboardProps> = ({ data }) => (
  <section className="p-8 bg-white rounded-2xl">
    <LineHeading title="Leaderboard"/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 py-16 gap-6">
      {data.map(entry => (
        <div key={entry.id} className="flex items-center justify-between p-4 border rounded-xl">
          <AvatarWithName src={entry.avatar} title={entry.title} description={entry.description} />
          <span className="font-bold text-red-600 text-lg">{entry.score}</span>
        </div>
      ))}
    </div>
  </section>
);