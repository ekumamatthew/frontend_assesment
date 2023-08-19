import HeaderBar from "./Header/HeaderBar";
import Header from "./Header/Header";

function HeaderIndex(): JSX.Element {
  return (
    <div className="w-screen md:hidden flex flex-col p-[15px]   bg-[#032282]  h-[109px]">
      <HeaderBar />
      <Header />
    </div>
  );
}

export default HeaderIndex;
