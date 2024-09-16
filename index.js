const inputValue = document.querySelector(".app__controls-input")
const btn = document.querySelector(".app__controls-button")
const tasksList = document.querySelector(".app__list")

const addTask = (taskName) => {
    const div = document.createElement("div")
    const input = document.createElement("input")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const img = document.createElement("img")

    div.className = "app__list-item"

    input.type = "checkbox"
    input.className = "app__list-checkbox"

    p.className = "app__list-text"
    p.textContent = taskName

    img.src = "/assets/trash.svg"

    div.appendChild(input)
    div.appendChild(p)
    div.appendChild(button)

    button.appendChild(img)

    div.addEventListener("click", () => {
        if (div.className === "app__list-item") {
            div.className = "app__list-item-completed"
            input.checked = true
        } else {
            div.className = "app__list-item"
            input.checked = false
        }
    })

    button.addEventListener("click", (e) => {
        tasksList.removeChild(div)
    })

    tasksList.insertBefore(div, tasksList.firstChild)
}

btn.addEventListener("click", () => {
    if (inputValue.value === "") return
    addTask(inputValue.value)
    inputValue.value = ""
})
