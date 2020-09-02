import React from "react";
import StickyBox from "react-sticky-box";
import List from "../List";
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Maybe you like"
            elements={[
              <FollowSuggestion name="Stephen Hawking" nickname="@hawking" />,
              <FollowSuggestion name="Carl Sagan" nickname="@sagan" />,
              <FollowSuggestion
                name="Christian Bale"
                nickname="@christianbale"
              />,
            ]}
          />
          <List
            title="Maybe you like"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Maybe you like"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
