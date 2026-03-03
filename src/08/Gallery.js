import GalleryCard from "./GalleryCard";
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const [tdata, setTdata] = useState([]);
  const [cards, setCards] = useState([]);
  const inRef = useRef();

  const gerFetchData = async () => {
    let url =
      "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=412a745b255931160ddc2d1f0601d778721f262d999fdffd4f68e7660f88e82b&numOfRows=9&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A";

    url = `${url}&keyword=${encodeURIComponent(
      inRef.current.value
    )}&_type=json`;
    console.log(url);

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
           setTdata(data.response.body.items.item);
        })
        .catch((err) => console.log(err));
  };

  const handleOK = (e) => {
    e.preventDefault();

    if (!inRef.current.value) {
      alert("키워드를 입력하세요");
      inRef.current.focus();
      return;
    }

    gerFetchData();
  };

  const handleCancle = () => {
    inRef.current.value = "";
    setTdata([]);
    inRef.current.focus();
  };

  useEffect(() => {
    inRef.current.focus();
  }, []); 

  useEffect(() => {
    let tm = tdata.map((item) => <GalleryCard key={item.galContentId} item={item} />);
    
    setCards(tm);
  } , [tdata]);

  return (
    <div>
      <div className="w-full h-full flex flex-col justify-start items-center">
        <form className="w-full flex h-24 justify-center items-center">
          <div>
            <input
              type="text"
              id="txt1"
              ref={inRef}
              className="form-input rounded w-full border p-2"
            />
          </div>
          <div className="ml-3">
            <TailButton caption="확인" bgColor="blue" handClick={handleOK} />
            <TailButton caption="취소" bgColor="red" handClick={handleCancle} />
          </div>
        </form>

        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {cards}
        </div>
      </div>
    </div>
  );
}