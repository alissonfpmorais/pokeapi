import axios from 'axios'
import {
  getPokemonList,
  getDetailedPokemonInfo,
  getPokemonAvatar,
  getItemList,
  getItemAvatar
} from '../endpoints/index'

async function getDetails (id) {
  let result = {
    abilities: [],
    stats: [],
    weight: '',
    moves: [],
    height: '',
    types: []
  }

  if (id) {
    try {
      let apiResponse = await axios(getDetailedPokemonInfo(id))

      apiResponse.data.abilities.map(ability => {
        result.abilities.push(ability.ability.name)
      })

      apiResponse.data.stats.map(stat => {
        let info = {}

        info.name = stat.stat.name
        info.value = stat.base_stat
        result.stats.push(info)
      })

      result.weight = apiResponse.data.weight

      apiResponse.data.moves.map(move => {
        result.moves.push(move.move.name)
      })

      result.height = apiResponse.data.height

      apiResponse.data.types.map(type => {
        result.types.push(type.type.name)
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  return result
}

async function getCards (url, type) {
  let result = { nextUrl: '', cards: [] }

  try {
    if (type === 'items') result = getItems(url)
    else result = getPokemons(url)
  }
  catch (err) {
    console.log(err)
  }

  return result
}

async function getPokemons (url) {
  let result = { nextUrl: '', cards: [] }
  let apiResponse = url ? await axios(url) : await axios(getPokemonList())

  apiResponse.data.results.forEach(pokemon => {
    let baseInfo = {}

    let splittedURL = pokemon.url.split('/')
    baseInfo.name = pokemon.name
    baseInfo.number = splittedURL[splittedURL.length - 2]
    baseInfo.image = getPokemonAvatar(baseInfo.number)

    result.cards.push(baseInfo)
  })

  result.nextUrl = apiResponse.data.next

  return result
}

async function getItems (url) {
  let result = { nextUrl: '', cards: [] }
  let apiResponse = url ? await axios(url) : await axios(getItemList())

  apiResponse.data.results.forEach(item => {
    let baseInfo = {}

    baseInfo.name = item.name
    baseInfo.image = getItemImage(baseInfo.name)

    result.cards.push(baseInfo)
  })

  result.nextUrl = apiResponse.data.next

  return result
}

function getItemImage (name) {
  let filters = [
    { name: 'tm-normal', regexp: new RegExp('tm\\d+', 'i') },
    { name: 'hm-normal', regexp: new RegExp('hm\\d+', 'i') },
    { name: 'data-card', regexp: new RegExp('data-card-\\d+', 'i') }
  ]

  let result = filters.filter(filter => filter.regexp.test(name))
  if (result.length > 0) name = result[0].name

  return getItemAvatar(name)
}

export { getCards, getDetails }
