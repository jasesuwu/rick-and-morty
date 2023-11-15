export function Character(character) {
  return (
    <div className="text-center p-5">
      <div className="flex content-between">
        <h3>{character.name}</h3>
        <button
          className="btn btn-danger btn-sm mb-4"
          onClick={character.onClick}
        >
          {character.isFavorite ? "❌" : "❤"}
        </button>
      </div>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid rounded-pill"
      />
      <p>{`Origin: ${character.origin && character.origin.name}`}</p>
    </div>
  );
}
export default Character;
