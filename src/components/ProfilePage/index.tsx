import React from "react";

import {
  Container,
  Banner,
  Avatar,
  LocationIcon,
  CakeIcon,
  Followage,
  ProfileData,
  EditButton,
} from "./styles";

import Feed from "../Feed";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit profile</EditButton>
        <h1>Vinícius Lima</h1>
        <h2>@limavini</h2>

        <p>
          Developer at <a href="www.google.com">@organizecl</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brazil
          </li>
          <li>
            <CakeIcon />
            Born in May 5, 1998
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>94</strong>
          </span>
          <span>
            <strong>951</strong> followers
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
