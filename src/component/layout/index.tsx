import DesktopHeader from "../header/desktopHeader/DesktopHeader";
import SideBarIndex from "../sidebar";
import Balances from "./Dashboard/Balances";
import Transactions from "./Dashboard/Transactions";

function DashboardIndex() {
  return (
    <div
      className={`md:flex   md:overflow-x-hidden md:w-full   md:flex-row md:bg-[#07112D] md:p-[30px]`}
    >
      <div className="hidden md:block w-[17%]">
        <SideBarIndex />
      </div>
      <div className="overflow-y-auto   w-full md:rounded-[30px] overflow-x-hidden gap-y-1 bg-[#F8F9FB] lg:p-4 relative items-center">
        <DesktopHeader />
        <Balances />
        <Transactions />
      </div>
    </div>
  );
}

export default DashboardIndex;
