import {useEffect} from 'react';
import styled from 'styled-components';
import { initGraph } from '.';
import { useTheme } from "styled-components";

export const ChartContainerStyled = () => {

    const theme = useTheme();
    const width = theme.sizes.dashboardItemWidth;
    const height = theme.sizes.dashboardItemHeight;
    const margin = theme.sizes.dashboardItemMargin/2;

    useEffect(()=>{
        initGraph(width, height, margin);        
    },[])

    return (
        <LayoutStyled id="layout">
            <ContainerStyled id="container">
                <SvgStyled/>
             </ContainerStyled>     
        </LayoutStyled>
    )

}


const ContainerStyled = styled.div`
  width: ${props => props.theme.sizes.dashboardItemWidth}px;
  height: ${props => props.theme.sizes.dashboardItemHeight}px;
  margin: auto;
  background-color: ${props => props.theme.colors.bg};
    border-radius: 8px;
    box-shadow: 0px 4px 4px #00000005;
 
    .bar {
      fill: ${props => props.theme.colors.eden};
    }
    .bar2 {
      fill: ${props => props.theme.colors.mainRed};
    }
    .bar3 {
      fill: ${props => props.theme.colors.mainOrange};
    }

    text {
      font-size: 12px;
      fill: ${props => props.theme.colors.eden};
    }

    path {
      stroke: ${props => props.theme.colors.cloud};
    }

    line {
      stroke: ${props => props.theme.colors.cloud};
    }

    line#limit {
      stroke: ${props => props.theme.colors.mainRed};
      stroke-width: 3;
      stroke-dasharray: 3 6;
    }

    .grid path {
      stroke-width: 0;
    }

    .grid .tick line {
      stroke: ${props => props.theme.colors.cloud};
      stroke-opacity: 0.4;
    }

    text.divergence {
      font-size: 32px;
      fill: ${props => props.theme.colors.mainRed};
      text-shadow: 0.5px 0.5px 1px white;
    }

    text.value {
      font-size: 22px;
      fill: ${props => props.theme.colors.mainRed};
    }

    text.title {
      font-size: 18px;
      font-weight: 600;
      fill: ${props => props.theme.colors.mainRed};
    }

    text.label {
      font-size: 14px;
      font-weight: 400;
    }

    text.source {
      font-size: 12px;
          fill: ${props => props.theme.colors.mainRed};
    }

 
`

const LayoutStyled = styled.div`
    text-align: center;
    margin-bottom: 30px;
`

const SvgStyled = styled.svg`
  width: 100%;
  height: 100%;
`
