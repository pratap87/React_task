import React from 'react'
import ItemBox from './ItemBox'
import styled from 'styled-components';
const Dashboard = ({mean, median, stdDev, mode}) => {
  return (
    <DashboardContainer data-testid="tile-container">
    <ItemBox value={mean} title="Mean" />
    <ItemBox value={median} title="Median" />
    <ItemBox value={stdDev} title="Std Deviation" />
    <ItemBox value={mode} title="Mode" />
  </DashboardContainer>
  )
}

export default Dashboard;


export const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 300px;
  min-width: 100vw;
  width: 100vw;
  align-items: center;
  justify-content: space-evenly;
  color: var(--lightcolor);
  background-color: var(--primarybg);
`;