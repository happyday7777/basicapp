import Mydiv3 from "./Mydiv3"


//export default function Mydiv2(probs) {
export default function Mydiv2({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 bg-lime-700 text-white">
        <div className="w-full h-10 flex justify-start items-center">
            {/* {probs.dn1} > {probs.dn2} */}
            {dn1} > {dn2}
        </div>
        <Mydiv3 d1={dn1} d2={dn2} d3={dn3}/>
    </div>
    
  )
}
