import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { userRequest } from "../requestMethods";

const Container = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`

const SMTitle = styled.span`
    font-size: 22px;
    font-weight: 600
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const SMList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`

const User = styled.div`
    display: flex;
    flex-direction: column;
`

const Username = styled.span`
    font-weight:600;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`

const WidgetSm = () => {
    const [users, setUsers] = useState([]);

    useEffect (() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true");
                setUsers(res.data);
            }catch{}
        };
        getUsers();
    },[])
    return (
        <Container>
            <SMTitle>New Join Members</SMTitle>
            <SMList>
            { users.map((user) => (
                <Item key={user._id}>
                    <Img src={
                        user.img ||
                        "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                        } 
                        alt="" 
                    />
                <User>
                    <Username>{user.username}</Username>
                </User>
                <Button>
                    <Visibility style={{fontSize:"16px", marginRight:"5px"}}/>
                    Display
                </Button>
                </Item>
            ))}
            </SMList>
        </Container>
    )
}

export default WidgetSm;