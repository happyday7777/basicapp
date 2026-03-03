import TailButton from "../UI/TailButton";
import { useRef , useEffect} from "react";

export default function MyRefAdd() {
    const x1 = useRef();
    const x2 = useRef();
    const x3 = useRef();

    const handleAdd = () => {
        if(x1.current.value === '' || x2.current.value === '') {
            alert("첫번째 숫자를 입력하세요");
            x1.current.focus();
            return;
        }
        if(x2.current.value === '') {
            alert("두번째 숫자를 입력하세요");
            x2.current.focus();
            return;
        }
        x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value);
    }  

    const handelFocus = (x) => {
        x.current.value = '';
        x3.current.value = '';
    }

    useEffect(() => {
        x1.current.focus();
        }, []);

    return (
    <div className="w-10/12 flex justify-center items-center">
        <div className="bg-slate-50 grid grid-cols-5 gap-2 m-5 p-5">
            <div>
                <input type='number' id='txt1' 
                        ref={x1} 
                        onFocus={() => handelFocus(x1)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 round-lg text-xl p-2.5"/>
                <div className="flex justify-center items-center text-xl font-bold">
                    +
                </div>
                <input type='number' id='txt2' 
                        ref={x2} 
                        onFocus={() => handelFocus(x2)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 round-lg text-xl p-2.5"/>
                <TailButton caption="=" bgColor="orange" handClick={(handleAdd)} />
                <input type='number' id='txt3' 
                        ref={x3} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 round-lg text-xl p-2.5"/>
            </div>
        </div>
    </div>
  )
}
