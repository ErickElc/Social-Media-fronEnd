import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Config
import { useModalHeaderContext } from "../../context/modalHeader.context";
import { useDataContext } from "../../context/dataContext";
import * as S from "../../styles/components";
import * as interfaces from "./types";
import http from "../../api/api";
import "./styles.scss";

//Libs
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default () => {
    const modalContext = useModalHeaderContext();
    const DataContext = useDataContext();
    const navigate = useNavigate();

    const [users, setUsers] = useState<interfaces.UsersData[]>([]);
    const [input, setInputs] = useState("");

    const ToggleMode = () => {
        modalContext.openModal();
    };

    const BuscarUser = (userID: any) => {
        navigate(`/perfil/${userID}`);
        window.location.reload();
    };

    const perfis = () => {
        let label: Array<interfaces.ILabel | []> = [];
        for (let i in users) {
            label.push({ label: users[i]?.name, id: users[i]?._id });
        }
        return label;
    };

    useEffect(() => {
        http.get("api/users/all")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <S.HeaderComponent>
            <div className="mb-2">
                <S.TextColor>
                    <Link to="/">WorkMedia</Link>
                </S.TextColor>
            </div>
            <div className="mb-2">
                <Autocomplete
                    onChange={(e: any, option: any) => {
                        BuscarUser(option.id);
                    }}
                    disablePortal
                    id="combo-box-demo"
                    options={perfis()}
                    sx={{ width: 250 }}
                    fullWidth
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Pesquise por perfis"
                            onChange={(e: any) => setInputs(e.target.value)}
                            value={input}
                        />
                    )}
                />
            </div>
            <S.HeaderPerfil className="flex items-center mx-3 mb-2" onClick={ToggleMode}>
                <Avatar
                    src={DataContext.userData?.avatar}
                    alt="broken-image.jpg"
                    className="mr-3"
                    style={{ minHeight: "auto", minWidth: "auto" }}
                />
                <p>{DataContext.userData?.name}</p>
            </S.HeaderPerfil>
        </S.HeaderComponent>
    );
};
