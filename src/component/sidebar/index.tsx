import { sidebar } from "../../data/sidebar";
import SidebarIcons from "./sidebarIcons";

function SideBarIndex() {
  return (
    <div className="flex flex-col justify-start p-[4px] relative">
      <div>
        <p className="font-[Clash Display] font-[700] text-[32px] relative top-[54px] leading-[39.2px] text-[#fff]">
          Paybox
        </p>
        <p className="font-[Clash Display] font-[400] text-[12px] relative top-[60px]  leading-[14.76px] text-[#fff]">
          by LibertyPay
        </p>
      </div>
      <div className="flex flex-col gap-y-4 mt-[50px]">
        {sidebar.map((list) => {
          return <SidebarIcons {...list} />;
        })}
      </div>
    </div>
  );
}

export default SideBarIndex;
