import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import { styled } from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
`;

const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`;

const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`

const Topbar = () => {
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Logo> Prometheus </Logo>
                </Left>
                <Right>
                    <IconContainer>
                        <NotificationsNone />
                        <IconBadge>2</IconBadge>
                    </IconContainer>
                    <IconContainer>
                        <Language />
                        <IconBadge>2</IconBadge>
                    </IconContainer>
                    
                    <IconContainer>
                        <Settings />
                    </IconContainer>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj85beK1k6S8JurKBtcq7yrb61gRt9sQ8N4iIyRt8&s" />
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Topbar;