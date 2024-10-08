
import { Wrapper } from "./wrapper";
import { Toggle, ToggleSkeleton, } from "./toggle";
import { recommendedUser } from "@/lib/recommended-services";
import { Recommended, RecommendedSkeleton } from "./recommended";


export const Sidebar = async () => {
  // const users = await recommendedUser();
  const users = await recommendedUser().catch(() => null);

  if (!users) {
    return <SidebarSkeleton />;
  }

  return (
    <>
      <Wrapper>
        <Toggle />
        <div className="space-y-4 pt-4 lg:pt-0">
          <Recommended data={users} />
        </div>
      </Wrapper>
    </>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col h-full w-[70px] lg:w-60 bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
