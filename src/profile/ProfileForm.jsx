import { useContext} from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileForm(){
    const {name, setName, address, setAddress } = useContext(ProfileContact)

    return(
        <>
        <h2>Profile Form</h2>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama"
        />
        <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Alamat"
        />
        </>
    )
}