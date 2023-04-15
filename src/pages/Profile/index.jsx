import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Avatar } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NavLink } from "../../components/NavLink";

import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";


export function Profile(){
  const { user, updateProfile } = useAuth();
  
  const [name, setName] = useState(user.name); 
  const [email, setEmail] = useState(user.email); 

  const [passowordOld, setPasswordOld] = useState("");
  const [passowordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passowordNew,
      old_password: passowordOld
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    // get event's file, the file user chose
    const file = event.target.files[0];

    setAvatarFile(file);

    // create file's url
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function returnNavigation() {
    navigate(-1);
  } 

  return(
    <Container>
      <header>
        <NavLink title="Voltar" icon={FiArrowLeft} onClick={returnNavigation} />
      </header>

      <Form>
        <Avatar>
          <img 
            src={avatar} 
            alt={`Foto de ${user.name}`} 
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button 
          title="Salvar"
          onClick={handleUpdate}
        />
      </Form>

    </Container>
  )
}