import { card2 } from "../../../data/dashboar_details";
import {
  DashboardCard3,
  DashboardCard4,
} from "../../modules/cards/DashboardCards";

function Transactions() {
  return (
    <div className="flex p-[8px] gap-2 flex-wrap items-center md:items-start  justify-center md:justify-start">
      {card2.map((items) => {
        return <DashboardCard3 {...items} />;
      })}
      <DashboardCard4 card_name="transaction Coperative" />
    </div>
  );
}

export default Transactions;
