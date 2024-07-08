
import {Navbar} from "./_components/navbar";

const BrowseLayout = function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-full pt-20">{children}</div>
    </>
  );
};

export default BrowseLayout;
