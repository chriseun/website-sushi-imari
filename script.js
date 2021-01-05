
//Image Panels Open Rolls----------------------------------------****
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses2()
        panel.classList.add('active-1')
    })
})

function removeActiveClasses2() {
    panels.forEach((panel) => {
        panel.classList.remove('active-1')
    })
}


//Image Panels Open Menu----------------------------------------****
const mainPanels = document.querySelectorAll('.panel-1')

mainPanels.forEach((mainPanel) => {
    mainPanel.addEventListener('click', () => {
        removeActiveClasses()
        mainPanel.classList.add('active-2')
    })
})

function removeActiveClasses() {
    mainPanels.forEach((mainPanel) => {
        mainPanel.classList.remove('active-2')
    })
}
