import { Link } from "react-router-dom";
import './Faal.css';
import {useState, useEffect } from "react";

const FEATURED_API="https://ganjgah.ir/api/ganjoor/hafez/faal";
const Faal=()=>{

    const [faal,setPoem]=useState([]);
        useEffect(()=>{
            fetch(FEATURED_API)
            .then((res)=>res.json())
            .then((data)=>{
                setPoem(data);
                let mp3Url=data.recitations["0"]["mp3Url"];
                let audio=document.getElementById("audio");
                audio.innerHTML=`<source src="${mp3Url}" type="audio/mpeg"></source>`;
            });
    },[]);
    
    return(
        <div className="Faal">
            <div className="container">
                <div className="faal-box">
                    <h1 className="faal-name">{faal.title}</h1>
                    <p className="faal-text">{faal.plainText}</p>
                    <div className="faal-audio" >
                        <audio controls id="audio"></audio>
                    </div>
                </div>
                <div className="tafsir-box">
                    <h3>:ای صاحب فال</h3>
                    <p>خود را مأیوس و افسرده می بینی و از 
                        بدخواهی دشمن شکوه و شکایت داری.
                         خود را نباز و دل به تقدیر بسپار.
                         هر چه خیر است پیش می آید. 
                         به خدا توکل کن و با دوستان
                         دانا مشورت کن
                          تا راه چاره ای پیدا شود.</p>
                </div>
                <button className="main-page-btn"><Link to="/">باز گشت به صفحه اصلی</Link></button>
            </div>
        </div>
    )
}

export default Faal;