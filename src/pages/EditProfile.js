import React, {useState, useEffect} from "react";
import { AvatarProfile } from "../components/AvatarProfile";
import { FormProfile } from "../components/FormProfile";
import { Modal } from '../components/Modal'
import { ChangePhoto } from "../components/ChangePhoto";
import { BackGround, Text, EditIcon } from "../styles/Hero";

import { useStateValue } from "../Context";

function useProgramsData(URI) {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch(`${URI}/get_programas_academicos`)
      .then(response => response.json())
      .then(data => setPrograms(data));
  }, []);
  return { programs };
}


export const EditProfile = ({ view = "Profile" }) => {
  const URI = process.env.API_URL;
  const [{ user }, dispatch] = useStateValue();
  const [profile, setProfile] = useState({});
  const [open, setOpen] = useState(false)
  const { programs } = useProgramsData(URI);
  useEffect(()=>{
    setProfile({
      ...user,
      password:'',
      newPassword : '',
      repNewPassword : '',
    })
  },[user]) 

  const closeModal = (e) => {
    e.preventDefault();
    setOpen(!open)
  }

  return (
    <React.Fragment>
      <BackGround>
        <AvatarProfile />
        <EditIcon size={28} onClick={() => setOpen(!open)}>JI/</EditIcon>
        <Text>{view}</Text>
      </BackGround>
      <FormProfile profile={profile} programs={programs} option={'edit'}/>
      <Modal open={open}> 
          <ChangePhoto image={user.profilePicture || user.gravatar} close={closeModal}/>
      </Modal>
    </React.Fragment>
  );
};
