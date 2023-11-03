import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import BX from "wow-bx24";
import validate from "validate.js";
import emailjs from "@emailjs/browser";

import Header from "./static/images/Header.png";
import Header1 from "./static/images/Header1.png";

import Bg from "./static/images/bg-12.png";
import Icon1 from "./static/images/icon1.png";
import Icon2 from "./static/images/icon2.png";
import Icon3 from "./static/images/icon3.png";
import Icon4 from "./static/images/icon4.png";
import Icon5 from "./static/images/icon5.png";
import Icon6 from "./static/images/icon6.png";
import Icon7 from "./static/images/icon7.png";
import Icon8 from "./static/images/icon8.png";
import Icon9 from "./static/images/icon9.png";
import Icon10 from "./static/images/icon10.png";
import Icon11 from "./static/images/icon11.png";
import Icon12 from "./static/images/icon12.png";
import Icon13 from "./static/images/icon13.png";
import Icon14 from "./static/images/icon14.png";
import Icon15 from "./static/images/icon15.png";
import Icon16 from "./static/images/icon16.png";
import Icon17 from "./static/images/icon17.png";
import Icon18 from "./static/images/icon18.png";
import Icon19 from "./static/images/icon19.png";
import Icon20 from "./static/images/icon20.png";

import Img1 from "./static/images/img1.png";
import Img2 from "./static/images/img2.png";
import Img3 from "./static/images/img3.png";
import Img4 from "./static/images/img4.png";
import Img5 from "./static/images/img5.png";
import Img6 from "./static/images/img6.png";
import Img7 from "./static/images/img7.png";
import Img8 from "./static/images/img8.png";
import Img9 from "./static/images/img9.png";
import Img10 from "./static/images/img10.png";
import Img11 from "./static/images/img11.png";
import Img12 from "./static/images/img12.png";
import Img14 from "./static/images/img14.png";

import Logo from "./static/images/Logo.png";
import Button from "./static/images/Button.png";
import Button2 from "./static/images/Button2.png";

const timeNow = new Date();
const constraints = {
  name: {
    presence: { message: "Vui lòng nhập họ và tên." },
    length: {
      minimum: 3,
      tooShort: "Họ và tên không được ngắn hơn %{count} ký tự.",
      maximum: 50,
      tooLong: "Họ và tên không được dài hơn %{count} ký tự.",
    },
  },
  phone: {
    presence: { message: "Vui lòng nhập số điện thoại." },
    length: {
      minimum: 8,
      tooShort: "Số điện thoại không được ngắn hơn %{count} ký tự.",
      maximum: 12,
      tooLong: "Số điện thoại không được dài hơn %{count} ký tự.",
    },
  },
  email: {
    presence: { message: "Vui lòng nhập email." },
    email: {
      message: "Định dạng email không đúng.",
    },
  },
  company: {
    presence: { message: "Vui lòng nhập tên công ty" },
  },
  option: {
    presence: { message: "Vui lòng chọn hình thức học ." },
  },
  lesson: {
    presence: { message: "Vui lòng chọn chuyên đề huấn luyện." },
  },
};
function App() {
  const [load, setLoad] = useState(false);

  const numberFormat = (num) => {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  const timediff = Math.floor(
    new Date("August 16,2022 00:00:00").getTime() - new Date().getTime()
  );
  const [deadline, setDeadline] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [duration, setDuration] = useState(timediff);
  useEffect(() => {
    if (timediff > 0) {
      const timer = setTimeout(() => {
        setDuration(duration - 1000);
        setDeadline({
          days: numberFormat(Math.floor(duration / (1000 * 60 * 60 * 24))),
          hours: numberFormat(
            Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ),
          minutes: numberFormat(
            Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
          ),
          seconds: numberFormat(Math.floor((duration % (1000 * 60)) / 1000)),
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [error, setError] = useState([]);
  const [state, setState] = useState({
    title: "CRM_FORM_XDDN" + timeNow.toLocaleDateString(),
    name: "",
    phone: "",
    email: "",
    company: "",
    option: "",
    lesson: "",
    desiderate: "",
    time: "",
    rid: 1,
  });

  const handleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  const form = useRef();

  const sendEmail = (e) => {
    setLoad(true);
    e.preventDefault();
    const valid = validate(state, constraints);
    console.log(valid);
    if (valid) {
      setError(valid);
      setLoad(false);
      return;
    }
    emailjs
      .sendForm(
        "service_qon66wl",
        "template_u9meh2g",
        form.current,
        "TSvnEW9Jk8F2qriDJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Đăng ký thành công.");
          setLoad(false);
        },
        (error) => {
          console.log(error.text);
          alert("Vui lòng đăng ký lại.");
          setLoad(false);
        }
      );
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
    console.log(state);
  };

  return (
    <div>
      <div className="w-full bg-125 bg-b md:absolute z-[9]">
        <div className="ed-container">
          <nav className="px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <div className="w-[190px] h-[56px]">
                <img
                  src={Logo}
                  className="mr-3 w-[190px]"
                  alt="ActionCOACH CBD Firm"
                />
              </div>
              <div>
                <button
                  onClick={handleMenu}
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {openMenu ? (
                <div
                  className=" cl-12127 justify-between items-center w-full md:flex md:w-auto"
                  id="navbar-sticky"
                >
                  <ul className=" flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-b md:bg-[#ffffff00]">
                    <li>
                      <a
                        href="#noi-dung"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        NỘI DUNG
                      </a>
                    </li>
                    <li>
                      <a
                        href="#gia-tri"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        GIÁ TRỊ{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#dien-gia"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        DIỄN GIẢ{" "}
                      </a>
                    </li>
                    <li>
                      <img
                        className="block md:hidden"
                        onClick={handleModal}
                        src={Button}
                      />
                      {/* <button onClick={handleModal} className=' block md:hidden uppercase bg-white mt-2 rounded-full py-2 px-10 hover:shadow-2xl text-[#D22741] font-[700]'>Đăng ký ngay</button> */}
                    </li>
                  </ul>
                </div>
              ) : (
                <div
                  className=" cl-12127 hidden justify-between items-center w-full md:flex md:w-auto"
                  id="navbar-sticky"
                >
                  <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
                    <li>
                      <a
                        href="#noi-dung"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        NỘI DUNG
                      </a>
                    </li>
                    <li>
                      <a
                        href="#gia-tri"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        GIÁ TRỊ{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#dien-gia"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        DIỄN GIẢ{" "}
                      </a>
                    </li>
                    <li>
                      <img
                        className="block md:hidden"
                        onClick={handleModal}
                        src={Button}
                      />
                    </li>
                  </ul>
                </div>
              )}

              <div className="hidden md:block cl-shake">
                <img onClick={handleModal} src={Button} />
                {/* <button  onClick={handleModal} className='uppercase bg-white rounded-full py-3 px-10 hover:shadow-2xl text-[#D22741] font-[700]'>Đăng ký ngay</button> */}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div>
        <img src={Header} className="w-full hidden md:block" />
        <img src={Header1} className="w-full block md:hidden" />
      </div>
      <div className="w-full py-[30px] md:py-[50px] px-4 md:px-0">
        <div className="ed-container grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <img src={Img2} className="w-full " />
          </div>
          <div>
            <div>
              <h4 className="font-[900] cl-b uppercase">Giới thiệu</h4>
              <h3>Chương trình Huấn Luyện</h3>
              <h2 className="cl-b mb-4 text-[24px] md:text-[32px]">
                XÂY DỰNG ĐỘI NHÓM
              </h2>
              <p className="text-justify">
                “Tài sản lớn nhất của các doanh nghiệp chính là con người”.{" "}
                <span className="cl-b font-[700]">
                  Nhân sự chính là nguồn lực quyết định sự thành công hay thất
                  bại của doanh nghiệp.
                </span>{" "}
                Để doanh nghiệp phát triển, Chủ doanh nghiệp sẽ không thể tập
                trung quản lý được nhiều thứ, vì thế Chủ doanh nghiệp phải tập
                trung một thứ duy nhất là đội ngũ, đội ngũ sẽ giúp công ty phát
                triển ổn định.
              </p>
              <p className="mt-[20px] text-justify">
                Lãnh đạo một đội ngũ gồm các cá thể với tính cách đa dạng không
                phải là công việc đơn giản đối với bất kỳ người Chủ doanh nghiệp
                nào, đặc biệt hơn khi đội ngũ được ví như trái tim của doanh
                nghiệp.
              </p>
              <p className="mt-[20px] text-justify">
                <span className="cl-b font-[700]">
                  Xây dựng được một đội ngũ nhân sự vững mạnh, nhiệt huyết, bản
                  lĩnh chính là chìa khóa để giúp một doanh nghiệp sớm đạt được
                  thành công và phát triển mạnh mẽ.
                </span>
              </p>
              <div className="mt-[20px] block md:flex">
                <div className="min-w-[200px] flex justify-center md:justify-start ">
                  <img
                    onClick={handleModal}
                    src={Button}
                    className="cl-shake mt-2"
                  />
                </div>
                {/* <div className="flex items-center underline mt-[20px] md:mt-0">
                  <a className="italic hidden md:block">
                    để tham dự Chương trình Huấn Luyện
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[30px] md:py-[50px] px-4 md:px-0 bg-[#F3F3F3]">
        <div className="ed-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h6 className="cl-b font-[900] text-center md:text-start">01.</h6>
              <div className=" hidden md:block">
                <h2 className=" text-center md:text-start">ĐIỀU GÌ TẠO NÊN </h2>
                <h1 className="text-[42px] md:text-[64px] cl-b font-semibold leading-[64px]  text-center md:text-start">
                  MỘT ĐỘI NHÓM{" "}
                </h1>
                <h2 className="pl-0 md:pl-[50px]  text-center md:text-start">
                  CÓ HIỆU SUẤT CAO?
                </h2>
              </div>
              <div className=" block md:hidden">
                <h2 className="text-[24px] text-center">
                  <span>ĐIỀU GÌ TẠO NÊN </span>
                  <span className="cl-b">MỘT ĐỘI NHÓM </span>
                  <span>CÓ HIỆU SUẤT CAO?</span>
                </h2>
              </div>
              <div>
                <p className="my-[20px] text-justify">
                  <span className="cl-b font-[700]">
                    Trong quá trình huấn luyện cho các Chủ doanh nghiệp Việt
                    Nam:
                  </span>
                  từ các doanh nghiệp Start - up, doanh nghiệp mới khởi nghiệp{" "}
                  <span className="cl-b font-[700]">1 năm, 2 năm, 3 năm</span>{" "}
                  hoặc những doanh nghiệp{" "}
                  <span className="cl-b font-[700]">tập đoàn lớn, </span>
                  ActionCOACH CHT Firm đã tổng hợp được các bài toán nhân sự hay
                  gặp phải thường khiến các Chủ doanh nghiệp đau đầu:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  <div>
                    <div className="flex">
                      <div className="min-w-[60px] md:min-w-[80px]">
                        <img src={Icon8} />
                      </div>
                      <div className="text-justify">
                        <span>
                          Đã bao giờ bạn gặp tình trạng đội nhóm của mình thiếu
                          gắn kết chỉ vì họ cạnh tranh khách hàng của nhau?
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[60px] md:min-w-[80px]">
                        <img src={Icon8} />
                      </div>
                      <div className="text-justify">
                        <span>
                          Nhân viên của công ty chưa chủ động hoạt động hết khả
                          năng của họ? Chưa chủ động ý kiến, đề xuất các giải
                          pháp để giải quyết công việc được giao?
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[60px] md:min-w-[80px]">
                        <img src={Icon8} />
                      </div>
                      <div className="text-justify">
                        <span>
                          Công ty gặp thách thức khi triển khai một mục
                          tiêu/chiến lược đồng bộ giữa các thành viên, giữa các
                          bộ phận?
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[60px] md:min-w-[80px]">
                        <img src={Icon8} />
                      </div>
                      <div className="text-justify">
                        <span>
                          Không biết cách làm thế nào để thu hút nhân tài và đào
                          tạo phát triển nhân tài?
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" items-end hidden md:flex">
              <img src={Img1} className="mb-0 md:mb-[-52px]" />
            </div>
          </div>
        </div>
      </div>
      <div id="gia-tri" className="w-full py-[30px] md:py-[50px] px-4 md:px-0">
        <div className="ed-container">
          <div>
            <div className="text-center mb-4">
              <h6 className="cl-b font-[900]">02.</h6>
              <h2 className="text-[24px] md:text-[32px]">
                BẠN NHẬN ĐƯỢC GÌ TỪ{" "}
                <span className="cl-b">CHƯƠNG TRÌNH HUẤN LUYỆN</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid grid-cols-2 col-span-2 md:col-span-1  gap-6">
                <div className="col-span-2 md:col-span-1 flex items-center">
                  <div className="">
                    <div className="w-full bg-b p-[15px] md:p-[30px] text-white">
                      <img src={Icon9} className="m-auto mb-4" />
                      <p className="pb-0 md:pb-[30px] text-justify">
                        Mở rộng góc nhìn cho các nhà lãnh đạo quản lý doanh
                        nghiệp, tìm ra "luật chơi chung", gắn kết đội nhóm tuyệt
                        vời.
                      </p>
                    </div>
                    <div className="w-full p-[15px] md:p-[30px] border-4 border-[#131E5B] mt-6">
                      <img src={Icon5} className="m-auto mb-4" />
                      <p className="pb-0 md:pb-[30px] text-justify">
                        Xác định được các yếu tố cốt lõi để phát triển nguồn
                        nhân lực trong doanh nghiệp, bí quyết tuyển dụng đúng
                        người, tạo động lực và giữ chân nhân tài.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 flex items-center">
                  <div className="self-center w-full bg-b p-[15px] md:p-[30px] text-white">
                    <img src={Icon7} className="m-auto mb-4" />
                    <p className="text-justify">
                      Xây dựng năng lực lãnh đạo cho tổ chức để nhân sự phát huy
                      khả năng của mình, chăm sóc khách hàng tốt hơn và như vậy
                      doanh nghiệp vận hành hiệu quả hơn và mang lại lợi ích cho
                      chủ doanh nghiệp.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 ">
                <img onClick={handleModal} src={Img3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F3F3F3] pt-[30px] md:pt-[50px] px-4 md:px-0">
        <div className="ed-container">
          <div className="text-center">
            <h6 className="cl-b font-[900]">03.</h6>
            <h2 className="text-[24px] md:text-[32px]">HÌNH THỨC ĐÀO TẠO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-[30px] md:py-[50px]">
            <div>
              <div className="w-full md:w-[420px] float-right">
                <div className="flex mb-4">
                  <img src={Icon19} className="" />
                  <p className="flex items-end ml-[20px] px-4 md:px-0">
                    <strong>Thời gian tổ chức và Ngày tổ chức:</strong>
                  </p>
                </div>

                <div className="rounded-lg bg-b flex text-[#ffffff] p-4 border-solid-5 border-2">
                  {/* <div className="w-[30px] flex">
                    <img className="h-[15px] w-[14px] mt-2" src={Icon18} />
                  </div> */}
                  <div className="text-justify">
                    <h5 className="font-[700] uppercase mt-4 ">
                      Chương trình Xây dựng đội nhóm:{" "}
                    </h5>
                    <ul className="font-[500] list-disc pl-[20px] md:pl-[40px]">
                      <li className="mt-4">
                        <span>Chuyên đề 1: 5Ways - Ngày ....</span>
                      </li>
                      <li className="mt-4">
                        <span>Chuyên đề 2: Service Rich - Ngày ....</span>
                      </li>
                      <li className="mt-4 mb-0 md:mb-[32px]">
                        <span>Chuyên đề 3: Team Rich - Ngày ....</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex  mb-4">
                <img src={Icon6} className="" />
                <p className="flex items-end ml-[20px] px-4 md:px-0">
                  <strong>Đối tượng tham gia:</strong>
                </p>
              </div>
              <div className="rounded-lg bg-b flex text-[#ffffff] p-4 border-solid-5 border-2">
                <div className="text-justify">
                  <h5 className="font-[700] uppercase mt-4 ">
                    Ban lãnh đạo doanh nghiệp:
                  </h5>
                  <span>
                    Chủ tịch, Thành viên HĐQT, Ban cố vấn doanh nghiệp.
                  </span>

                  <h5 className="font-[700] uppercase mt-4 ">Ban giám đốc:</h5>
                  <span>Tổng giám đốc, giám đốc chức năng.</span>

                  <h5 className="mt-4">
                    <span className="font-[700] uppercase ] ">
                      Các doanh nhân:
                    </span>
                    <br />
                    <span>
                      Muốn cập nhật thêm kiến thức, quản trị, điều hành và lãnh
                      đạo doanh nghiệp.
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="noi-dung" className="w-full bg-b px-4 md:px-0">
        <div className="ed-container py-[30px] md:py-[50px]">
          <div className="text-white text-center">
            <h6 className="font-[800]">04.</h6>
            <h2 className="text-[24px] md:text-[32px]">
              NỘI DUNG TRONG CHƯƠNG TRÌNH
            </h2>
            <div>
              <p className="font-[700] mt-2 md:mt-[30px]">
                Khóa học gồm 3 chuyên đề:
              </p>
              <p className="text-justify md:text-center mt-4">
                <span className="cl-g uppercase">
                  5 Ways, Service Rich và Team Rich
                </span>{" "}
                hướng tới giải pháp giúp Doanh nghiệp Xây dựng đội nhóm.{" "}
              </p>
              <p className="text-justify md:text-center mt-2">
                Những chia sẻ từ Chương trình Huấn Luyện giúp chủ doanh nghiệp
                xây dựng đội ngũ nhân viên thực sự hiệu quả để đưa doanh nghiệp
                đi tới thành công.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-[20px] md:mt-[40px] lg:grid-cols-3 md:grid-cols-4">
            <div className="col-span-3 bg-white max-w-[390px] m-auto p-[15px] md:p-[30px] lg:col-span-1 md:col-span-2 h-full rounded-lg  ">
              <div className="flex md:hidden mb-4 justify-between">
                <div className="w-[140px] h-[38px] bg-b text-white flex items-center rounded-lg">
                  <p className="text-center w-full uppercase font-[700]">
                    CHUYÊN ĐỀ 1
                  </p>
                </div>
                <h3 className="flex items-center">
                  <span className="ml-4 text-[16px] font-[700]">5WAYS</span>
                </h3>
              </div>
              <div>
                <img src={Img5} className="" />
              </div>
              <div className="hidden md:block ">
                <div className="w-[140px] h-[38px] bg-b text-white flex items-center rounded-lg mt-[30px]">
                  <p className="text-center w-full uppercase font-[700]">
                    CHUYÊN ĐỀ 1
                  </p>
                </div>
                <h3 className="mt-[10px]">5WAYS</h3>
              </div>
              <p className="mt-[10px] pb-[0px] md:pb-[40px] text-justify ">
                5 Yếu tố để gia tăng lợi nhuận của doanh nghiệp, phát triển công
                ty đồng bộ.{" "}
              </p>
            </div>

            <div className="col-span-3 bg-white max-w-[390px] m-auto p-[15px] md:p-[30px] lg:col-span-1 md:col-span-2 h-full rounded-lg  ">
              <div className="flex md:hidden mb-4 justify-between">
                <div className="w-[140px] h-[38px] bg-b text-white flex items-center rounded-lg">
                  <p className="text-center w-full uppercase font-[700]">
                    CHUYÊN ĐỀ 2
                  </p>
                </div>
                <h3 className="flex items-center">
                  <span className="ml-4 text-[16px] font-[700]">
                    SERVICE RICH
                  </span>
                </h3>
              </div>
              <div>
                <img src={Img6} className="" />
              </div>
              <div className=" hidden md:block ">
                <div className="w-[140px] h-[38px] bg-b text-white flex items-center rounded-lg mt-[30px]">
                  <p className="text-center w-full uppercase font-[700]">
                    CHUYÊN ĐỀ 2
                  </p>
                </div>
                <h3 className="mt-[10px]">SERVICE RICH</h3>
              </div>
              <p className="mt-[10px] pb-[0px] md:pb-[40px] text-justify">
                - Giải pháp biến Dịch vụ Khách hàng trở thành nhân tố hàng đầu
                giúp bạn tạo nên khác biệt hoá Thương hiệu so với đối thủ cạnh
                tranh.
                <br />- Xây dựng Văn hoá “Lấy Khách hàng làm trung tâm” trong
                toàn doanh nghiệp giúp Gia tăng Lợi nhuận nhờ Chiến lược Dịch vụ
                Cá nhân hoá.
              </p>
            </div>

            <div className="col-span-3 bg-white max-w-[390px] m-auto p-[15px] md:p-[30px] lg:col-span-1 md:col-span-2 h-full rounded-lg  ">
              <div className="flex md:hidden mb-4 justify-between">
                <div className="w-[140px] h-[38px] bg-b text-white flex items-center rounded-lg">
                  <p className="text-center w-full uppercase font-[700]">
                    CHUYÊN ĐỀ 3
                  </p>
                </div>
                <h3 className="flex items-center">
                  <span className="ml-4 text-[16px] font-[700]">TEAM RICH</span>
                </h3>
              </div>
              <div>
                <img src={Img7} className="" />
              </div>
              <div className=" hidden md:block">
                <div className="w-[140px] h-[38px] bg-b text-white flex items-center rounded-lg mt-[30px]">
                  <p className="text-center w-full uppercase font-[700]">
                    CHUYÊN ĐỀ 3
                  </p>
                </div>
                <h3 className="mt-[10px]">TEAM RICH</h3>
              </div>
              <p className="mt-[10px] pb-[0px] md:pb-[40px] text-justify">
                6 Chìa khóa vàng tạo nên một đội ngũ thành công:
                <br />
                - Quy tắc “Chọn đúng người”, Tuyển dụng ứng viên hạng A.
                <br />
                - Phát triển tài năng trong doanh nghiệp: từ kiến tạo môi
                trường, chính sách đến thực thi.
                <br />- Các yếu tố tạo ra sự gắn kết trong đội ngũ.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-123 px-4 md:px-0">
        <div className="ed-container">
          <div className="bg-121 font-[900] text-[14px] italic cl-b text-justify md:text-center pl-[20px] md:pl-[93px] pt-[30px] pb-[30px] md:pt-[53px]">
            Nếu bạn xây dựng được một đội ngũ nhân viên thực sự tự vận động,{" "}
            <br className=" hidden md:block" />
            tự làm việc thì đương nhiên bạn là một nhà lãnh đạo thật sự xuất
            sắc.
          </div>
        </div>
      </div>
      <div id="dien-gia" className="w-full px-4 md:px-0 bg-[#F3F3F3]">
        <div className="ed-container">
          <div className="grid grid-cols-12 gap-4 md:gap-[60px] pt-[30px] pb-[10px] md:py-[50px]">
            <div className="col-span-12 md:col-span-5">
              <img className="m-auto" src={Img8} />
            </div>
            <div className="col-span-12 md:col-span-7 flex items-center">
              <div>
                <h2 className=" uppercase text-[24px] md:text-[32px]">
                  BUSINESS COACH{" "}
                </h2>
                <h4 className="text-[20px] cl-b uppercase font-bold ">
                  COLLINS Hoàng Anh Chiến
                </h4>
                <div className="cl-b mt-[20px] md:mt-[50px]">
                  <div className="flex mb-[20px]">
                    <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                      <img src={Icon4} />
                    </div>
                    <div>
                      <h5 className="text-[14px] uppercase font-bold ">
                        Học vị:
                      </h5>
                      <p>Kỹ sư xây dựng – Đại học xây dựng Hà Nội.</p>
                    </div>
                  </div>

                  <div className="flex mb-[20px]">
                    <div className="min-w-[40px] md:min-w-[60px] flex">
                      <img className="w-[30px] h-[29px]" src={Icon3} />
                    </div>
                    <div>
                      <h5 className="text-[14px] uppercase font-bold ">
                        Kinh nghiệm:
                      </h5>
                      <p className="text-justify">
                        - Hơn 16 năm làm trong lĩnh vực xây dựng và thương mại,
                        và hơn 10 năm xây dựng và vận hành 03 doanh nghiệp xây
                        dựng thương mại.
                        <br />
                        - Là một chuyên gia về lĩnh vực Quản lý dự án hạng 1,
                        Giám sát và Thiết kế hạng 1 các công trình dân dụng và
                        công nghiệp.
                        <br />- Giám đốc cấp cao của BNI sau 24 tháng tham gia
                        vào cộng đồng BNI. Trong 12 tháng là giám đốc phát triển
                        của 3 chapter BNI
                      </p>
                    </div>
                  </div>

                  <div className=" mb-[20px] hidden">
                    <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                      <img src={Icon2} />
                    </div>
                    <div>
                      <h5 className="text-[14px] uppercase font-bold ">
                        Giải thưởng{" "}
                      </h5>
                      <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>

                  <div className=" mb-[20px] hidden">
                    <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                      <img src={Icon1} />
                    </div>
                    <div>
                      <h5 className="text-[14px] uppercase font-bold ">
                        Dự án:
                      </h5>
                      <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-0">
        <div className="ed-container py-[30px] md:py-[50px]">
          <div className="text-center ">
            <h2 className="cl-b uppercase text-[24px] md:text-[32px]">
              Thời hạn đăng ký
            </h2>
            <div className="">
              <div className="m-auto my-[30px] grid grid-cols-4 gap-4 max-w-[350px]">
                <div className="w-[60px] h-[60px] bg-b rounded-md text-white text-[40px] font-bold flex items-center">
                  <div className="text-center w-full">{deadline.days}</div>
                </div>
                <div className="w-[60px] h-[60px] bg-b rounded-md text-white text-[40px] font-bold flex items-center">
                  <div className="text-center w-full">{deadline.hours}</div>
                </div>
                <div className="w-[60px] h-[60px] bg-b rounded-md text-white text-[40px] font-bold flex items-center">
                  <div className="text-center w-full">{deadline.minutes}</div>
                </div>
                <div className="w-[60px] h-[60px] bg-b rounded-md text-white text-[40px] font-bold flex items-center">
                  <div className="text-center w-full">{deadline.seconds}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" flex justify-center md:justify-end">
              <img
                className="mr-0  w-full max-w-[430px] rounded-lg"
                onClick={handleModal}
                src={Img9}
              />
            </div>
            <div className="flex md:justify-start justify-center">
              <img
                className="ml-0 w-full max-w-[430px] rounded-lg "
                onClick={handleModal}
                src={Img12}
              />
            </div>
          </div>

          <div className="text-center mt-[30px]">
            <h2 className="cl-b uppercase text-[24px] md:text-[32px]">
              Thông tin thanh toán
            </h2>
          </div>
          <div className="text-center hidden md:block">
            <p className="mb-4 mt-6">
              <span className="cl-b font-[700]">Số tài khoản </span>
              <br />
              <span className="text-[#A07B4C] text-[24px] font-[700]">
                09086011219999
              </span>
            </p>
            <p className="mb-4">
              <span className="cl-b font-[700]">Tên thụ hưởng </span>
              <br />
              <span className="text-[#A07B4C] text-[24px] font-[700]">
                Công Ty Hoàng Anh Chiến
              </span>
            </p>
            <p className="mb-4">
              <span className="cl-b font-[700]">Ngân Hàng</span>
              <br />
              <span className="text-[#A07B4C] text-[24px] font-[700]">
                MSB Khánh Hòa
              </span>
            </p>
            <p className="">
              <span className="cl-b font-[700]">Nội dung thanh toán</span>
              <br />
              <span className="text-[#A07B4C] text-[24px] font-[700]">
                Tên & Số điện thoại
              </span>
            </p>
          </div>

          <div className=" m-auto md:text-left text-[16px] font-[700]  block md:hidden">
            <p className="mb-4 mt-6">
              <span className="cl-b font-[700] uppercase">Số tài khoản: </span>
              <span className="text-[#A07B4C] ">09086011219999</span>
            </p>
            <p className="mb-4">
              <span className="cl-b font-[700] uppercase">Tên thụ hưởng: </span>
              <span className="text-[#A07B4C]  ">Công Ty Hoàng Anh Chiến</span>
            </p>
            <p className="mb-4">
              <span className="cl-b font-[700] uppercase">Ngân Hàng: </span>
              <span className="text-[#A07B4C]  ">MSB Khánh Hòa</span>
            </p>
            <p className="uppercase">
              <span className="cl-b font-[700]">Nội dung thanh toán: </span>
              <span className="text-[#A07B4C]  ">Tên & Số điện thoại</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F3F3F3] px-4 md:px-0">
        <div className="ed-container py-[30px] md:py-[50px]">
          <div className="text-center">
            <h2 className="cl-b uppercase text-[24px] md:text-[32px]">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="mt-[10px]">
              Có thể bạn cũng gặp một số thắc mắc dưới đây, cùng xem nhé.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-[30px] md:gap-8">
            <div className="col-span-12  md:col-span-5 flex items-center">
              <img src={Img14} />
            </div>
            <div className="col-span-12  md:col-span-7">
              <div className="flex mt-[30px]">
                <div className="min-w-[90px]">
                  <div className="w-[60px] h-[60px] bg-b rounded-lg text-white text-[48px] font-bold flex items-center">
                    <div className="text-center w-full">1</div>
                  </div>
                </div>
                <div className="cl-b">
                  <p className=" uppercase font-bold">
                    HÌNH THỨC học như thế nào?
                  </p>
                  <p className="text-justify">
                    Học Online qua Zoom hoặc học Offline tại Văn phòng
                    ActionCOACH CHT Firm - 61 Lý Nam Đế, Nha Trang, Khánh Hòa
                    hàng tuần do Coach COLLINS HOÀNG ANH CHIẾN đào tạo.
                  </p>
                </div>
              </div>

              <div className="flex mt-[30px]">
                <div className="min-w-[90px]">
                  <div className="w-[60px] h-[60px] bg-b rounded-lg text-white text-[48px] font-bold flex items-center">
                    <div className="text-center w-full">2</div>
                  </div>
                </div>
                <div className="cl-b">
                  <p className=" uppercase font-bold">
                    Tôi có thể mang theo đội nhóm của mình?
                  </p>
                  <p className="text-justify">
                    Hãy mang theo đội nhóm của mình để họ cùng được phát triển,
                    gia tăng doanh số cho bạn nhanh chóng hơn nữa. Chúng tôi sẽ
                    gửi link Zoom khi bạn thanh toán thành công.{" "}
                  </p>
                </div>
              </div>

              <div className="flex mt-[30px]">
                <div className="min-w-[90px]">
                  <div className="w-[60px] h-[60px] bg-b rounded-lg text-white text-[48px] font-bold flex items-center">
                    <div className="text-center w-full">3</div>
                  </div>
                </div>
                <div className="cl-b">
                  <p className=" uppercase font-bold">
                    Tôi có thể yêu cầu hoàn tiền nếu không phù hợp cho tôi
                    không?
                  </p>
                  <p className="text-justify">
                    Nếu bạn thực hiện các bài tập được giao và không cảm thấy có
                    giá trị hoặc cách học không phù hợp với cách chúng tôi dạy,
                    chúng tôi sẽ vui vẻ hoàn lại tiền cho bạn trừ mọi khoản phí
                    bên ngoài theo các điều kiện sau:
                    <ul className=" list-disc pl-[20px] md:pl-[30px]">
                      <li className="mt-4">
                        <span>
                          {" "}
                          Hoàn thành khóa học: Chúng tôi sẽ yêu cầu bạn hoàn
                          thành việc học tập của bạn (để chắc rằng bạn đã làm
                          nó) và hỏi nó đã không làm gì được cho bạn (để chúng
                          tôi có thể học hỏi và cải tiến).
                        </span>
                      </li>
                      <li className="mt-4">
                        <span>
                          {" "}
                          Thời hạn nộp đơn xin hoàn tiền: 30 ngày từ khi chương
                          trình kết thúc. Không có ngoại lệ.
                        </span>
                      </li>
                    </ul>
                    Không đăng ký vào chương trình chỉ để "XEM" . Chúng tôi dành
                    tâm huyết và thời gian cho chương trình này và hy vọng bạn
                    cũng làm vậy. Chương trình chỉ dành cho người nghiêm túc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-b px-4 md:px-0">
        <div className="ed-container py-[30px] md:py-[50px] text-white">
          <div className="text-center">
            <h2 className=" uppercase text-[24px] md:text-[32px]">
              Số Lượng Vé Giới Hạn
            </h2>
            <div>
              <img
                onClick={handleModal}
                className="m-auto mt-[20px] cl-shake"
                src={Button2}
              />
            </div>
            <p className="mt-[30px] font-bold">
              Đăng ký sớm ngay hôm nay để giữ một chỗ tham dự chương trình
            </p>
          </div>
          {/* <div className="grid grid-cols-12 md:gap-3 mt-[30px]">
            <div className="col-span-12  md:col-span-4 flex md:mr-[40px]">
              <div className="min-w-[30px] flex">
                <img className="h-[15px] w-[14px] mt-2" src={Icon18} />
              </div>
              <div className="text-justify">
                <p className=" font-bold">3 ngày tham dự trực tiếp </p>
              </div>
            </div>

            <div className="col-span-12  md:col-span-4 flex md:mr-[4px]">
              <div className="min-w-[30px] flex">
                <img className="h-[15px] w-[14px] mt-2" src={Icon18} />
              </div>
              <div className="text-justify">
                <p className=" font-bold">10.000+ người đã tham dự</p>
              </div>
            </div>

            <div className="col-span-12  md:col-span-4 flex md:mr-[40px]">
              <div className="min-w-[30px] flex">
                <img className="h-[15px] w-[14px] mt-2" src={Icon18} />
              </div>
              <div className="text-justify">
                <p className=" font-bold">Xem lại toàn bộ Video Coaching</p>
              </div>
            </div>

            <div className="col-span-12  md:col-span-4 flex md:mr-[40px]">
              <div className="min-w-[30px] flex">
                <img className="h-[15px] w-[14px] mt-2" src={Icon18} />
              </div>
              <div className="text-justify">
                <p className=" font-bold">14 chương trình đã tổ chức</p>
              </div>
            </div>

            <div className="col-span-12  md:col-span-4 flex md:mr-[40px]">
              <div className="min-w-[30px] flex">
                <img className="h-[15px] w-[14px] mt-2" src={Icon18} />
              </div>
              <div className="text-justify">
                <p className=" font-bold">
                  Bán được chính sản phẩm của bạn ngay trong lớp học
                </p>
              </div>
            </div>

            <div className="col-span-12  md:col-span-4 flex md:mr-[40px]">
              <div className="min-w-[30px] flex">
                <img className="h-[15px] w-[14px] mt-2" src={Icon18} />
              </div>
              <div className="text-justify">
                <p className=" font-bold">
                  Trở thành con người biến đổi hoàn toàn mới theo hướng tích cực{" "}
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-full bg-white px-4 md:px-0">
        <div className="bg-122 cl-b py-[30px] md:py-[50px]">
          <div className="ed-container">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12  md:col-span-6 md:col-start-6 pb-[0rem] md:pb-[7rem]">
                <div className="max-w-[600px]">
                  <h4 className="text-[14px] cl-b uppercase font-bold ">
                    Giới thiệu CHT Firm{" "}
                  </h4>
                  <h2 className="text-[24px] md:text-[32px]">
                    ACTIONCOACH CHT FIRM
                  </h2>
                  <p className="mt-[20px] text-justify">
                    Với tầm nhìn “Tạo ra một thế giới thịnh vượng thông qua hoạt
                    động tái đào tạo doanh nghiệp.”{" "}
                  </p>
                  <p className="mt-[20px] md:mt-[30px] text-justify">
                    Đối với Chúng tôi - Những nhà đào tạo chuyên nghiệp, việc
                    giúp đỡ các Chủ Doanh Nghiệp phát triển mạnh Nhất luôn là ưu
                    tiên hàng đầu. ActionCOACH CHT Firm sẽ là nơi mang đến cho
                    các bạn sự trải nghiệm tuyệt vời nhất.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#A07B4C] px-4 md:px-0">
        <div className="ed-container flex justify-between">
          <div className="bg-121 font-[900] text-[14px] italic text-white pl-[20px] md:pl-[93px] pt-[30px] pb-[30px] md:pt-[53px] text-justify">
            Thành công của nhân viên chính là thành công của nhà lãnh đạo.
            <br />
            Khi doanh nghiệp xây dựng được một đội ngũ nhân sự xuất sắc thì đó
            chính là sức mạnh để giúp doanh nghiệp nhanh chóng{" "}
            <br className=" hidden md:block" /> đi đến thành công.
          </div>
          <div className="w-[200px] hidden md:block">
            <img className="mt-[-65px;]" src={Img11} />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#121212] text-white py-4 md:py-[50px] ">
        <div className="ed-container px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
            <div className="md:col-span-1 lg:col-span-4">
              <div>
                <img src={Logo} />
              </div>
              <p className=" text-justify max-w-[390px]">
                ActionCOACH là thương hiệu huấn luyện doanh nghiệp hàng đầu thế
                giới, được Brad Sugars thành lập năm 1993 tại Brisbane,
                Australia trong thời điểm khái niệm về huấn luyện doanh nghiệp
                còn khá lạ lẫm đối với các quốc gia trên thế giới.
              </p>
            </div>
            <div className="md:col-span-1 lg:col-span-3">
              <h3>THÔNG TIN LIÊN HỆ</h3>
              <div>
                <div className="flex">
                  <div className="mr-4 w-40px mb-4">
                    <img src={Icon14} />
                  </div>{" "}
                  <span>61 Lý Nam Đế, Nha Trang, Khánh Hoà</span>
                </div>
                <div className="flex">
                  <div className="mr-4 w-40px mb-4">
                    <img src={Icon15} />
                  </div>
                  <span>info@actioncoachcht.com</span>
                </div>
                <div className="flex">
                  <div className="mr-4 w-40px mb-4">
                    <img src={Icon16} />
                  </div>{" "}
                  <span>( +297 ) 123 456 789</span>
                </div>
              </div>
            </div>
            <div className=" hidden lg:block lg:col-span-3">
              {/* https://www.facebook.com/Actioncoach-cht-101635112508820 */}
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FActionCoachCHTFirm%2F&amp;tabs&amp;width=280&amp;height=180&amp;small_header=false&amp;adapt_container_width=false&amp;hide_cover=false&amp;show_facepile=false&amp;appId"
                width="280"
                height="180"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <button
        className=" shadow-md shadow-white/50 rounded-lg"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: "1rem 1rem",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#202562",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <img src={Icon20} className="w-[20px]" />
      </button>
      {openModal ? (
        <div className="fixed z-50 top-0 h-[100vh] w-full bg-[#afb1b270] flex items-center">
          <form
            ref={form}
            className="bg-white bg-124  shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4 mx-auto w-[95%] max-w-[450px] static z-[99]"
            onSubmit={sendEmail}
          >
            <div className="text-right relative">
              <span
                className="text-[30px] absolute font-[900] top-[-18px] right-[0px] md:right-[-25px]"
                onClick={handleModal}
              >
                <img className="w-[30px]" src={Icon17} />
              </span>
            </div>
            <div className="m-4 mt-6">
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                id="name"
                name="name"
                placeholder="Họ và tên *"
                value={state.name}
                onChange={handleChange}
              />
              <p className="text-[red] mt-2">
                {error.name ? error.name[0] : ""}
              </p>
            </div>
            <div className="m-4">
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="email"
                name="email"
                placeholder="email@gmail.com *"
                type="email"
                value={state.email}
                onChange={handleChange}
              />

              <p className="text-[red] mt-2">
                {error.email ? error.email[0] : ""}
              </p>
            </div>
            <div className="m-4">
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="phone"
                name="phone"
                placeholder="Số điện thoại (VD: 0900xxxxxx) *"
                type="phone"
                value={state.phone}
                onChange={handleChange}
              />
              <p className="text-[red] mt-2">
                {error.phone ? error.phone[0] : ""}
              </p>
            </div>
            <div className="m-4">
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="company"
                name="company"
                placeholder="Tên công ty *"
                type="text"
                value={state.company}
                onChange={handleChange}
              />
              <p className="text-[red] mt-2">
                {error.company ? error.company[0] : ""}
              </p>
            </div>
            <div className="m-4">
              <select
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="option"
                name="option"
                onChange={handleChange}
              >
                <option className="text-[#cdcdcd]">Chọn hình thức học *</option>
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
              </select>
              <p className="text-[red] mt-2">
                {error.option ? error.option[0] : ""}
              </p>
            </div>
            <div className="m-4">
              <select
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="lesson"
                name="lesson"
                onChange={handleChange}
              >
                <option className="text-[#cdcdcd]">
                  Chọn chuyên đề huấn luyện *
                </option>
                <option value="all_lesson">
                  Tham gia cả 3 chuyên đề huấn luyện
                </option>
                <option value="lesson_1">Tham gia chuyên đề 1</option>
                <option value="lesson_2">Tham gia chuyên đề 2</option>
                <option value="lesson_3">Tham gia chuyên đề 3</option>
              </select>
              <p className="text-[red] mt-2">
                {error.lesson ? error.lesson[0] : ""}
              </p>
            </div>
            <div className="m-4">
              <textarea
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="desiderate"
                name="desiderate"
                placeholder="Bạn mong muốn gì khi tham gia khoá học?"
                onChange={handleChange}
              >
                {state.desiderate}
              </textarea>
            </div>
            <div className="m-4">
              <textarea
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal "
                id="time"
                name="time"
                placeholder="Khoảng thời gian phù hợp để CHT tư vấn cho bạn"
                onChange={handleChange}
              >
                {state.time}
              </textarea>
            </div>

            <div className="m-4 text-center">
              {load == false ? (
                <button
                  type="submit"
                  className=" bg-b text-white mt-2 py-4 px-10 hover:shadow-2xl font-[700] w-full rounded-lg"
                >
                  ĐĂNG KÝ
                </button>
              ) : (
                <button className=" bg-b text-white mt-2 py-4 px-10 hover:shadow-2xl font-[700] w-full rounded-lg uppercase flex justify-center">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  ĐANG GỬI
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
