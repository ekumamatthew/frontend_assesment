function DesktopHeader() {
  return (
    <div className="h-[131px] hidden rounded-[30px] md:flex flex-row justify-between items-start p-[30px]">
      <div>
        <p className="font-Nunito font-[600] text-[24px] leading-[32px] text-[#242424]">
          Analytics dashboard
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img src="images/bell.png" />
        <img src="images/user.png" />
        <div className="flex flex-col ml-2">
          <p className="font-[700] font-Nunito text-[14px] leading-[19.1px] text-center text-[#000000]">
            Dexter Olaniyi
          </p>
          <p className="font-[400] font-Nunito text-[10px] leading-[13.64px] text-center text-[#818181]">
            Dexterola@gmail.com
          </p>
        </div>
        <img src="images/Icon.png" />
      </div>
    </div>
  );
}

export default DesktopHeader;
