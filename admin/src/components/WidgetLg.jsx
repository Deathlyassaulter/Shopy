import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { userRequest } from "../requestMethods"
import { format } from "timeago.js";

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`

const LGTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`

const LGTable = styled.table`
    width: 100%;
    border-spacing: 20px;
`
const Rows = styled.tr`
`

const Heading = styled.th`
    text-align: left;
`

const User = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`

const Data = styled.td`
    font-weight: 300;
`

const Status = styled.td`
`

const StatusButton = styled.button`
    padding: 8px 10px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.name === "Approved" && "#e5faf2"};
    color:  ${(props) => props.name === "Approved" && "#3bb077"};
    background-color: ${(props) => props.name === "Declined" && "#fff0f1"};
    color:  ${(props) => props.name === "Declined" && "#d95087"};
    background-color: ${(props) => props.name === "Pending" && "#ebf1fe"};
    color:  ${(props) => props.name === "Pending" && "#2a7ade"};
    font-size: 14px;
`


const WidgetLg = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders");
                setOrders(res.data);
            } catch{}
        };
        getOrders();
    },[]);

    
    const SetStatus = ({ name }) => {
        return <StatusButton name = {name}>{name}</StatusButton>
    }

    return (

        <Container>
            <LGTitle>Latest Transactions</LGTitle>
            <LGTable>
                <Rows>
                    <Heading> Customer</Heading>
                    <Heading> Date</Heading>
                    <Heading> Amount</Heading>
                    <Heading> Status</Heading>
                </Rows>
                {orders.map((order) =>(
                    <Rows key={order._id} > 
                        <User>ID
                            {order.userId}
                        </User>
                        <Data>{format(order.createdAt)}</Data>
                        <Data>${order.amount}</Data>
                        <Status >
                            <SetStatus name="Pending" />
                        </Status>
                    </Rows>
                ))}
            </LGTable>
        </Container>
    )
}

export default WidgetLg;