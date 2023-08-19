
function Header() {
  return (
    <div className="flex flex-row items-center justify-between">
      <p className="text-white font-[500] text-[18px] leading-[20px] font-Nunito">
        Analytics dashboard
      </p>
      <button className="bg-[#2D4696] text-white text-center justify-center flex flex-col items-center rounded-md w-[87px] h-[36px]">
        Menu
      </button>
    </div>
  );
}

export default Header;
