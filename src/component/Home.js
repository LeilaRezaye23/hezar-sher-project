import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home= (props)=>{
    return(
        <div className="Home">
            <div className="header">
                <div className="header-logo">
                    <img src={props.logo}></img>
                </div>
                <nav className="navbar">
                    <ul className="navbar-items">
                        <li> <Link to="/Faal">فال حافظ</Link> </li>
                        <li> <Link to="/Ganjine">گنجینه اشعار</Link></li>
                        <li> <Link to="/About">درباره ما</Link> </li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                    <div className="home-bg"></div>
                    <div className="landing">
                        <div className="landing--img">
                            <img src={props.image}></img>
                        </div>
                        <div className="landing--details">
                            <div className="landing--text">
                                <p>تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و هنر، از دیرباز با شعر و ادبیات درهم پیچیده و ایران، مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و نشیب هایی که در طول تاریخ بر آن گذشته، اما شاهنامه وزین پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و عشق بازی اش با حق، غزل های عاشقانه و عارفانه عالم گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و بزرگش تسکین داده اند.</p>
                                <div className="landing--btns">
                                    <button> <Link to="/Faal">فال حافظ</Link> </button>
                                    <button> <Link to="/Ganjine">گنجینه اشعار </Link> </button>
                                </div>
                            </div>
                        
                        </div>
                    </div>
            </div>
           
        </div>
    )
}

export default Home;