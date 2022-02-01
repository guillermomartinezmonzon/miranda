import styled from 'styled-components';
import "react-modern-calendar-datepicker/lib/DatePicker.css";

export function Head(){
    return (
        <HeadContainer>
            <Card>
                <p>Accusantium et facere excepturi sit corporis dolores. In non enim nesciunt doloremque quis. Nulla consectetur consectetur eius occaecati voluptatem.</p>
                <DownCard> 
                    <img src="https://freepngdownload.com/image/light-png-free-download-3.png" alt=""/>
                        <div >
                        <p>Anderson Silva</p>
                        <span>1 min ago</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-times-circle"></i>
                    </div>
                </DownCard>
            </Card>
            <Card>
                <p>Accusantium et facere excepturi sit corporis dolores. In non enim nesciunt doloremque quis. Nulla consectetur consectetur eius occaecati voluptatem.</p>
                <DownCard> 
                    <img src="https://freepngdownload.com/image/light-png-free-download-3.png" alt=""/>
                        <div >
                        <p>Francisco Pérez</p>
                        <span>4 min ago</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-times-circle"></i>
                    </div>
                </DownCard>
            </Card>
            <Card>
                <p>Accusantium et facere excepturi sit corporis dolores. In non enim nesciunt doloremque quis. Nulla consectetur consectetur eius occaecati voluptatem.</p>
                <DownCard> 
                    <img src="https://freepngdownload.com/image/light-png-free-download-3.png" alt=""/>
                        <div >
                        <p>Julia Martínez</p>
                        <span>8 min ago</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-times-circle"></i>
                    </div>
                </DownCard>
            </Card>
        </HeadContainer>
    )
}

const HeadContainer = styled.div`
    width: 97%;
    margin-inline: 4%;
    height: 277px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: wrap;
    p{
        height: 60%;
        margin: 10%;
        font-size: 13px;
        text-align: center;
    }
`
const DownCard = styled.div`
    display: flex;
    height: 40%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    margin: 5%;
    .icons{
        width: 20%;
        display: flex;
        align-items: space-around;
        justify-content: space-around;
    }
    .fa-check-circle{
        color: green;
    }
    .fa-times-circle{
        color: red;
    }
    p{
        font-weight: bold;
        margin: 0;
    }
    span{
        font-size: 11px;
        color: green;
    }
    img{
        width: 56px;
        height: 56px;
    }
`

const Card = styled.div`
    display: flex;
    height: 90%;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    border-radius: 15px;
    margin-inline: 1%;
    width: 35%;
    background-color: white;
`
