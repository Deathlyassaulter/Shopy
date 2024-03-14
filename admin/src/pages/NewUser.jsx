import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 50px;

`

const UserFormm = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    align-items: center;
    justify-content: center;
    padding:20px;
    margin: 30px 0px;
`

const FormItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 10px;
`

const Label = styled.label`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 800;
    color: rgb(151, 150, 150);
`

const Input = styled.input`
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`

const Gender = styled.div`
`

const GenderInput = styled.input`
    margin-top: 15px;
`

const GenderLabel = styled.label`
    margin: 10px;
    font-size: 18px;
    color: #555;
`

const Select = styled.select`
    height: 40px;
    border-radius: 5px;
`

const Option = styled.option`
`

const Button = styled.button`
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`

const NewUser = () => {
    return (
        <Container>
            <Title>New User</Title>
            <UserFormm>
                <FormItem>
                    <Label>Username</Label>
                    <Input type="text" placeholder="john"/>
                </FormItem>
                <FormItem>
                    <Label>Full Name</Label>
                    <Input type="text" placeholder="John Smith"/>
                </FormItem>
                <FormItem>
                    <Label>Email</Label>
                    <Input type="email" placeholder="john@gmail.com"/>
                </FormItem>
                <FormItem>
                    <Label>Password</Label>
                    <Input type="password" placeholder="password"/>
                </FormItem>
                <FormItem>
                    <Label>Phone</Label>
                    <Input type="text" placeholder="+91 988813 34313" />
                </FormItem>
                <FormItem>
                    <Label>Address</Label>
                    <Input type="text" placeholder="Mumbai, India" />
                </FormItem>
                <FormItem>
                    <Label>Gender</Label>
                    <Gender>
                        <GenderInput type="radio" name="gender" id="male" value="male" />
                        <GenderLabel for="male">Male</GenderLabel>
                        <GenderInput type="radio" name="gender" id="female" value="female" />
                        <GenderLabel for="female">Female</GenderLabel>
                        <GenderInput type="radio" name="gender" id="other" value="other" />
                        <GenderLabel for="other">Other</GenderLabel>
                    </Gender>
                </FormItem>
                <FormItem>
                    <Label>Active</Label>
                    <Select name="active" id="active">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                </FormItem>
                <Button>Create</Button>
            </UserFormm>
        </Container>
    );

}

export default NewUser;