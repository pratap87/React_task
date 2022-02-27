import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Dashboard from "./components/Dashboard";
import dataset from "./data/1234.json";
import dataset2 from "./data/4321.json";
import { useNumArray } from "./hook/useNumArray";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 75px;
  width: 60%;
  border-radius: 20px 0px 0px 20px;
  margin-top:5rem;
  font-size: calc(20px + 2vmin);
  text-align: center;
  :focus {
    outline: none;
  }
 
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  @media (max-width:500px)
  {
    height:60px;
    font-sie:0.1rem;
  }
`;

const FormDiv = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  @media (max-width:500px)
  {
     width:80%;
     margin-left:10%;
     
  justify-content: center;
  align-items: center;
  }
`;

const StyledButton = styled.button`
 
  margin-top:5rem;
  border-radius: 0px 20px 20px 0px;
  color:white;
  font-weight:600;
  width: 10rem;
  height: 5rem;
  align-items: center;
  cursor:pointer;
  justify-content: center;
  background-color: #faa916;
  @media (max-width:500px)
  {
    height:66px;
  }
`;
const ButtonGrp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Button = styled(motion.button)`
  width: 16rem;
  border-radius: 40px;
  margin: 1rem;
    color:white;
  font-weight:700;
  cursor:pointer;

  background-color: #faa916;
  height: 4rem;
`;
const MainComponent = () => {
  const [data, setdata] = useState(dataset.data);

  const [value, setValue] = useState();
  const [mean, median, stdDev, mode] = useNumArray(data);

  const stripNonDigit = (value) => {
    if (typeof value === "number" && !isNaN(value)) return value;
    return value.toString().replace(/[^\d]/gi, "");
  };

  const handleClick = (e) => {



    if(value!==''){
        const newvalue = parseInt(stripNonDigit(value));

  

        setdata([...data, newvalue]);
    
     
        setValue("");
    }
    else{
        alert('Please Enter Numerical Value')
    }

  };

  const onChange = (e) => {
    const numValue = stripNonDigit(parseInt(e.target.value));

    setValue(isNaN(numValue) ? null : numValue);
  };

  
  return (
    <>
      <Dashboard mean={mean} median={median} stdDev={stdDev} mode={mode} />
      <div className="FormSection">
      <FormDiv>
        <StyledInput
          type="number"
          placeholder="Enter a number"
          onChange={onChange}
          value={value}
        />

        <StyledButton
          testid="submit-btn"
          onClick={handleClick}
          text="Submit"
          btnType="submit"
        >
          Submit
        </StyledButton>
      </FormDiv>
      <ButtonGrp>
        <Button
        whileHover={{scale:1.15}}
          onClick={() => {
            setdata(dataset.data);
          }}
        >
          Reload Json-1234 Data
        </Button>
        <Button
        
        whileHover={{scale:1.15}}
          onClick={() => {
            setdata(dataset2.data);
          }}
        >
          Reload Json-4321 Data
        </Button>
      </ButtonGrp>
      </div>
    </>
  );
};



export default MainComponent;
