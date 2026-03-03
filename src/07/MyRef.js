import TailButton from "../UI/TailButton"
import { useState , useRef, useEffect} from "react";


export default function MyRef() {
  const [sVal, setSVal] = useState(0);
  let cVal = 0;
  const rVal = useRef(0);

  const handleC = () => {
    cVal += 1;
    console.log("컴포넌트 변수 클릭 : " + cVal);
  }

  const handleS = () => {
    setSVal(sVal + 1);
  }

  const handleR = () => {
    rVal.current += 1;
    console.log("Ref 변수 클릭 : " + rVal.current);
  }

  useEffect(() => {
    console.log("state변수:",sVal);  

    }, [sVal]);

  return (
    <div className="w-10/12 flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-blue-700 font-bold text-center text-xl">
          컴포넌트 변수 : {cVal}
        </div>
        <div className="text-orange-700 font-bold text-center text-xl">
          State 변수 : {sVal}
        </div>
        <div className="text-red-700 font-bold text-center text-xl">
          Ref 변수 : {rVal.current}
        </div>
        <div>
          <TailButton caption="컴포넌트 변수" bgColor="blue" handClick={(handleC)} />
        </div>
        <div>
          <TailButton caption="State 변수" bgColor="orange" handClick={(handleS)} />
        </div>
        <div>
          <TailButton caption="Ref 변수" bgColor="red" handClick={(handleR)} />
        </div>
      </div>
    </div>
  )
}
 