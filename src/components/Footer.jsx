import React from "react";

const Footer = () => {
  return (
    <div className="bg-black mx-auto py-16 px-4 text-gray-300">
      <div className="lg:grid lg:grid-cols-3 gap-8">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#b6b6b6]">Дом молодежи Рекорд</h1>
          <p className="py-4">
            ЦЕНТР МОЛОДЁЖНОГО ТВОРЧЕСТВА И СЕМЕЙНОГО ДОСУГА
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="w-full">
              <a href="https://vk.com/dmrecord">
                <img
                  className="w-full"
                  src={require("../images/record.png")}
                  alt=""
                />
              </a>
            </div>
            <div className="w-full pt-12">
              <a href="https://vk.com/vcentre_club">
                <img
                  className="w-full"
                  src={require("../images/logoBNW.png")}
                  alt=""
                />
              </a>
            </div>
            <div className="w-full">
              <a href="https://vk.com/pmk_r">
                <img
                  className="w-full"
                  src={require("../images/dvorBNW.png")}
                  alt=""
                />
              </a>
            </div>
            <div className="w-full">
              <a href="https://vk.com/pmk_pro">
                <img
                  className="w-full"
                  src={require("../images/promBNW.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <ul className="flex flex-col lg:flex-row text-lg">
          <li className="py-3 px-4">
            <a href="https://vk.com/vcentre_club?z=photo-57496873_457245275%2Falbum-57496873_288027985">
              Расписание занятий
            </a>
          </li>
          <li className="py-3 px-4">
            <a href="https://vk.com/@vcentre_club?z=article_edit-57496873_173270">
              Забронировать зал
            </a>
          </li>
          <li className="py-3 px-4">
            <a href="https://vk.com/vcentre_club?w=app6819359_-57496873">
              Афиша
            </a>
          </li>
          <li className="py-3 px-4">
            <a href="https://vk.com/albums-57496873">Фотоальбом</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
