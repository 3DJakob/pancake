const createLobbyElement = (lobby) => {
  const element = document.createElement('div')
  const title = document.createElement('h3')
  const id = document.createElement('p')

  title.textContent = lobby.name
  id.textContent = lobby.id
  element.appendChild(title)
  element.appendChild(id)
  return element
}

export {createLobbyElement}
