import Tailbutton from "../UI/TailButton";

export default function TrafficNav({ title, cat, sel, setSel }) {

    // 버튼 클릭 이벤트
    const handClick = (item) => {
        setSel(item);
    };

    const cTag = cat.map((item) => (
        <Tailbutton
            key={item}
            caption={item}
            bgColor={sel === item ? 'orange' : 'blue'}
            handClick={() => handClick(item)}
        />
    ));

    return (
        <div className="w-full flex justify-between items-center my-5">
            <div className="w-1/5 flex justify-center items-center">
                교통사고 {title}
            </div>
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {cTag}
            </div>
        </div>
    );
}