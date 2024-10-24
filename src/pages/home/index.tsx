import CharacterList from "@/components/characters/CharacterList";
import { getCharacters } from "@/queries/characters";

const Home = ({ characters }: { characters: any }) => {
  return <CharacterList characters={characters} />;
};
export async function getStaticProps() {
  const data = await getCharacters();
  return {
    props: {
      characters: data.characters.results,
    },
  };
}
export default Home;
