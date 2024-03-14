import FeaturedInfo from "../components/featuredInfo";
import Chart from "../components/Chart";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WigdetSm";
import { userData } from "../dummyData";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../requestMethods";
import { styled } from "styled-components";

const Container = styled.div`
    flex: 4;
`

const Wigdets = styled.div`
    display: flex;
    margin: 20px;
`


const Home = () => {
    const [userStats, setUserStats] = useState();
    
    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );

    useEffect(() => {
        const getStats = async () => {
            try{
                const res = await userRequest.get("/users/stats");
                res.data.map((item) => 
                    setUserStats((prev) => [
                        ...prev, 
                        { name: MONTHS[item._id-1], "Active User" : item.total},
                    ])
                );
            } catch {}
        };
        getStats();
    }, [MONTHS]);

    return (
        <Container>
            <FeaturedInfo />
            <Chart 
                data = {userStats}
                title= "User Analytics"
                grid
                dataKey="Active User"
            />
            <Wigdets>
                <WidgetLg />
                <WidgetSm />
            </Wigdets>    
            
        </Container>
    );
}

export default Home;