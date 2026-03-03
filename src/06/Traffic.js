import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";


export default function Traffic() {
    // 전체 fetch 데이터 저장
    const [tdata, setTdata] = useState();

    // 대분류 데이터
    const [c1, setC1] = useState();

    // 선택된 대분류
    const [selC1, setSelC1] = useState();

    // 대분류 데이터
    const [c2, setC2] = useState();

    // 선택된 중분류
    const [selC2, setSelC2] = useState();

    // 상세정보
    const [info, setInfo] = useState();

    const getFetchData = () => {
        // let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?';

        // url = `${url}page=1&perPage=10&serviceKey=${process.env.REACT_APP_API_KEY}`;

        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?page=1&perPage=10&serviceKey=412a745b255931160ddc2d1f0601d778721f262d999fdffd4f68e7660f88e82b';  

        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log("전체 응답:", data);
                setTdata(data.data);   // 여기서 정상 동작
            })
            .catch(err => console.log(err));
            }

    // 컴포넌트 생성 시 fetch 실행
    useEffect(() => {
        getFetchData();
    }, []);

    // tdata가 변경 되었을떄
    useEffect(() => {
        if(!tdata) return;

        // 대분류 데이터 추출
        let tm = tdata.map(item => item["사고유형_대분류"]);
        tm = [...new Set(tm)];
        console.log('대분류 데이터', tm);

        setC1(tm);

        console.log('tdata 변경', tdata);
    }, [tdata]);

    // 중분류 만들기
    useEffect(() => {
        if(!tdata || !c1 || !setC1) return;

        let tm = tdata.filter(item => item["사고유형_대분류"] === selC1)
                        .map(item => item["사고유형_중분류"]);
        console.log('중분류 데이터', tm);
        setC2(tm);
        
    }, [selC1]);

    useEffect(() => {
        if(!tdata || !c1 || !selC2) return;

        let tm = tdata.filter(item => item['사고유형_대분류'] === selC1 && item['사고유형_중분류'] === selC2)[0];
        console.log('선택 항목', tm); 

        const infoKeys = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];

        tm = infoKeys.map(item => <div key={item} className="flex">
            <div className="w-1/2 h-10 flex justify-center items-center bg-lime-600 text-white font-bold">{item}</div>
            <div className="w-1/2 h-10 flex justify-center items-center border">{parseInt(tm[item]).toLocaleString()}</div>
        </div>)

        setInfo(tm);
    }, [selC2]);

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            {c1 && <TrafficNav title="대분류" 
                                cat={c1} 
                                sel={selC1} 
                                setSel={setSelC1} />}
            {c2 && <TrafficNav title="중분류" 
                                cat={c2} 
                                sel={selC2} 
                                setSel={setSelC2} />}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                {info}
            </div>
        </div>
    )
}