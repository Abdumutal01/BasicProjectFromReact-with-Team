import React from "react";
import './profil1.css'
import man from '../img/man.png'
import w1 from '../img/w1.png'
import w2 from '../img/w2.png'
import gal from '../img/galery.png'
import cam from '../img/camera.png'
import v1 from '../img/v1.png'
import v2 from '../img/v2.png'
import v3 from '../img/v3.png'
import ai from '../img/ai.png'
import table from '../img/table.png'
import red from '../img/red.png'
import green from '../img/green.png'
import yellow from '../img/yellow.png'
import linelar from '../img/linelar.jpg'
import { Link } from "react-router-dom";

function Profil1() {
    return (
        <>
            <div className="profil1__main__container">
                <div className="profil1__general__general">
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
                    <div className="profil1__part2">
                        <div className="part2__line1">
                            <h2>Mening hosilim</h2>
                            <h6>Rasm yuklash orqali hosilingiz <br /> haqida ko’proq bilib oling</h6>
                            <div className="for__imgs">
                                <img src={gal} alt="" />
                                <img src={cam} alt="" />
                            </div>
                        </div>
                        <hr />
                        <div className="part2__line2">
                            <img src={v1} alt="" />
                            <img src={v2} alt="" />
                            <img src={v3} alt="" />
                        </div>
                        <hr />
                        <div className="part2__line3">
                            <img src={ai} alt="" />
                            <div className="line__text">
                                <h2>Suniy intelekt yoradmida hosilni <br /> parvarishlang</h2>
                                <h6>Sun'iy intellektning qishloq xo‘jaligidagi afzalliklari cheksiz bo'lib, <br /> hosildorlikni oshirish, resurslarni tejash, va zararkunandalarga qarshi <br /> kurashish uchun innovatsion yechimlarni taqdim etadi.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profil1__general2">
                    <div className="general2__part1">
                        <div className="part1__line1">
                            <img src={table} alt="" />
                            <p>Meni fikrimcha sizning hosilingiz uchun suv <br />Meni fikrimcha sizning hosilingiz uchun  <br />Meni fikrimcha sizning hosilingiz   </p>
                        </div><br />
                        <div className="part1__line1">
                            <img src={table} alt="" />
                            <p>Meni fikrimcha sizning hosilingiz uchun suv <br />Meni fikrimcha sizning hosilingiz uchun  <br />Meni fikrimcha sizning hosilingiz   </p>
                        </div><br />
                        <div className="part1__line1">
                            <img src={table} alt="" />
                            <p>Meni fikrimcha sizning hosilingiz uchun suv <br />Meni fikrimcha sizning hosilingiz uchun  <br />Meni fikrimcha sizning hosilingiz   </p>
                        </div>
                    </div>
                    <div className="general2__part2">
                        <h5>Bozor statistikasi</h5>
                        <p>Mahsulorlarni kunlik manitoring holati</p>
                        <div className="part2__imgs__general">
                            <div className="small__imgs">
                                <div className="small__line">
                                    <img src={green} alt="" />
                                    <h4>Qulupnay</h4>
                                </div>
                                <div className="small__line">
                                    <img src={yellow} alt="" />
                                    <h4>Pomidor</h4>
                                </div>
                                <div className="small__line">
                                    <img src={red} alt="" />
                                    <h4>Bodring</h4>
                                </div>
                            </div>
                            <img src={linelar} alt="" />
                        </div>
                    </div>
                </div>
                <h2 className="last">Boshqalar siz haqizda ko’proq bilishi uchun ma’lumotlarni doimiy yangilab turing! </h2>
            </div>
        </>
    )
}
export default Profil1;