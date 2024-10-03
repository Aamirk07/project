import React, { useState } from "react";
import "./header.css";
import { FaBowlFood } from "react-icons/fa6";
import { PiChefHatFill } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { GiCook } from "react-icons/gi";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname.split("/")[1];
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    caterer: 1,
    chef: 0,
  });

  const handelOptoin = (name, opreation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opreation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          location === "list"
            ? "header-container-paddingChange"
            : "header-container"
        }
      >
        <div className="header-list">
          <div className="header-list-item active">
            <FaBowlFood />
            <span>Caterer</span>
          </div>
          <div className="header-list-item">
            <PiChefHatFill />
            <span>Cook</span>
          </div>
          <div className="header-list-item">
            <GiHotMeal />
            <span>Foods</span>
          </div>
          <div className="header-list-item">
            <BsThreeDots />
            <span>Others</span>
          </div>
        </div>
        {location !== "list" && (
          <>
            <h1 className="header-title">A good discount? It's Genius</h1>
            <p className="header-dsc">
              Get reward for your booking - unlock instant saving of 10% or more
              with a free Srxbooking account.
            </p>
            <button className="header-btn">Sign in / Register</button>
            <div className="header-serach">
              <div className="header-search-item">
                <PiChefHatFill className="header-icon" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="header-search-item-input"
                />
              </div>
              <div className="header-search-item">
                <SlCalender className="header-icon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header-search-text"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="header-search-item">
                <GiCook className="header-icon" />
                <span
                  className="header-search-text"
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.caterer} Caterer & ${options.chef} Chef`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="options-item">
                      <span className="option-text">Caterer</span>
                      <div className="options-counter">
                        <button
                          disabled={options.caterer <= 1}
                          className="options-counter-btn"
                          onClick={() => handelOptoin("caterer", "d")}
                        >
                          -
                        </button>
                        <span className="options-counter-number">
                          {options.caterer}
                        </span>
                        <button
                          className="options-counter-btn"
                          onClick={() => handelOptoin("caterer", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options-item">
                      <span className="option-text">Chef</span>
                      <div className="options-counter">
                        <button
                          disabled={options.chef <= 1}
                          className="options-counter-btn"
                          onClick={() => handelOptoin("chef", "d")}
                        >
                          -
                        </button>
                        <span className="options-counter-number">
                          {options.chef}
                        </span>
                        <button
                          className="options-counter-btn"
                          onClick={() => handelOptoin("chef", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="header-search-item">
                <button className="header-btn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
