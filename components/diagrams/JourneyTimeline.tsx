
"use client";

import { JourneyCard } from "@/components/cards/JourneyCard";
import { journeyStages } from "@/data/journey";

export function JourneyTimeline() {
  return (
    <div>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] tracking-[.2em] text-cyan-300">
            THE JOURNEY
          </p>

          <h3 className="mt-2 text-xl font-semibold text-slate-100 sm:text-2xl">
            Learn. Build. Deploy. Improve.
          </h3>
        </div>

        <span className="font-mono text-[9px] tracking-[.15em] text-slate-600">
          {String(journeyStages.length).padStart(2, "0")} STAGES
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {journeyStages.map((item, index) => (
          <JourneyCard
            key={item.number}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
