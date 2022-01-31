import {useEffect} from "react";
import styled from "styled-components";
import {checkAPI} from "../../api";
import Layout from "../../components/layout";
import {BookingsDown} from "./BookingsDown";
import Calendar from "./Calendar";
import {ChartContainerStyled} from "./Chart/chart.styled";
import {Head} from "./head";

export default function App() {
    const title="Dashboard";
    return (
        <Layout title="Dashboard">
            <Head/>
            <ChartCalContainer>
                <Calendar/>
                <ChartContainerStyled/>
            </ChartCalContainer>
            <BookingsDown/>
        </Layout>
  );
        
}

const ChartCalContainer = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
