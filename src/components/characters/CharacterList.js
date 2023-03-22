import CharacterCard from './CharacterCard';

const CharacterList = ({ filteredChar }) => {
  const detail = filteredChar.map((eachCharacter) => {
    return <CharacterCard eachCharacter={eachCharacter} />;
  });

  return (
    <section className="list">
      <ul className="profile">{detail}</ul>
    </section>
  );
};

export default CharacterList;