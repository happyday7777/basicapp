import { Link } from "react-router-dom";

export default function RouteHome() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">RouteHome</h1>
        <div className="w-1/2 grid grid-cols-2 m-10 ">
            <div className="w-full flex flex-col m-2 p-2 justify-start items-center">
                <h2>Page1 값전달</h2>
                <ul>
                    <li><Link to="/p1/사과">사과</Link></li>
                    <li><Link to="/p1/바나나">바나나</Link></li>
                    <li><Link to="/p1/오렌지">오렌지</Link></li>
                    <li><Link to="/p1/오이">오이</Link></li>
                </ul>
            </div>
            <div className="w-full flex flex-col m-2 p-2 justify-start items-center">
                <h2>Page2 값전달</h2>
                <ul>
                    {/* <li><Link to="/p2?item=사과">사과</Link></li>
                    <li><Link to="/p2?item=바나나">바나나</Link></li>
                    <li><Link to="/p2?item=오렌지">오렌지</Link></li>
                    <li><Link to="/p2?item=오이">오이</Link></li> */}
                    <li><Link to="/p2?item1=사과&item2=바나나&item3=오렌지&item4=오이">사과,바나나,오렌지,오이</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
