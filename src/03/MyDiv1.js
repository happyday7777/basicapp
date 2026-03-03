import Mydiv2 from "./Mydiv2";

export default function MyDiv1() {

    const d1 = "div1";
    const d2 = "div2";
    const d3 = "div3";

    return(
        <div className="flex flex-col p-5 justify-center items-center w-2/3 h-3/2 text-2xl bg-lime-900">
            <div className="w-full h-10 flex justify-start items-center">
                {d1}
            </div>
            <Mydiv2 dn1={d1} dn2={d2} dn3={d3}/>
        </div>
    );
}