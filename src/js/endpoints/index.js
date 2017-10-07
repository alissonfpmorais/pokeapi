function getPokemonList () {
  return `https://pokeapi.co/api/v2/pokemon-species/?limit=50`
}

function getDetailedPokemonInfo (id) {
  return `https://pokeapi.co/api/v2/pokemon/${id}`
}

function getPokemonAvatar (id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

export { getPokemonList, getDetailedPokemonInfo, getPokemonAvatar }
