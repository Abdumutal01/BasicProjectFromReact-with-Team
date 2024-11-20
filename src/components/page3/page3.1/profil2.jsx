import React from "react";
import "./profil2.css"
import { Link } from "react-router-dom";
import man from '../img/man.png'
import w1 from '../img/w1.png'
import w2 from '../img/w2.png'
import table from '../img/table.png'

function Profil2() {
    return (
        <>
            <div className="profil2__main__container">
                <div className="profil2__general2__general">
                    <div className="profil1__part1">
                        <div className="part1__items">
                            <img src={man} alt="" />
                            <div className="part1__text">
                                <h6>Obidjonov Behruzbek</h6>
                                <h6>+998 33 152 80 62</h6>
                                <h6>bolaoddiy143@gmail.com</h6>
                                <h6>Ro’li: Dasturchi</h6>
                            </div>

                            <Link
                                className="settingLink"
                                to="/page4"
                            >
                                <img
                                    className="settingImg"
                                    src="https://s3-alpha-sig.figma.com/img/f609/7af6/82cfa2080d2a64d815377895327ea8fc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e3ljhBpTz65OiVoKY~isM-SSTGBh90c6aQ3POcj6w4~j5Amtiwqk~sUoccTAP0vnq-sZYNxcmxUVJRrjdLmx4Ou0F818lqIhMU6FbA7ICKKqz~EhAByOoEVe25CYh0zg98BYMW~kyziPW~W3Byp71g9yxKnr9an5oFhFlTIgZkGvuy74UL2S93LSgz5L5ZJ17k9u7nz6jLV4igMyCeiixjK32aWk6z52SbKbleJraEsgJey~V5yEA~ILrttvkymo-1Dag7zgMe5cmDfEyCE4ebY9koq~ryx1lV-OgfVWRVpqdWjXHQf1RLmnr8rrWc3MTLVxsawioDm-XdgoMOEECw__"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="general__text">
                            <h3>Ob havo malumoti</h3>
                            <h6>Andijon v Paxtaobod tumani</h6>
                            <h6>Harorat :  16 C </h6>
                            <h6>Namlik :    50%</h6>
                            <h6>Yog’ingarchilik :  Kutilmoqda</h6>
                        </div>
                        <div className="weather">
                            <img src={w1} alt="" />
                            <img src={w2} alt="" />
                            <img src={w1} alt="" />
                            <img src={w2} alt="" />
                            <img src={w2} alt="" />
                            <img src={w1} alt="" />
                        </div>
                    </div>
                    <div className="profil2__part2">
                        <h4 className="title">Men haqimda to’liq ma’lumot</h4><br /><br />
                        <input className="inp" type="text" placeholder="Obidjonov" />
                        <input className="inp" type="text" placeholder="Obidjonov" />
                        <input className="inp" type="text" placeholder="Obidjonov" />
                        <input className="inp" type="text" placeholder="Obidjonov" /><br /><br />
                        <button className="btn">Tasdilash</button>
                    </div>
                </div>



                <div className="hehe__general">
                    <div className="general2__part1">
                        <div className="part1__line12">
                            <img src={table} alt="" />
                            <p>Meni fikrimcha sizning hosilingiz uchun suv <br />Meni fikrimcha sizning hosilingiz uchun  <br />Meni fikrimcha sizning hosilingiz   </p>
                        </div><br />
                        <div className="part1__line12">
                            <img src={table} alt="" />
                            <p>Meni fikrimcha sizning hosilingiz uchun suv <br />Meni fikrimcha sizning hosilingiz uchun  <br />Meni fikrimcha sizning hosilingiz   </p>
                        </div><br />
                        <div className="part1__line12">
                            <img src={table} alt="" />
                            <p>Meni fikrimcha sizning hosilingiz uchun suv <br />Meni fikrimcha sizning hosilingiz uchun  <br />Meni fikrimcha sizning hosilingiz   </p>
                        </div>
                    </div>

                    <div className="profil2__part2">
                        <h4 className="title">Men haqimda to’liq ma’lumot</h4><br /><br />


                        <input className="inp" type="text" placeholder="Obidjonov" />
                        <input className="inp" type="text" placeholder="Obidjonov" />
                        <div className="inp__general">
                            <input className="inp" type="text" placeholder="Obidjonov" />
                            <input className="inp" type="text" placeholder="Obidjonov" />
                        </div>
                        <div className="inp__general">
                            <input className="inp" type="text" placeholder="Obidjonov" />
                            <input className="inp" type="text" placeholder="Obidjonov" />
                        </div>

                        <br /><br />
                        <button className="btn">Tasdilash</button>
                    </div>
                </div>
            </div>
            <h2 className="last">Boshqalar siz haqizda ko’proq bilishi uchun ma’lumotlarni doimiy yangilab turing! </h2>
        </>
    )
}

export default Profil2;