import {
    FaImages,
    FaCoins,
    FaUsers,
    FaRocketchat,
    FaCogs,
    FaTools,
} from "react-icons/fa";
import {
    BsFillCartPlusFill,
    BsFillCartDashFill,
    BsFillTrophyFill
} from "react-icons/bs";

export const SidebarList = [
    {
        title: "Deposit USDT",
        to: "/deposit-usdt-table/admin",
        icon: BsFillCartPlusFill,
    },
    {
        title: "Deposit USDC",
        to: "/deposit-usdc-table/admin",
        icon: BsFillCartPlusFill,
    },
    {
        title: "Withdraw USDT",
        to: "/withdraw-usdt-table/admin",
        icon: BsFillCartDashFill,
    },
    {
        title: "Withdraw USDC",
        to: "/withdraw-usdc-table/admin",
        icon: BsFillCartDashFill,
    },
    {
        title: "Reward",
        to: "/Reward/admin",
        icon: BsFillTrophyFill,
    },
    // {
    //     title: "Profit Chart",
    //     to: "/profitchart",
    //     icon: FaRocketchat,
    // },
    // {
    //     title: "Setting",
    //     to: "/setting",
    //     icon: FaCogs,
    // },
];
