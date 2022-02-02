import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import CardUser from "./Card";
import { fetchUsersList, selector } from "../../redux/slices/UsersSlice";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import {Head} from './head';
import ReactPaginate from 'react-paginate';

export default function Users() {
  const dispatch = useDispatch();

  const { usersList, loading } = useSelector(selector);

    const [offset, setOffset] = useState(0);
    const [perPage] = useState(4);
    const [pageCount, setPageCount] = useState(0);
    const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

    useEffect(() => {
        setPageCount(Math.ceil(usersList.length/perPage))
        setUsersData(usersList.slice(offset, offset+perPage))
    }, [offset, usersList])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset((selectedPage + 1)*perPage)
    }

  function Header(){
    return (
        <HeaderDiv>
            <div style={{width: "24%"}}>User</div>
            <div style={{width: "15%" }}>Start Date</div>
            <div style={{width: "15%"}}>Contact</div>
            <div style={{width: "33%"}}>Job Description</div>
            <div style={{width: "10%"}}>Status</div>
        </HeaderDiv>
    )
  }

  function RenderTableUsers() {
    return usersData.map((user, index) => {
      return <CardUser key={user.id} user={user} />;
    });
  }
  return (
      <Layout title="Users">
          <Head/>
          <Header/>
          {!loading ? <RenderTableUsers/> : <h2>Loading...</h2>}
          <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
      </Layout>
  );
}

const HeaderDiv = styled.div`
    div{
        margin: 3%;
    }
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
