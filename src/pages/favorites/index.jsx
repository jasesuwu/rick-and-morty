import { FavoritesContext } from "../../context/favoritesContext";
import { useContext } from "react";
import { Character } from "../../components/Character";

export default function FavoritesPage() {
  const { favorites, addAndRemoveFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h1 className="text-center">Favorites</h1>
      <div className="row">
        {!favorites ? (
          <div>
            <h1>No se han agregado personajes a favoritos</h1>
          </div>
        ) : (
          favorites.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
                onClick={() =>
                  addAndRemoveFavorite({
                    id: character.id,
                    name: character.name,
                    origin: character.origin,
                    image: character.image,
                  })
                }
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
