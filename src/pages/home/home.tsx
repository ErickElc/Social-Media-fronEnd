import { ProtectedLayoutNoLogged } from "../../components/protectedLayout/protectedLayout";
import PostTemplate from "../../components/postTemplate";
import { getUserLocalStorage } from "../../auth/util";
import Main from "../../components/main/Main";
import {useEffect, useState} from 'react';
import http from "../../api/api";

export default function Home(){
    return(
        <ProtectedLayoutNoLogged>
            <>
                <Main/>
                <PostTemplate/>
            </>
        </ProtectedLayoutNoLogged>
    )
}