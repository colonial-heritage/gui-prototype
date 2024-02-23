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



// show hide prove


function hideAllProvItem() {
    handleClass('lip1', 'add', 'hidden')
    handleClass('lip1', 'remove', 'flex')
    handleClass('lip2', 'add', 'hidden')
    handleClass('lip2', 'remove', 'flex')
    handleClass('lip3', 'add', 'hidden')
    handleClass('lip3', 'remove', 'flex')
    handleClass('lip4', 'add', 'hidden')
    handleClass('lip4', 'remove', 'flex')
    handleClass('lip5', 'add', 'hidden')
    handleClass('lip5', 'remove', 'flex')
    handleClass('lip6', 'add', 'hidden')
    handleClass('lip6', 'remove', 'flex')
    handleClass('lip7', 'add', 'hidden')
    handleClass('lip7', 'remove', 'flex')
    handleClass('lip8', 'add', 'hidden')
    handleClass('lip8', 'remove', 'flex')
    handleClass('lip9', 'add', 'hidden')
    handleClass('lip9', 'remove', 'flex')
    handleClass('lip10', 'add', 'hidden')
    handleClass('lip10', 'remove', 'flex')

    handleClass('did1', 'add', 'hidden')
    handleClass('did1', 'remove', 'block')
    // handleClass('did2', 'add', 'hidden')
    // handleClass('did2', 'remove', 'block')
    handleClass('did3', 'add', 'hidden')
    handleClass('did3', 'remove', 'block')
    handleClass('did4', 'add', 'hidden')
    handleClass('did4', 'remove', 'block')
    handleClass('did5', 'add', 'hidden')
    handleClass('did5', 'remove', 'block')
}

function showProvItem(elemId) {
    handleClass(elemId, 'add', 'block');
    handleClass(elemId, 'remove', 'hidden')

    handleClass('bAllItems', 'add', 'flex')
    handleClass('bAllItems', 'remove', 'hidden')
}


function showAllProv() {

    handleClass('lip1', 'add', 'flex')
    handleClass('lip1', 'remove', 'hidden')
    handleClass('lip2', 'add', 'flex')
    handleClass('lip2', 'remove', 'hidden')
    handleClass('lip3', 'add', 'block')
    handleClass('lip3', 'remove', 'hidden')
    handleClass('lip4', 'add', 'flex')
    handleClass('lip4', 'remove', 'hidden')
    handleClass('lip5', 'add', 'flex')
    handleClass('lip5', 'remove', 'hidden')
    handleClass('lip6', 'add', 'flex')
    handleClass('lip6', 'remove', 'hidden')
    handleClass('lip7', 'add', 'flex')
    handleClass('lip7', 'remove', 'hidden')
    handleClass('lip8', 'add', 'flex')
    handleClass('lip8', 'remove', 'hidden')
    handleClass('lip9', 'add', 'flex')
    handleClass('lip9', 'remove', 'hidden')
    handleClass('lip10', 'add', 'flex')
    handleClass('lip10', 'remove', 'hidden')

    handleClass('did1', 'add', 'block')
    handleClass('did1', 'remove', 'hidden')
    handleClass('did3', 'add', 'block')
    handleClass('did3', 'remove', 'hidden')
    handleClass('did4', 'add', 'block')
    handleClass('did4', 'remove', 'hidden')
    handleClass('did5', 'add', 'block')
    handleClass('did5', 'remove', 'hidden')
}


function hideAllProvBlock() {
    handleClass('provData', 'add', 'hidden')
    handleClass('provData', 'remove', 'flex')
    handleClass('bHidebData', 'add', 'hidden')
    handleClass('bHidebData', 'remove', 'flex')

    handleClass('bShowbData', 'add', 'flex')
    handleClass('bShowbData', 'remove', 'hidden')
}


function showAllProvBlock() {
    handleClass('provData', 'add', 'block')
    handleClass('provData', 'remove', 'hidden')
    handleClass('bHidebData', 'add', 'flex')
    handleClass('bHidebData', 'remove', 'hidden')
    handleClass('bShowbData', 'add', 'hidden')
    handleClass('bShowbData', 'remove', 'flex')

}

function showProvDescr() {
    handleClass('showProvDescrip', 'add', 'block')
    handleClass('showProvDescrip', 'remove', 'hidden')


}

function openAddProvForm() {
    handleClass('addProvForm', 'remove', 'hidden')
    handleClass('addProvForm', 'add', 'flex');
}

function closeAddProvForm() {
    handleClass('addProvForm', 'remove', 'flex')
    handleClass('addProvForm', 'add', 'hidden');
}

function editCommunity() {
    //communityBlock communityBlockForm communityBlockContent
    handleClass('communityBlockForm', 'remove', 'hidden')
    handleClass('communityBlockForm', 'add', 'flex');
    handleClass('communityBlockContent', 'add', 'hidden')
    handleClass('communityBlockContent', 'remove', 'flex');

    handleClass('communityBlock', 'add', 'bg-neutral-50')
    handleClass('communityBlock', 'remove', 'bg-[#f3eee2]');
}

function editCloseCommunity() {
    //communityBlock communityBlockForm communityBlockContent
    handleClass('communityBlockForm', 'add', 'hidden')
    handleClass('communityBlockForm', 'remove', 'flex');
    handleClass('communityBlockContent', 'remove', 'hidden')
    handleClass('communityBlockContent', 'add', 'flex');

    handleClass('communityBlock', 'remove', 'bg-neutral-50')
    handleClass('communityBlock', 'add', 'bg-[#f3eee2]');
}


function mainSubnav() {
    //communityBlock communityBlockForm communityBlockContent
    handleClass('mainSubnav', 'remove', 'hidden')
    handleClass('mainSubnav', 'add', 'flex');
}

function mainSubnavHide() {
    //communityBlock communityBlockForm communityBlockContent
    handleClass('mainSubnav', 'add', 'hidden')
    handleClass('mainSubnav', 'remove', 'flex');
}


function showLangSuggest() {
    //communityBlock communityBlockForm communityBlockContent
    handleClass('langSuggest', 'remove', 'hidden')
    handleClass('langSuggest', 'add', 'flex');
}

function hideLangSuggest() {
    //communityBlock communityBlockForm communityBlockContent
    handleClass('langSuggest', 'add', 'hidden')
    handleClass('langSuggest', 'remove', 'flex');
}



function showComListInfoEdit() {
    handleClass('communityListForm', 'remove', 'hidden');
    handleClass('communityListForm', 'add', 'flex');
    
    handleClass('communityListInfo', 'add', 'hidden');
    handleClass('communityListInfo', 'remove', 'block');
}

function showComListInfo() {
    handleClass('communityListInfo', 'remove', 'hidden');
    handleClass('communityListInfo', 'add', 'block');

    handleClass('communityListForm', 'add', 'hidden')
    handleClass('communityListForm', 'remove', 'flex');
}




function showComListEdit() {
    handleClass('comListEdit', 'remove', 'hidden');
    handleClass('comListEdit', 'add', 'block');
    
    handleClass('comList', 'add', 'hidden');
    handleClass('comList', 'remove', 'flex');
}

function showComList() {
    handleClass('comList', 'remove', 'hidden');
    handleClass('comList', 'add', 'flex');

    handleClass('comListEdit', 'add', 'hidden')
    handleClass('comListEdit', 'remove', 'block');
}