export const goToHomePage = (history) => {
    history.push("/")
}
export const goToCriarPoke = (history) => {
    history.push("/add")
}
export const goToPokeDetalhes = (history, id) => {
    history.push(`/detalhes/${id}`)
}
export const goToEditarPoke = (history, id) => {
    history.push(`/editPoke/${id}`)
}
export const goToPreviousPage = (history) => {
    history.goBack();
  };