import React from 'react'
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const containerVariants = {
    open: {
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        staggerDirection: -1,
      },
    },
    closed: {
      scale: 0.7,
    },
  };
  
  const statVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: { y: -20, opacity: 0 },
  };
const ItemBox = ({value,title}) => {
  return (
    <StyledTile
    whileHover={{scale:1.15}}
    data-testid={`tile-container-${title}`}
    variants={containerVariants}
    initial="closed"
    animate="open"
    exit="closed"
  >
    <Title data-testid={`tile-title-${title}`}>{title}</Title>
    <Value
     variants={statVariants}
      data-testid={`tile-value-${title}`}
      key={value}
     
      initial="closed"
      animate="open"
      exit="closed"
    >
      {value}
    </Value>
  </StyledTile>
  )
}

export default ItemBox


const StyledTile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 5px solid var(--tileborder);
  background-color: #006181;
  box-sizing: border-box;
  margin: 10px;
  & h4 {
    margin-top: -15px;
  }
  @media (min-width: 600px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 10px solid #00749F;
    height: 200px;
    width: 200px;
    margin: 0px;
  }
`;

const Title = styled.h4`
  margin: 5px 0px;
  color: var(--primarybg);
`;

const Value = styled(motion.h3)`
  margin: 0px;
`;