import { formatCurrency } from "../../../utility/currencyFormart";
import Piechart from "../Piechart";
import {
  dashboard_card2,
  dashboard_card3,
  dashboard_card4,
  dashboard_cards,
} from "./cardTypes";

export const DashboardCards = (props: dashboard_cards) => {
  const { bg, card_name, amount, src, button1_name, button2_name } = props;
  return (
    <div
      className={`h-[151px] ${bg} rounded-[12px]  w-[98%] md:w-[24%] lg:w-[24%]  relative p-[16px]`}
    >
      <div className="w-[166px] h-[47px] retative top-[23px] left-[24px] flex flex-col ">
        <p className="leading-[19.1px] text-[14px] font-Nunito font-[400] w-[97px] h-[19px]">
          {card_name}
        </p>
        <div className="flex flex-row  mt-[4px]">
          <p className="leading-[25.2px] text-[20px] font-Sora font-[600] w-[126px] h-[25px]">
            {formatCurrency(amount)}
          </p>
          <img src={src} alt="" />
        </div>
      </div>

      <div className="flex flex-row items-start gap-5 relative w-full h-full mt-5 ">
        <button className=" bg-white/20 p-[8px] h-[40px] text-[14px] font-[600] relative rounded-[7px] justify-center items-center  text-center">
          {button1_name}
        </button>
        <button className="bg-white/20 p-[8px] h-[40px] text-[14px] font-[600] relative justify-center items-center  text-center rounded-[7px]">
          {button2_name}
        </button>
      </div>

      <img
        src="/images/Rectangle1.png"
        alt=""
        className="w-[50.95px] h-[54.13] rounded-[2px] absolute top-[0.11px] left-[173.85px] z-10"
      />
      <img
        src="/images/Rectangle2.png"
        alt=""
        className="w-[50.95px] h-[82.13]  rounded-[2px] absolute top-[0px] left-[213.85px] z-10"
      />
      <img
        src="/images/Rectangle3.png"
        alt=""
        className="w-[50.95px] h-[109.13] rounded-[2px] absolute top-[-5.11px] left-[217.85px] z-10"
      />
      <img
        src="/images/Rectangle4.png"
        alt=""
        className="w-[60.95px] h-[113.27]  rounded-[2px] absolute bottom-[0.11px] left-[233.85px] z-10"
      />
    </div>
  );
};

export const DashboardCard2 = (props: dashboard_card2) => {
  const { bg, card_name, amount, src, bg_2 } = props;
  return (
    <div
      className={`h-[154px] ${bg}  rounded-[12px] w-[98%] md:w-[24%] lg:w-[24%] items-center relative p-[6px]`}
    >
      <div
        className={`w-[166px] ${bg_2} w-full p-[4px]  rounded-[10px]  h-[104px] retative top-[23px] left-[24px] flex flex-col  justify-center gap-3 `}
      >
        <p className="leading-[19.1px] text-[#4F64A7] text-[14px] font-Nunito font-[400] w-[150px] h-[19px]">
          {card_name}
        </p>
        <div className="flex flex-col  mt-[4px]">
          <p className="leading-[25.2px] text-[#032282] text-[20px] font-Sora font-[600] w-[126px] h-[25px]">
            {formatCurrency(amount)}
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-3 h-[15px] ">
        <p className="text-[#032282]   text-[12px] font-[400] leading-[15px] font-Nunito">
          View Details
        </p>
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export const DashboardCard3 = (props: dashboard_card3) => {
  const {
    bg,
    card_name,
    tag1,
    tag2,
    tag3,
    tag4,
    tag1_amount,
    tag2_amount,
    tag3_amount,
    tag4_amount,
    bg_2,
  } = props;

  return (
    <div
      className={` ${bg}  rounded-[12px] w-[98%] md:w-[24%] lg:w-[24%]  items-center relative p-[6px]`}
    >
      <div
        className={`w-[166px] ${bg_2} w-full p-[7px]  rounded-[10px]   retative top-[23px] left-[24px] flex flex-col  justify-center gap-3 `}
      >
        <div className="flex flex-row justify-between items-start">
          <p className="leading-[15px] text-[#4F64A7] text-[14px] font-Sora font-[500] w-[150px] h-[19px]">
            {card_name}
          </p>
          <button className="w-[77px] h-[30px] text-[#032282] bg-[#EAF4FF] flex flex-row rounded-[6px] text-[12px] leading-[15px] font-Nunito font-[500]">
            More <img src="/images/icon_down.png" />
          </button>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col  mt-[4px]">
            <div className="flex flex-row gap-[2px] items-start">
              <div
                className={`${
                  props.tag1 === "successful"
                    ? "bg-green-500 rounded-full h-[8px] w-[8px] mt-[4px]"
                    : "hidden"
                }`}
              />
              <p className="leading-[15px] text-[#4F64A7] text-[12px] font-Nunito font-[400] w-[126px] h-[25px]">
                {tag1}
              </p>
            </div>
            <p className="leading-[31px] text-[#032282] text-[16px] md:text-[14px] font-Sora font-[600] w-[126px] h-[25px]">
              {formatCurrency(tag1_amount!)}
            </p>
          </div>
          <div className="flex flex-col  mt-[4px]">
            <div className="flex flex-row gap-[2px] items-start">
              <div
                className={`${
                  props.tag2 === "failed"
                    ? "bg-red-500 rounded-full h-[8px] w-[8px] mt-[4px]"
                    : "hidden"
                }`}
              />
              <p className="leading-[15px] text-[#4F64A7] text-[12px] font-Nunito font-[400] w-[126px] h-[25px]">
                {tag2}
              </p>
            </div>
            <p className="leading-[31px] text-[#032282] text-[16px] md:text-[14px] font-Sora font-[600] w-[126px] h-[25px]">
              {formatCurrency(tag2_amount!)}
            </p>
          </div>
        </div>
        <div
          className={`${
            props.tag3 === undefined ? "hidden" : ""
          } flex flex-row justify-between`}
        >
          <div className="flex flex-col  mt-[4px]">
            <p className="leading-[15px] text-[#4F64A7] text-[12px] font-Nunito font-[400] w-[126px] h-[25px]">
              {tag3}
            </p>
            <p className="leading-[31px] text-[#032282] text-[16px] md:text-[14px] font-Sora font-[600] w-[126px] h-[25px]">
              {formatCurrency(tag3_amount!)}
            </p>
          </div>
          <div className="flex flex-col  mt-[4px]">
            <p className="leading-[15px] text-[#4F64A7] text-[12px] font-Nunito font-[400] w-[126px] h-[25px]">
              {tag4}
            </p>
            <p className="leading-[31px] text-[#032282] text-[16px] md:text-[14px] font-Sora font-[600] w-[126px] h-[25px]">
              {formatCurrency(tag4_amount!)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DashboardCard4 = (props: dashboard_card4) => {
  const { card_name } = props;
  return (
    <div className=" h-[402px] md:h-[208px] flex flex-col md:flex-row md:w-[598px] w-[98%] rounded-[10px] p-[18px] items-start bg-[#fff]">
      <div>
        <p className="font-Nunito font-[600] text-[#37474F] text-[16px] leading-[15px] w-[185px] h-[15px]">
          {card_name}
        </p>
        <div className="mt-3">
          <div className="font-Nunito flex gap-[3px] flex-row font-[500] text-[10px] leading-[15px] text-[#37474F]">
            <div className="rounded-full bg-[#032282] h-[8px] w-[8px] mt-[3px]" />
            <p>Send money</p>
          </div>
          <p className="font-Sora font-[600] text-[16px] leading-[31px] text-[#263238]">
            ₦105,000,000
          </p>
        </div>
        <img src="images/Line.png" className="h-[2px] w-full" />
        <div className="flex flex-row gap-5 mt-[10px]">
          <div className="flex flex-col items-start">
            <div className="font-Nunito flex gap-[3px] flex-row font-[500] text-[10px] leading-[15px] text-[#37474F]">
              <div className="rounded-full bg-[#F4BE38] h-[8px] w-[8px] mt-[3px]" />
              <p>Send money</p>
            </div>
            <p className="font-Sora font-[600] text-[16px] leading-[31px] text-[#263238]">
              ₦12,000,000
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-Nunito flex gap-[3px] flex-row font-[500] text-[10px] leading-[15px] text-[#37474F]">
              <div className="rounded-full bg-[#EDE1FF] h-[8px] w-[8px] mt-[3px]" />
              <p>Send money</p>
            </div>
            <p className="font-Sora font-[600] text-[16px] leading-[31px] text-[#263238]">
              ₦4,200,000
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[20px] md:mt-0">
        <Piechart />
      </div>
    </div>
  );
};
