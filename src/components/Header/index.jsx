import { useNavigate } from "react-router-dom";

import { Container ,Profile ,Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

import  { api } from "../../services/api.js"
import { useAuth } from "../../hooks/auth"

import imgProfileDefault from "../../assets/profileDefault.svg"
export function Header() {
    const { signOut , user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : imgProfileDefault ;
    
    const navigation = useNavigate();
    function handleSignOut(){
        navigation("/");
        signOut();
    }


    return(
        <Container>
            <Profile to = "/profile">
                <img src={avatarUrl} alt={user.name} />
                
                <div>
                    <span>Bem-vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine/>
            </Logout> 
        </Container>
    );
};