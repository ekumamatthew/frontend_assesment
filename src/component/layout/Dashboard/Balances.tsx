import { card1 } from "../../../data/dashboar_details";
import {
  DashboardCard2,
  DashboardCards,
} from "../../modules/cards/DashboardCards";

function Balances() {
  return (
    <div className=" p-[8px] flex gap-2 flex-wrap items-center md:items-start justify-center md:justify-start">
      <DashboardCards
        bg={"bg-[#032282]"}
        card_name={"Wallet Balance"}
        amount={50000.0}
        src={"/images/eye.png"}
        button1_name={"Add fund"}
        button2_name={"Withdraw"}
      />
      {card1.map((items) => {
        return <DashboardCard2 {...items} />;
      })}
    </div>
  );
}

export default Balances;
