function setState(id, state) {
    let toSetStates = []
    for (const [key, value] of Object.entries(states)) {

        // if found state
        if (key == state) {
            toSetStates = value
        }
        // remove states
        value.forEach((item) => {
           handleClass(id, 'remove', item)
        })
      }

        // add styles
        toSetStates.forEach((item) => {
            handleClass(id, 'add', item)
        })

}


function handleClass(id, action, className) {
    if (action == 'add') {
        document.getElementById(id).classList.add(className);
    } else if (action == 'remove') {
        document.getElementById(id).classList.remove(className);
    }
}


// let states = 
//     {
//         "vis-overlay": ["flex", "px-5", "py-3", "absolute", "drop-shadow-2xl"],
//         "vis-normal": ["flex"],
//         "hidden": ["hidden"]
//     }


function closeTabs() {
    handleClass('info1', 'add', 'hidden');
    handleClass('info1', 'remove', 'flex')

    handleClass('info2', 'add', 'hidden');
    handleClass('info2', 'remove', 'flex')

    handleClass('form1', 'add', 'hidden');
    handleClass('form1', 'remove', 'flex')
}

function openInfoMeta() {
    closeTabs()
    handleClass('sidePanel', 'add', 'flex');
    handleClass('sidePanel', 'remove', 'hidden')

    handleClass('info1', 'add', 'flex');
    handleClass('info1', 'remove', 'hidden')

    
}

function openEdit() {
    closeTabs()
    handleClass('sidePanel', 'add', 'flex');
    handleClass('sidePanel', 'remove', 'hidden')

    handleClass('form1', 'add', 'flex');
    handleClass('form1', 'remove', 'hidden')
    
}

function openCommunityFilters() {
    handleClass('communityFilters', 'add', 'flex');
    handleClass('communityFilters', 'remove', 'hidden')
    
}

function openInfoThesaurus() {
    closeTabs()
    handleClass('sidePanel', 'add', 'flex');
    handleClass('sidePanel', 'remove', 'hidden')

    handleClass('info2', 'add', 'flex');
    handleClass('info2', 'remove', 'hidden')
    
}

function closeAside() {
    handleClass('sidePanel', 'add', 'hidden');
    handleClass('sidePanel', 'remove', 'flex')
}

function openZoom() {
    handleClass('imageZoom', 'add', 'flex');
    handleClass('imageZoom', 'remove', 'hidden')
}

function closeZoom() {
    handleClass('imageZoom', 'add', 'hidden');
    handleClass('imageZoom', 'remove', 'flex')
}