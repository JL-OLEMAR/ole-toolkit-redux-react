import { pokemonApi } from '../../../api'
import { setPokemons, startLoadingPokemons } from './pokemonSlice.js'

export function getPokemons (page = 0) {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())

    // http requests with fetch
    // const resp = await fetch(`${pokemonApi}/pokemon?limit=10&offset=${page * 10}`)
    // const data = await resp.json()

    // http requests with axios
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
  }
}
