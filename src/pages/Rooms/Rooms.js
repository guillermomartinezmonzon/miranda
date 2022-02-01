import styled from 'styled-components';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Layout from "../../components/layout";
import { CardRoomContainer } from "./CardRoomContainer";
import {Head} from "./head";
import ReactPaginate from 'react-paginate';

export default function Rooms() {
  function Header(){
    return (
        <HeaderDiv>
            <div style={{paddingLeft: '2%', width: "3%"}}></div>
            <div style={{width: "20%"}}>Name/ID</div>
            <div style={{width: "15%" }}>Type</div>
            <div style={{width: "33%"}}>Facilities</div>
            <div style={{width: "5%"}}>Price</div>
            <div style={{width: "5%"}}>Offer</div>
            <div style={{width: "10%"}}>Status</div>
        </HeaderDiv>
    )
  }
  return (
      <Layout title="Rooms">
            <Head/>
            <Header/>
            <DndProvider backend={HTML5Backend}>
                <CardRoomContainer />
            </DndProvider>
          </Layout>
  );
}

const HeaderDiv = styled.div`
    font-size: 16px;
    font-weight: bold;
    display: flex;
    text-align: left;
    background-color: white;
    border-radius: 8px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-bottom: 3px;
    height: ${p => p.theme.sizes.cardHeight}px;
    width: 95%;
    white-space:nowrap;
`
