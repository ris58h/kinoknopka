function createButtons(movieName, movieYear) {
    const cb = (i, u, t) => createButton(i, u, t, movieName, movieYear || "")

    const buttons = document.createElement("div")
    buttons.appendChild(cb("http://rutracker.org/favicon.ico", "https://rutracker.org/forum/tracker.php?o=10&s=2&nm=%n %y", "RuTracker"))
    buttons.appendChild(cb("https://thepiratebay.org/favicon.ico", "https://thepiratebay.org/search/%n %y/", "ThePirateBay"))
    return buttons
}

function createButton(iconUrl, urlTemplate, title, movieName, movieYear) {
    const link = document.createElement("a")
    let href = urlTemplate
        .replace("%n", movieName)
        .replace("%y", movieYear)
    link.href = href
    link.target="_blank"
    link.title = title ? title : ""
    link.style.display = "inline-block"
    link.style.width = "24px"
    link.style.height = "24px"
    link.style.background = `url(${iconUrl}) 0% 0% / 100% no-repeat`
    link.style.margin = "2px"
    return link
}
