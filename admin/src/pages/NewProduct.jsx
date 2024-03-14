import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import app from "firebase";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
}   from "firebase/storage";
import { addProduct } from "../redux/apiCalls";


const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    margin: 0 auto;
    padding : 20px;
    border: 1px solid #666666;
    border-radius: 30px;
    background-color: #eaeaea;
`
const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`

const Form = styled.form`
    margin-bottom:20px;
`

const Item = styled.div`
`
const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`

const Input = styled.input`
    width: 90%;
    padding:10px;
    border: 1px solid #999999;
    border-radius: 10px;
`

const Select = styled.select`
    width: 90%;
    padding:10px;
    border: 1px solid #999999;
    border-radius: 10px;
`

const Button = styled.button`
    width: 95%;
    margin-top:20px;
    padding: 10px 15px;
    background-color: #ff5722;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`

const NewProduct = () => {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    };

    const handleCat = (e) => {
        setCat(e.target.value.split(","));
    };

    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = 
                    (snapshot.bytesTransferred / snapshot.totalBytes) *100;
                console.log("Upload is " + progress + "% done");

                switch(snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                    break;
                    case "running":
                        console.log("Upload is running");
                    break;
                    default:
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = {...inputs, img:downloadURL, categories:cat};
                    addProduct(product, dispatch);
                });
            }
        );
    };

    return (
        <Container>
            <Title>New Product</Title>
                <Form>
                    <Item>
                        <Label> Image </Label>
                        <Input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])} 
                        />
                    </Item>
                    <Item>
                        <Label> Title </Label>
                        <Input 
                            name="title"
                            type="text"
                            placeholder="Apple Airpods"
                            onChange={handleChange}
                        />
                    </Item>
                    <Item>
                        <Label> Description </Label>
                        <Input 
                            name="desc"
                            type="text"
                            placeholder="description..."
                            onChange={handleChange}
                        />
                    </Item>
                    <Item>
                        <Label> Price </Label> 
                        <Input 
                            name="price"
                            type="number"
                            placeholder="1000"
                            onChange={handleChange}
                        />
                    </Item>
                    <Item>
                        <Label> Categories </Label>
                        <Input 
                            type="text"
                            placeholder="white, earphones"
                            onChange={handleCat}
                        />
                    </Item>
                    <Item>
                        <Label> Stock </Label>
                        <Select name="inStock" onChange={handleChange}>
                            <option value="true"> Yes </option>
                            <option value="false" > No</option>
                        </Select>
                    </Item>
                    <Button onClick={handleClick} >
                        Create
                    </Button>
                </Form>
            
        </Container>

    );
};

export default NewProduct;