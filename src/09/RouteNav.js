import TailButton from "../UI/TailButton"
import {useNavigate} from "react-router-dom";

export default function RouteNav() {
    const navigate = useNavigate();

    return (
    <div className="w-10/12 grid grid-cols-3 m-5">
        <TailButton caption="Home" bgColor="blue" handClick={() => navigate("/")} />
        <TailButton caption="Page1" bgColor="blue" handClick={() => navigate("/p1")} />
        <TailButton caption="Page2" bgColor="blue" handClick={() => navigate("/p2")} />
    </div>
    )
}
