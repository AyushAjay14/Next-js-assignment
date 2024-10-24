import { Character } from "@/components/characters/Character";
import { getCharacterById } from "@/queries/characterById";
import { getCharacters } from "@/queries/characters";

import React from "react";

const CharacterDetail = ({ character }) => {
  return <Character character={character} />;
};
export async function getStaticPaths() {
  const data = await getCharacters();
  const characters = data.characters.results;
  const paths = characters.map((character) => ({
    params: {
      id: character.id,
    },
  }));
  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  const data = await getCharacterById(params);
  return {
    props: {
      character: data.character,
    },
  };
}
export default CharacterDetail;
