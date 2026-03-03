import { useParams } from "react-router-dom"

export default function RoutePage1() {
  const item = useParams().item;

  const fruits = ["사과", "바나나", "오렌지"];


  return (
    <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">RoutePage1</h1>
        <div>
            {fruits.includes(item) ? <p className="text-green-600 text-xl">{item}은 과일입니다.</p> : <p className="text-red-600 text-xl">{item}은 과일이 아닙니다.</p>}
        </div>
        RoutePage1: {item}
    </div>
  )
}
