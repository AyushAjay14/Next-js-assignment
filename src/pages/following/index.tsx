import CharacterList from "@/components/characters/CharacterList";
import { getFollowedCharacters } from "@/queries/followedCharacters";
import React from "react";

const Following = ({ characters }) => {
  return <CharacterList characters={characters} />;
};

export async function getServerSideProps() {
  const followedCharacters = await getFollowedCharacters();
  return {
    props: {
      characters: followedCharacters,
    },
  };
}
export default Following;
