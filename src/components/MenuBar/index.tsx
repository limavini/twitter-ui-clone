import React from "react";
import Button from "../Button";
import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  FavoriteIcon,
  EmailIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
} from "./styles";

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Homepage</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>Tweet</Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Vinícius Lima</strong>
          <span>@limavini</span>
        </ProfileData>
      </Botside>
    </Container>
  );
};

export default MenuBar;
