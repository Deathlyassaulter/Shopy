import { ArrowDownward, ArrowUpward, } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { styled } from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Wrapper = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const FTitle = styled.span`
    font-size: 20px;
`

const MoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`

const Money = styled.span`
    font-size: 30px;
    font-weight: 600;
`

const MoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const Sub = styled.div`
    font-size: 15px;
    color: gray;
`

const FeaturedInfo = () => {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("orders/income");
                setIncome(res.data);
                setPerc((res.data[1].total*100) / res.data[0].total - 100);
            } catch{}
        };
        getIncome();
    });

    return (
        <Container>
            <Wrapper>
                <FTitle>Revenue</FTitle>
                <MoneyContainer>
                    <Money> 875682</Money>
                    <MoneyRate>
                        %{Math.floor(perc)}{" "}
                        perc
                        { -1 < 0 ? (
                            <ArrowDownward style={{fontSize:"14px", marginLeft: "5px",  color: "red"}}/>
                            ) : (
                            <ArrowUpward style={{fontSize:"14px", marginLeft: "5px",  color: "green"}}/>
                            )
                        }
                    </MoneyRate>
                </MoneyContainer>
                <Sub> Compated to last month</Sub>
            </Wrapper>
            <Wrapper>
                <FTitle>Sales</FTitle>
                <MoneyContainer>
                    <Money>INR 45723</Money>
                    <MoneyRate>
                        -1.4 <ArrowDownward style={{fontSize:"14px", marginLeft: "5px",  color: "red"}}/>
                    </MoneyRate>
                </MoneyContainer>
                <Sub> Compated to last month</Sub>
            </Wrapper>
            <Wrapper>
                <FTitle>Cost</FTitle>
                <MoneyContainer>
                    <Money>INR 24723</Money>
                    <MoneyRate>
                        2.4 <ArrowUpward style={{fontSize:"14px", marginLeft: "5px",  color: "green"}}/>
                    </MoneyRate>
                </MoneyContainer>
                <Sub> Compated to last month</Sub>
            </Wrapper>
        </Container>
    );
};

export default FeaturedInfo;