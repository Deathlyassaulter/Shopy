import { styled } from "styled-components";
import { Publish } from "@material-ui/icons";
import Chart from "../components/Chart";
import {useLocation} from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";

const Container = styled.div`
    display: flex;
    // justify-content: center;
    padding:20px;
    align-items:center;
    height:100vh;
    flex-direction: column;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
const Title = styled.h1`
    font-size:50px;
`
const AddButton = styled.button`
    width: 100px;
    position:absolute;
    right: 5%;
    top: 5%;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    
`

const ProductTop = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 0% 20%;
    
`

const Topleft = styled.div`
    flex: 1;
`

const Infotop = styled.div`
    display: flex;
    align-items: center;
`

const Topright = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const InfoImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`

const ProdTitle = styled.span`
    font-weight: 600;
`

const Infobottom = styled.div`
    margin-top: 10px;
    
`

const InfoItem = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-between;
`

const Key = styled.span`

`

const Value = styled.span`
font-weight: 300;
`

const ProductBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0% 20%;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const ProdForm = styled.form`
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const FormLeft = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    margin: 0 50px;
`

const FormLabel = styled.label`
    margin-bottom: 5px;
    color: gray;
`

const FormInput = styled.input`
    margin-bottom: 5px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
`

const FormSelect = styled.select`
    margin-top: 5px;
    margin-bottom: 5px;
`

const FormRight = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 50px;
`

const Upload = styled.div`
    display: flex;
    align-items: center;
`

const UploadImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`

const UploadLabel = styled.label`
`

const UploadInput = styled.input`
    display: none;
`

const UpdateButton = styled.button`
    border: none;
    padding: 5px;
    margin-top:50px;
    border-radius: 5px;
    background-color: darkblue;
    color:white;
    font-weight: 600;
    cursor: pointer;
`

const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [pStats, setPStats] = useState([]);

    const product = useSelector((state) => 
        state.product.products.find((product) => product._id === productId)    
    );

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

    useEffect( () => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("orders/income?pid=" + productId);
                const list = res.data.sort((a,b) => {
                    return a._id - b._id
                })

                list.map((item) => 
                setPStats((prev) => [
                    ...prev,
                    {name:MONTHS[item._id-1], Sales: item.total},
                ])
                );
            } catch (error) {
                console.log(error);
            }
        };
        getStats();
    },[productId, MONTHS]);

    return(
        <Container>
            <TitleContainer>
                <Title>Product</Title>
                <a href="/newproduct">
                    <AddButton> Create</AddButton>
                </a>
            </TitleContainer>
            <ProductTop>
                <Topleft>
                    <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
                </Topleft>
                <Topright>
                    <Infotop>
                        <InfoImg src={product.img} alt=""/>
                        <ProdTitle>{product.title}</ProdTitle>
                    </Infotop>
                    <Infobottom>
                        <InfoItem>
                            <Key>id:</Key>
                            <Value>{product._id}</Value>
                        </InfoItem>
                        <InfoItem>
                            <Key>sales:</Key>
                            <Value>12341</Value>
                        </InfoItem>
                        <InfoItem>
                            <Key>in stock:</Key>
                            <Value>{product.inStock}</Value>
                        </InfoItem>
                    </Infobottom>
                </Topright>
            </ProductTop>
            <ProductBottom>
                <ProdForm>
                    <FormLeft>
                        <FormLabel>Product Name</FormLabel>
                        <FormInput type="text" placeholder={product.title}/>
                        <FormLabel>Product Description</FormLabel>
                        <FormInput type="text" placeholder={product.desc}/>
                        <FormLabel>Price</FormLabel>
                        <FormInput type="text" placeholder={product.price}/>
                        <FormLabel>In Stock</FormLabel>
                        <FormSelect name="inSttock" id="idStock" >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </FormSelect>
                    </FormLeft>
                    <FormRight>
                        <Upload>
                            <UploadImage src={product.img} alt="" />
                            <UploadLabel for="file">
                                <Publish />
                            </UploadLabel>
                            <UploadInput type="file"  id="file" />
                        </Upload>
                        <UpdateButton>Update</UpdateButton>
                    </FormRight>
                </ProdForm>
            </ProductBottom>
        </Container>
    );
}

export default Product;