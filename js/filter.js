function selectInit() {
    const filter = document.getElementById("filter")

    if(!filter) return

    filter.querySelectorAll(".select__header").forEach(el => {
        el.style.minWidth = el.offsetWidth + 'px'
    })

    filter.addEventListener("click", e => {
        let targetSelect = e.target.closest(".select")

        if(targetSelect) {
            e.stopPropagation()
            if(e.target.closest(".select__header")) {
                if(targetSelect.classList.contains("active")) {
                    selectClose(targetSelect)
                } else {
                    selectOpen(targetSelect)
                }
            } else if(e.target.classList.contains("select__option")) {
                let targetValue = e.target.innerText
                let selectValue = targetSelect.querySelector(".select__value")

                selectValue.innerText = targetValue
                selectValue.dataset.selectVal = targetValue
                selectClose(targetSelect)
            }

        } else return
        
    })
}


function selectOpen(select) {
    select.classList.add("active")
}

function selectClose(select) {
    select.classList.remove("active")
}

selectInit()