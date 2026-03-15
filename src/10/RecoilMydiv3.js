import TailButton from "../UI/TailButton";
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";

export default function RecoilMydiv3({ d1, d2, d3 }) {
  const [n, setN] = useRecoilState(AtomN);
  
  const handleUp = () => {
    setN(n + 1);
    localStorage.setItem("n",n);
  }

  const handleDown = () => {
    setN(n - 1);
    localStorage.setItem("n",n);
  }

  // const handleSave = () => {
  //   localStorage.setItem("n",n);
  // }

  const handleRemove = () => {
    localStorage.removeItem("n",n);
    setN(0);
  }

  return (
    <>
      <div className="flex flex-col p-6 m-10 w-3/4 h-3/4 bg-lime-500 text-white">
        RecoilMydiv3: {d1} &gt; {d2} &gt; {d3}
        
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TailButton caption="증가" bgColor="blue" handleClick={handleUp} />
        <TailButton caption="감소" bgColor="red" handleClick={handleDown} />
        {/* <TailButton caption="저장" bgColor="blue" handleClick={handleSave} /> */}
        <TailButton caption="삭제" bgColor="red" handleClick={handleRemove} />
      </div>
    </>
  );
}
