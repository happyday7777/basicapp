import { useLocation, useSearchParams } from "react-router-dom";

export default function RoutePage2() {
    const loc = useLocation();
    
    console.log('useLocation pathname : ',loc.pathname);
    console.log('useLocation search : ',loc.search);

    const [searchParams] = useSearchParams();

    console.log('searchParams search : ',searchParams);


    const qlist = [...searchParams];

    console.log('qlist : ',qlist);

    const fruits = ["사과", "바나나", "오렌지"];

    const list = qlist.map(item => {
        return (
            <li key={item[0]}>
                {item[1]} : {fruits.includes(item[1]) ? <span className="text-green-600 text-xl">과일임</span> : <span className="text-red-600 text-xl">과일아님</span>}
            </li>
        )
    })

  return (
    <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">RoutePage2</h1>
        <ul>
            {list}
        </ul>

    </div>
  )
}
