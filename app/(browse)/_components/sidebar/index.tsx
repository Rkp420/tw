import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";
import { Recommended } from "./recommended";

import { recommendedUser } from "@/lib/recommended-services";

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

