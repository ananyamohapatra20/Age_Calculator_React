import React, { useState } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {

    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);
    const calculateAge = () =>{
        const today = new Date();
        const birthday = new Date(birthdate);
        console.log("Birthday",birthday);
        let age = today.getFullYear() - birthday.getFullYear();
        const monthDiff = today.getMonth() - birthday.getMonth();
        if(monthDiff < 0 || (monthDiff===0 && today.getDate()< birthday.getDate())){
            age--;
        }
        console.log("Calculated Age:", age);
        setAge(age);

    }
    const resetCalculator = () =>{
        setBirthdate('');
        setAge(0);
    }





  return (
    <>
    <div className="Container">
      <h2 className="heading container_title">Age Caculator</h2>
      <p className="para container_title">
        This age app helps in calculating the exact age. All you have to do is
        enter the accurate date of birth and the result will depict the exact
        age, next birthday.
      </p>
      <div className="Container_middle">
        <div className="right">
          <h4>Date of Birth</h4>
          <input className="date" type="date" value={birthdate} onChange={(e=>setBirthdate(e.target.value))}/>
          <div className="button_div">
            <button className="button-65" onClick={calculateAge}>Calculate Age</button>
            <button className="button-65" onClick={resetCalculator}>Reset</button>
          </div>
        </div>
        <div className="left">
            <div className="Container_middle_para">
            <h1>Your Age is</h1>
            </div>
            <h1 className="age_heading">{age > 0 ? `${age}`: ""}</h1>
        </div>
      </div>
    </div>
    </>
  );
};
export default AgeCalculator;
