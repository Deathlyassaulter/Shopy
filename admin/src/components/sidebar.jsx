import { 
    AttachMoney,
    BarChartOutlined,
    ChatBubbleOutline,
    DynamicFeed,
    LineStyle,
    MailOutline,
    PermIdentity,
    Report,
    Storefront,
    Timeline,
    TrendingUp,
    WorkOutline,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`

const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`

const Menu = styled.div`
    margin-bottom: 10px;
`

const SBtitle = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
`

const SBList = styled.ul`
    list-style: none;
    padding: 5px;
`

const Item = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &:hover {
        background-color: rgb(240, 240, 255);
    };
`

const Link = styled.a`

`

const sidebarIcon = {
    marginRight: "5px",
    fontSize: "20px",
};



const Sidebar = () => {
    return (
        
        <Container>
            <Wrapper>
                <Menu>
                    <SBtitle>Dashboard</SBtitle>
                    <SBList>
                        <Link href="/">
                            {/* style */}
                            <Item>
                                {/* active */}
                                <LineStyle style={sidebarIcon} />
                                Home
                            </Item>
                        </Link>
                        <Item>
                            <Timeline style={sidebarIcon} />
                            Analytics
                        </Item>
                        <Item>
                            <TrendingUp style={sidebarIcon} />
                            Sales
                        </Item>
                    </SBList>
                </Menu>
                <Menu>
                    <SBtitle>Quick Menu</SBtitle>
                    <SBList>
                        <Link href="/users">
                           {/* style */}
                            <Item>
                                <PermIdentity style={sidebarIcon} />
                            Users                        
                            </Item>
                        </Link>
                        <Link href="/products">
                            {/* style */}
                            <Item>
                                <Storefront style={sidebarIcon} />
                                Products
                            </Item>
                        </Link>
                        <Item>
                            <AttachMoney style={sidebarIcon} />
                            Transactions
                        </Item>
                        <Item>
                            <BarChartOutlined style={sidebarIcon} />
                            Reports
                        </Item>
                    </SBList>
                </Menu>
                <Menu>
                    <SBtitle>Notifications</SBtitle>
                    <SBList>
                        <Item>
                            <MailOutline style={sidebarIcon} />
                            Mail
                        </Item>
                        <Item>
                            <DynamicFeed style={sidebarIcon} />
                            Feedback
                        </Item>
                        <Item>
                            <ChatBubbleOutline style={sidebarIcon} />
                            Messages
                        </Item>
                    </SBList>
                </Menu>
                <Menu>
                    <SBtitle>Staff</SBtitle>
                    <SBList>
                        <Item>
                            <WorkOutline style={sidebarIcon} />
                            Manage
                        </Item>
                        <Item>
                            <Timeline style={sidebarIcon} />
                            Analytics
                        </Item>
                        <Item>
                            <Report style={sidebarIcon} />
                            Reports
                        </Item>
                    </SBList>
                </Menu>
            </Wrapper>
        </Container>
    );
}

export default Sidebar;