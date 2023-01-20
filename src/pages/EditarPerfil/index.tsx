import TextField from "@mui/material/TextField";
import { useState } from "react";
export default () => {
    const [inputs, setInputs] = useState({
        name: "",
        age: "",
        email: "",
        password: ""
    });
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="name"
                variant="outlined"
                value={inputs.name}
                onChange={(e) => setInputs((prev) => ({ ...prev, name: e.target.value }))}
            />
            <TextField
                id="outlined-basic"
                label="age"
                variant="outlined"
                value={inputs.age}
                onChange={(e) => setInputs((prev) => ({ ...prev, age: e.target.value }))}
            />
            <TextField
                id="outlined-basic"
                label="email"
                variant="outlined"
                value={inputs.email}
                onChange={(e) => setInputs((prev) => ({ ...prev, email: e.target.value }))}
            />
            <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                value={inputs.password}
                onChange={(e) => setInputs((prev) => ({ ...prev, password: e.target.value }))}
            />
        </div>
    );
};
