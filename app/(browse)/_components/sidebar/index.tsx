
import { Wrapper } from "./wrapper";
import { Toggle, ToggleSkeleton, } from "./toggle";
import { recommendedUser } from "@/lib/recommended-services";
import { Recommended, RecommendedSkeleton } from "./recommended";


export const Sidebar = async () => {
  const users = await recommendedUser();
  return (
    <>
      <Wrapper>
        <Toggle />
        <div className="pt-4 sm:pt-0 space-y-4">
          <Recommended data={users} />
        </div>
      </Wrapper>
    </>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col h-full w-[70] lg:w-60 bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
