//const { log } = require("handlebars")

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

function showResource() {
    handleClass('showResource', 'add', 'flex');
    handleClass('showResource', 'remove', 'hidden')
}

function openAddNarrForm(elemId) {
    handleClass(elemId, 'add', 'flex');
    handleClass(elemId, 'remove', 'hidden')
}

function closeAddNarrForm(elemId) {
    handleClass(elemId, 'add', 'hidden');
    handleClass(elemId, 'remove', 'flex')
}


function openAddListComm() {
    handleClass('cNewList', 'add', 'flex');
    handleClass('cNewList', 'remove', 'hidden')
}

function closeAddListComm() {
    handleClass('cNewList', 'add', 'hidden');
    handleClass('cNewList', 'remove', 'flex')
}


function openAddListCommMsse() {
    handleClass('mssg', 'add', 'flex');
    handleClass('mssg', 'remove', 'hidden')
}

function expandFacet() {
    handleClass('expandFacet', 'remove', 'hidden')
    handleClass('expandFacet', 'add', 'flex');

    // handleClass('collapsedFacet', 'remove', 'flex')
    // handleClass('collapsedFacet', 'add', 'hidden');


}

function closeFacet() {
    // handleClass('collapsedFacet', 'remove', 'hidden')
    // handleClass('collapsedFacet', 'add', 'flex');

    handleClass('expandFacet', 'remove', 'flex')
    handleClass('expandFacet', 'add', 'hidden');
}


function unTrucate() {
    handleClass('l0', 'remove', 'truncate')
}


function expandDateFacet() {
    handleClass('expandFacetDate', 'remove', 'hidden')
    handleClass('expandFacetDate', 'add', 'flex');
}

function closeDateFacet() {
    handleClass('expandFacetDate', 'remove', 'flex')
    handleClass('expandFacetDate', 'add', 'hidden');
}