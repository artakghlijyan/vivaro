import React, { useState, useEffect } from "react";
import styles from "./Hider.module.css";
import { BiLogoTelegram } from "react-icons/bi";
import { BsGiftFill } from "react-icons/bs";
// import nkos from "../../components/hider/flagrashn.jpeg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiSolidBell } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { MdPerson3 } from "react-icons/md";
import { VscClose } from "react-icons/vsc";
import { AiOutlineCheck } from "react-icons/ai";
import ReactFlagsSelect, { Us } from "react-flags-select";
import { AiOutlineClose } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { AiOutlineTrophy } from "react-icons/ai";
import { GiDragonBalls } from "react-icons/gi";
import { IoAlarmOutline } from "react-icons/io5";
import { AiOutlineFileSync } from "react-icons/ai";
import { BsRecord2 } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa";
import { PiSketchLogoLight } from "react-icons/pi";
import { TbCardsFilled } from "react-icons/tb";
import { GiCarWheel } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { TbPokerChip } from "react-icons/tb";
import { GiLampreyMouth } from "react-icons/gi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { GiCubeforce } from "react-icons/gi";
import { VscVm } from "react-icons/vsc";
import { CgChevronRight } from "react-icons/cg";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { GiCard10Spades } from "react-icons/gi";
import { FaHorseHead } from "react-icons/fa6";
import { AiTwotoneAppstore } from "react-icons/ai";
import { GiBoneKnife } from "react-icons/gi";
import { IoTriangle } from "react-icons/io5";
import { MdHdrPlus } from "react-icons/md";





const Hider = () => {
  const [time, setTime] = useState(new Date());
  const [selected, setSelected] = useState("RU");
  const [selecteded, setSelecteded] = useState("RU");
  const [selectededo, setSelectedo] = useState("GB");

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const [vxod, setVxod] = useState(false);
  const [registr, setRegistr] = useState(false);
  const [namak, setNamak] = useState(false);
  const [kolo, setKolo] = useState(false);
  const [kolo2, setKolo2] = useState(false);
  const [kolo3, setKolo3] = useState(false);
  const [chek, setChek] = useState(false);
  const [zabil, setZabil] = useState(false);
  const [mejizab, setMejizab] = useState(true);
  const [pochta, setPochta] = useState("sms");
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={styles.glx}>
      <div className={styles.vivaro1}>
        <div className={styles.hider1}>
          <img
            className={styles.vbetnkar}
            src="https://www.vbet.am/logo.svg?v=12/05/2023-17:40"
            alt=""
          />
        </div>
        <div className={styles.hider2}>
          <div className={styles.serigic}></div>
        </div>
        <div className={styles.hider3}>
          <span className={styles.partnor}>
            Официальный букмекерский партнёр
          </span>
          <a href="" className={styles.telegram}>
            <BiLogoTelegram />
          </a>
        </div>
        <div className={styles.hider4}>
          <div className={styles.depozitiej}>
            <div className={styles.surprize}>
              <a
                href=""
                className={styles.surprize2}
              >
                <BsGiftFill />
              </a>
            </div>
            <div className={styles.depozit}>
              <a
                className={styles.depozit2}
                href=""
              >
                Депозит
              </a>
            </div>
            <div className={styles.vxod}>
              <button
                onClick={() => {
                  setVxod(!vxod);
                  setRegistr("");
                  setNamak("");
                }}
                className={styles.vxodbuton}
              >
                Вход
              </button>
            </div>
            <div className={styles.registration}>
              <button
                onClick={() => {
                  setRegistr(!registr);
                  setVxod("");
                  setNamak("");
                }}
                className={styles.butonregistr}
              >
                Регистрация
              </button>
            </div>
            <div className={styles.selectfon}>
              <ReactFlagsSelect
                countries={["GB", "AM", "RU", "GE", "IR"]}
                selected={selected}
                className={styles.countrySelect}
                selectButtonClassName={styles.countrySelectButton}
                selectedSize={14}
                optionsSize={14}
                customLabels={{
                  GB: "ENG",
                  AM: "ARM",
                  RU: "RUS",
                  GE: "GEO",
                  IR: "FAS",
                }}
                onSelect={(code) => setSelected(code)}
              />
            </div>
            <div className={styles.time}>
              <div className={styles.jamacuyc}>
                <p>{time.toLocaleTimeString()}</p>
              </div>
            </div>
            <div className={styles.namak}>
              <div
                onClick={() => {
                  setNamak(!namak);
                  setVxod("");
                  setRegistr("");
                }}
                className={styles.namakdiv}
              >
                {namak ? (
                  <BiDotsHorizontalRounded className={styles.keter} />
                ) : (
                  <BiDotsVerticalRounded />
                )}
              </div>
            </div>
            {vxod ? (
              <div onClick={() => {}} className={styles.vxodgrancum}>
                {zabil ? (
                  <div className={styles.zabiliparol}>
                    <div className={styles.zabili2}>
                      <div className={styles.logo555}>
                        <img
                          width={"130px"}
                          height={"45px"}
                          src="https://www.vbet.am/logo.svg?v=12/05/2023-17:40"
                          alt=""
                        />
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.buter555}>
                          <button
                            onClick={() => {
                              setZabil(!zabil);
                            }}
                            className={styles.dizaynbut555}
                          >
                            Вход
                          </button>
                        </div>

                        <div
                          onClick={() => {
                            setVxod("");
                            setZabil("");
                          }}
                          className={styles.buter11}
                        >
                          <VscClose />
                        </div>
                      </div>
                    </div>
                    <div className={styles.zabili3}>
                      <h2 className={styles.zbros22}>Сброс пароля</h2>
                      <div className={styles.radio}>
                        <input
                          value={"sms"}
                          name="a"
                          type="radio"
                          checked={pochta == "sms"}
                          onChange={(e) => {
                            setPochta(e.target.value);
                          }}
                          className={styles.radioklor}
                        ></input>
                        <span className={styles.cmc}>CMC</span>
                      </div>
                      <div className={styles.radio1}>
                        <input
                          value={"email"}
                          name="a"
                          type="radio"
                          checked={pochta == "email"}
                          onChange={(e) => {
                            setPochta(e.target.value);
                          }}
                          className={styles.radioklor1}
                        ></input>
                        <span>эл.почта</span>
                      </div>
                    </div>
                    <div className={styles.zabili4}>
                      {pochta == "sms" ? (
                        <div className={styles.inpdiv22}>
                          <input
                            className={styles.inputart}
                            placeholder="Введите номер  телефона"
                            type="text"
                          />
                        </div>
                      ) : (
                        <div className={styles.pochtaart}>
                          <input
                            placeholder="эл.почта"
                            className={styles.inputart33}
                            type="text"
                          />
                        </div>
                      )}
                    </div>
                    <div className={styles.zabili5}>
                      <div className={styles.zbrospar}>
                        <span>Сброс</span>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className={styles.vxodgrancummej}>
                  <div className={styles.mejigranc1}>
                    <div className={styles.logo}>
                      <img
                        width={"130px"}
                        height={"45px"}
                        src="https://www.vbet.am/logo.svg?v=12/05/2023-17:40"
                        alt=""
                      />
                    </div>
                    <div className={styles.logo}>
                      <div className={styles.buter}>
                        <button
                          onClick={() => {
                            setRegistr(!registr);
                            setVxod("");
                          }}
                          className={styles.dizaynbut}
                        >
                          Регистрация
                        </button>
                      </div>
                      <div
                        onClick={() => {
                          setVxod("");
                        }}
                        className={styles.buter1}
                      >
                        <VscClose />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mejigranc2}>
                    <div className={styles.chek1}>
                      <span className={styles.spor}>Уже есть аккаунт?</span>
                      <p className={styles.avtor}>Авторизуйтесь, Мы ждём Вас</p>
                    </div>
                    <div className={styles.input011}>
                      <input
                        placeholder="Электронная почта/ логин"
                        className={styles.inport}
                        type="text"
                        id=""
                      />
                      <input
                        placeholder="Пароль"
                        className={styles.inport}
                        type="text"
                        id=""
                      />
                      <div
                        onClick={() => {
                          setChek(!chek);
                        }}
                        className={styles.chek}
                      >
                        <div
                          onClick={() => {
                            setChek(!chek);
                          }}
                          className={styles.chako}
                        >
                          {chek ? (
                            <div className={styles.chekguyn}>
                              <AiOutlineCheck />
                            </div>
                          ) : null}
                        </div>

                        <span className={styles.sp}>Запомнить меня</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mejigranc3}>
                    <button className={styles.butxod}>Вход</button>
                  </div>
                  <div className={styles.mejigranc4}>
                    <button
                      onClick={() => {
                        setZabil(!zabil);
                      }}
                      className={styles.zabparol}
                    >
                      Забыли пароль?
                    </button>
                  </div>
                  <div className={styles.mejigranc5}>
                    <MdPerson3 />
                    <span className={styles.iconikox}>
                      Свяжитесь со службой поддержки
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
            {registr ? (
              <div
                onClick={() => {
                  // setRegistr("");
                }}
                className={styles.registrdiv}
              >
                <div className={styles.registrdivs}>
                  <div className={styles.regis1}>
                    <div className={styles.divnk}>
                      <img
                        src="https://www.vbet.am/logo.svg?v=12/05/2023-17:40"
                        alt=""
                      />
                    </div>

                    <div className={styles.vxodik11}>
                      <button
                        onClick={() => {
                          setVxod(!vxod);
                          setRegistr("");
                        }}
                        className={styles.doxv}
                      >
                        Вход
                      </button>
                      <AiOutlineClose
                        onClick={() => {
                          setRegistr("");
                        }}
                        cursor={"pointer"}
                        color="white"
                        fontSize={"20px"}
                      />
                    </div>
                  </div>
                  <div className={styles.regis2}>
                    <a
                      href=""
                      className={styles.regnkar}
                    >
                      <img
                        className={styles.nkarmar}
                        width={"100%"}
                        src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_b43828031a64fd44ede9aa44f6419526.webp"
                        alt=""
                      />
                    </a>
                    <div className={styles.regnkar1}>
                      <div className={styles.reginp1}>Новый участник?</div>
                      <div className={styles.reginp2}>
                        Зарегистрируйтесь сейчас, это просто!
                      </div>
                      <div className={styles.reginp3}>
                        <input
                          placeholder="эл.почта"
                          className={styles.inpot}
                          type="text"
                        />
                        <input
                          placeholder="пароль"
                          className={styles.inpot}
                          type="text"
                        />
                        <input
                          placeholder="повторный пароль"
                          className={styles.inpot}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.regis3}>
                    <div className={styles.vxdiv1}>
                      <span>Далее</span>
                    </div>
                  </div>
                  <div className={styles.regis4}>
                    <div className={styles.gicreg}></div>
                    <div className={styles.gicreg1}></div>
                  </div>
                  <div className={styles.regis5}>
                    <MdPerson3 />
                    <span>Свяжитесь со службой поддержки</span>
                  </div>
                </div>
              </div>
            ) : null}
            {namak ? (
              <div className={styles.namakdiv2}>
                <div
                  onClick={() => {
                    setKolo(!kolo);
                  }}
                  className={styles.kolokol1}
                >
                  <BiSolidBell />
                </div>

                <div
                  onClick={() => {
                    setKolo2(!kolo2);
                  }}
                  className={styles.kolokol2}
                >
                  <AiFillStar />
                </div>
                <div
                  onClick={() => {
                    setKolo3(!kolo3);
                  }}
                  className={styles.kolokol3}
                >
                  <BsFillGearFill />
                </div>
                <div className={styles.kolokol4}>
                  <MdPerson3 />
                </div>
              </div>
            ) : null}
            {kolo ? (
              <div
                onClick={() => {
                  setKolo("");
                }}
                className={styles.kolodiv}
              >
                <div className={styles.kolodiv333}>
                  <button className={styles.butkolo}>
                    <VscClose />
                  </button>
                  <span className={styles.spankolo}>Что нового</span>
                </div>
                <div className={styles.kolodiv444}>
                  У вас нет новых уведомлений
                </div>
              </div>
            ) : null}

            {kolo2 ? (
              <div
                onClick={() => {
                  setKolo2("");
                }}
                className={styles.kolodiv}
              >
                <div className={styles.kolodiv333}>
                  <button className={styles.butkolo}>
                    <VscClose />
                  </button>
                  <span className={styles.spankolo}>Избранные</span>
                </div>
                <div className={styles.kolodiv4444}>
                  <p className={styles.kolvid1}>
                    {" "}
                    У вас нет избранных игр,Чтобы добавить игру,Нажмите значок
                  </p>
                  <p>звёздочки рядом с Название игры</p>
                </div>
              </div>
            ) : null}

            {kolo3 ? (
              <div className={styles.kolodiv}>
                <div className={styles.kolodiv333}>
                  <button
                    onClick={() => {
                      setKolo3("");
                    }}
                    className={styles.butkolo}
                  >
                    <VscClose />
                  </button>
                  <span className={styles.spankolo}>Настройки</span>
                </div>
                <div className={styles.kolodiv444555}>
                  <div className={styles.kolo3div}>
                    <div className={styles.optik}>
                      <ReactFlagsSelect
                        countries={["GB", "AM", "RU", "GE", "IR"]}
                        selected={selected}
                        className={styles.countrySelecto}
                        selectButtonClassName={styles.countrySelectButtons}
                        selectedSize={14}
                        optionsSize={14}
                        customLabels={{
                          GB: "English",
                          AM: "Հայերեն",
                          RU: "Русский",
                          GE: "ქართული",
                          IR: "ლად",
                        }}
                        onSelect={(code) => setSelecteded(code)}
                      />
                    </div>
                  </div>
                  <div className={styles.kolo3div}>
                    <div className={styles.optik}>
                      <ReactFlagsSelect
                        countries={["GB"]}
                        selectededo={selectededo}
                        className={styles.countrySelectos}
                        selectButtonClassName={styles.countrySelectButtonses}
                        selectedSize={14}
                        optionsSize={14}
                        customLabels={{
                          GB: "English",
                        }}
                        onSelect={(code) => setSelectedo(code)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.link}>
          <a
            className={styles.lives}
            href=""
          >
            <BsRecord2 className={styles.klo} />
            Лайв
          </a>
          <div className={styles.dropdown}>
            <div className={styles.mejmej1}>
              <GiDragonBalls />
              <a href="">
                {" "}
                Просмотр событий
              </a>
            </div>
            <div className={styles.mejmej1}>
              <AiOutlineTrophy />
              <a href="">
                {" "}
                Турниры
              </a>
              <div className={styles.loss}>Новый</div>
            </div>
            <div className={styles.mejmej1}>
              <FaCalendarAlt />
              <a href="">
                Лайв календарь
              </a>
            </div>
            <div className={styles.mejmej1}>
              <AiFillSignal />
              <a href="">
                {" "}
                Статистика
              </a>
            </div>
          </div>
        </div>

        <a
          href=""
          className={styles.li}
        >
          <span className={styles.spcolor}>
            <IoAlarmOutline className={styles.lo} />
            Пре-матчь
          </span>
          <div className={styles.lilo}>
            <a
              href=""
              className={styles.mej2}
            >
              <GiDragonBalls />
              Просмотр событий
            </a>
            <a
              href=""
              className={styles.mej2}
            >
              <AiOutlineTrophy />
              Турниры
            </a>
            <div className={styles.loss1}>Новый</div>
            <a
              href=""
              className={styles.mej2}
            >
              <FaCalendarAlt />
              Лайв календарь
            </a>
            <a
              href=""
              className={styles.mej2}
            >
              <AiFillSignal />
              Статистика
            </a>
            <div className={styles.loss11}>Новый</div>
            <a
              href=""
              className={styles.mej2}
            >
              <AiOutlineFileSync />
              Результаты
            </a>
          </div>
        </a>
        <div className={styles.li3}>
          <span className={styles.splop}>
            <FaCashRegister />
            Казино
          </span>
          <div className={styles.lil88}>
            <a
              href=""
              className={styles.mejli88}
            >
              <TbCardsFilled />
              <span>Главная</span>
            </a>
            <a
              href=""
              className={styles.mejli88}
            >
              <AiOutlineTrophy />
              Турниры
            </a>
            <a
              href=""
              className={styles.mejli88}
            >
              <PiSketchLogoLight />
              <span>Джекпот</span>
            </a>
          </div>
        </div>
        <a href="" className={styles.kaleso}>
          <span className={styles.spkaleso}>
            <GiCarWheel />
            КОЛЕСО ЧУДЕС
          </span>
          <div className={styles.loss112}>Новый</div>
        </a>

        <a
          href=""
          className={styles.kalesosanti}
        >
          <div className={styles.loss1122}>Новый</div>
          <span className={styles.spsanta}>Колесо санты</span>
        </a>

        <a
          href=""
          className={styles.layvkazino}
        >
          <span className={styles.spkaz}>
            <FaLaptopCode />
            Лайв Казино{" "}
          </span>

          <div className={styles.livbacvox}>
            <a
              href=""
              className={styles.livmej}
            >
              <span className={styles.spobacvox}>
                <FaLaptopCode />
                Главная
              </span>
            </a>
            <a
              href=""
              className={styles.livmej}
            >
              <span className={styles.spobacvox}>
                <AiOutlineTrophy />
                Турниры
              </span>
            </a>
          </div>
        </a>
        <a
          href=""
          className={styles.blot}
        >
          <span className={styles.blot6}>
            <TbCardsFilled />
            Блот
          </span>
        </a>
        <a href="" className={styles.poker}>
          <span className={styles.sppoker}>
            <TbPokerChip />
            Покер
          </span>
        </a>

        <a
          href=""
          className={styles.lampa}
        >
          <span className={styles.sppredik}>
            <GiLampreyMouth />
            ПРЕДИКТОР
          </span>
        </a>
        <div className={styles.brtox}></div>
        <div className={styles.bolshe}>
          <span className={styles.bolsp}>
            <BsFillGrid3X3GapFill />
            БОЛЬШЕ
          </span>
          <div className={styles.bolshetak}>
            <div className={styles.boltak1}>
              <span className={styles.spkiber}>
                <GiCubeforce />
                Киберспорт
              </span>
            </div>
            <div className={styles.boltak1}>
              <span className={styles.spkiber}>
                <VscVm />
                ТВ Игры
                <CgChevronRight />
              </span>
              <div className={styles.bacvoxkib}>
                <div className={styles.kibhov}>
                  <span className={styles.turkib}>
                    {" "}
                    <VscVm />
                    Главная
                  </span>
                </div>
                <div className={styles.kibhov}>
                  <span className={styles.turkib}>
                    <AiOutlineTrophy />
                    Турниры
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.boltak1}>
              <span className={styles.pushka}>
                <HiMiniRocketLaunch />
                Пушка
              </span>
            </div>
            <div className={styles.boltak1}>
              <span className={styles.pushka}>
                <GiCard10Spades />
                Игры
              </span>
            </div>
            <div className={styles.boltak1}>
              <span className={styles.dzi}>
                <FaHorseHead />
                Виртуальные игры
                <CgChevronRight />
              </span>
              <div className={styles.dzidivbacvox}>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Pascal Gaming</span>
                  <div className={styles.nova}>Новый</div>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Betconstruct</span>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Golden Race</span>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Kiron</span>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Betradar</span>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>FLG</span>
                  <div className={styles.nova1}>Новый</div>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Virtual Generation</span>
                  <div className={styles.nova2}>Новый</div>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Leap Instant Games</span>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Pragmatic Play</span>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Inbet</span>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Koplex Bet</span>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>Leap Gaming</span>
                </div>
                <div className={styles.dzimej11}>
                  <span className={styles.dzspan}>DS</span>
                </div>
              </div>
            </div>
            <div className={styles.boltak1}>
              <span className={styles.akcia}>
                <AiTwotoneAppstore />
                Акции
              </span>
            </div>
            <div className={styles.boltak1}>
              <span className={styles.aviatriks}>
                <GiBoneKnife />
                Авиатрткс
              </span>
              <div className={styles.nova22}>Новый</div>
            </div>
            <div className={styles.boltak1}>
              <span className={styles.keno}>
                <MdHdrPlus />
                Кено
              </span>
            </div>
            <div className={styles.boltak1}>
              <span className={styles.pinakl}>
                <IoTriangle />
                Пиннакл
              </span>
              <div className={styles.kanel}>
                <div className={styles.kanelomej}>
                  <span className={styles.pin11}>
                    <GiDragonBalls />
                    Пиннакл Спорт
                  </span>
                </div>
                <div className={styles.kanelomej}>
                  <span className={styles.pin11}>
                    <IoTriangle />
                    Пиннакл Киверспорт
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.patil}>
        <div className={styles.patilo}></div>
        <div className={styles.patilo2}></div>
        <div className={styles.patilo3}></div>
        <div className={styles.patilo4}></div>
        <div className={styles.patilo5}></div>
        <div className={styles.patilo6}></div>
        <div className={styles.patilo7}></div>
        <div className={styles.patilo8}></div>
        <div className={styles.patilo9}></div>
        <div className={styles.patilo10}></div>
        <div className={styles.patilo11}></div>
        <div className={styles.patilo12}></div>
        <div className={styles.patilo13}></div>
        <div className={styles.patilo14}></div>
        <div className={styles.patilo15}></div>
        <div className={styles.patilo16}></div>
        <div className={styles.patilo17}></div>
        <div className={styles.patilo18}></div>
        <div className={styles.patilo19}></div>
        <div className={styles.patilo20}></div>
        <div className={styles.patilo21}></div>
        <div className={styles.patilo22}></div>
        <div className={styles.patilo23}></div>
        <div className={styles.patilo24}></div>
        <div className={styles.patilo25}></div>
        <div className={styles.patilo26}></div>
        <div className={styles.patilo27}></div>
        <div className={styles.patilo28}></div>
        <div className={styles.patilo29}></div>
        <div className={styles.patilo30}></div>
        <div className={styles.patilo31}></div>
        <div className={styles.patilo32}></div>
        <div className={styles.patilo33}></div>
        <div className={styles.patilo34}></div>
        <div className={styles.patilo35}></div>
        <div className={styles.patilo36}></div>
        <div className={styles.patilo37}></div>
        <div className={styles.patilo38}></div>
        <div className={styles.patilo39}></div>
        <div className={styles.patilo40}></div>
        <div className={styles.patilo41}></div>
        <div className={styles.patilo42}></div>

        <div className={styles.patilo43}></div>
        <div className={styles.patilo44}></div>
        <div className={styles.patilo45}></div>
        <div className={styles.patilo46}></div>
        <div className={styles.patilo47}></div>
        <div className={styles.patilo48}></div>
        <div className={styles.patilo49}></div>
        <div className={styles.patilo50}></div>
        <div className={styles.patilo51}></div>
        <div className={styles.patilo52}></div>
        <div className={styles.patilo53}></div>
        <div className={styles.patilo54}></div>
        <div className={styles.patilo55}></div>
        <div className={styles.patilo56}></div>
        <div className={styles.patilo57}></div>
        <div className={styles.patilo58}></div>

        
        <div className={styles.patilo59}></div>
        <div className={styles.patilo60}></div>
        <div className={styles.patilo61}></div>
        <div className={styles.patilo62}></div>
        <div className={styles.patilo63}></div>
        <div className={styles.patilo64}></div>
        <div className={styles.patilo65}></div>
        <div className={styles.patilo66}></div>
        <div className={styles.patilo67}></div>
        <div className={styles.patilo68}></div>
        <div className={styles.patilo69}></div>
        <div className={styles.patilo70}></div>
        <div className={styles.patilo71}></div>
        <div className={styles.patilo72}></div>
        <div className={styles.patilo73}></div>
      </div>
    </div>
  );
};

export default Hider;
