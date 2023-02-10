import { useState } from "react";
import Icon from "./Icon";

export default function AsideUser(props) {
  const [user, setUser] = useState(props.user);

  const changeName = () => {
    const newName = prompt("Digite seu novo nome.");
    if (!newName.trim()) return;
    setUser({ ...user, name: newName });
  };
  const changePhoto = () => {
    const newPhoto = prompt("Coloque a url da sua nova foto.");
    if (!newPhoto.trim()) return;
    setUser({ ...user, image: newPhoto });
  };

  return (
    <section className="my-user">
      <img
        data-test="profile-image"
        onClick={changePhoto}
        alt="img"
        className="avatar"
        src={user.image}
      />
      <div>
        <div className="edit-name">
          <p data-test="name">{user.name}</p>
          <div data-test="edit-name" onClick={changeName}>
            <Icon name="pencil" />
          </div>
        </div>
        <p>{user.displayName}</p>
      </div>
    </section>
  );
}
