function HeaderBar(): JSX.Element {
  return (
    <div className="flex flex-row justify-between">
      <div className="font-[600] text-white text-[15px] text-center flex flex-row gap-[6px] h-[44px] leading-[20px]">
        <p>4:44</p>
        <img
          src="images/location.png"
          alt="location"
          className="h-[14px] w-[14px] mt-1"
        />
      </div>
      <div className="flex flex-row gap-1">
        <img
          src="images/signal.png"
          alt="signal"
          className="h-[14px] w-[21px] mt-1"
        />
        <img
          src="images/wifi.png"
          alt="wifi"
          className="h-[14px] w-[15px] mt-1"
        />
        <img
          src="images/battery.png"
          alt="battery"
          className="h-[14px] w-[32px] mt-1"
        />
      </div>
    </div>
  );
}

export default HeaderBar;
