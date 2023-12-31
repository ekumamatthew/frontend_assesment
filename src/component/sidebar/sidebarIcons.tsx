import { sidebarIcon } from "./sidebar";

function SidebarIcons(SideBarProps: sidebarIcon) {
  const { icon, name, top, src } = SideBarProps;
  return (
    <div
      className={`flex flex-row items-start gap-1 relative ${top}  font-Nunito font-[600] text-[14px] leading-[19.1px] justify-between `}
    >
      <div className="flex flex-row gap-1">
        <img src={icon} />
        <a href="#" className="no-underline text-white text-[14px] font-[600]">
          {name}
        </a>
      </div>
     <img src={src} />
    </div>
  );
}

export default SidebarIcons;
