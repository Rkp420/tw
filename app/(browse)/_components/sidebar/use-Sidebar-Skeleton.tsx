import { cn } from "@/lib/utils";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col h-full w-[70] lg:w-60 bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
