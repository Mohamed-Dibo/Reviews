import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaQuoteLeft,
} from "react-icons/fa";

import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const randomIndex = () => {
    setIndex((index) => {
      let random = Math.floor(Math.random() * people.length - 1);
      if (random === index) {
        random = index + 1;
      }
      return checkIndex(random);
    });
  };
  return (
    <div className="container">
      <div>
      <img className="profile" src={image} alt="pf" />
      </div>
      <div className='text'>
      <p className="name">{name}</p>
      <p className="job">{job}</p>
      <p className="describtion">{text}</p>
      </div>
      <div className="slider">
        <button className="left" onClick={prevPerson}>
          <FaArrowAltCircleLeft />
        </button>
        <button className="right" onClick={nextPerson}>
          <FaArrowAltCircleRight />
        </button>
        <button className="random" onClick={randomIndex}>
          Random
        </button>
      </div>
    </div>
  );
};

export default Review;
