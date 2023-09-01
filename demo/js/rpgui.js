let resSM = '640';
let resMD = '768';
let resLG = '1024';
let resXL = '1280';
let res2XL = '1536';

// init states
let facetsState = true
let miniPlayState = false
let detailPageState = false
let searchSuggestState = false

let states = 
    {
        "vis-overlay": ["flex", "md:flex", "px-5", "py-3", "absolute", "drop-shadow-2xl"],
        "vis-normal": ["flex"],
        "hidden": ["hidden"],
        "onlySmall": ["flex", "md:hidden"],
        "vis-underlay": ["absolute", "rounded-b", "z-0"]
    }




function handleStateFacets(bool) {
    if (bool !== undefined) {
        facetsState = str2Bool(bool)
    }
    // visable
    if (facetsState) { 
        console.log(miniPlayState);
        if ( (window.matchMedia('(min-width: '+resMD+'px)').matches) && (miniPlayState) )  {
            setState('facets', 'vis-overlay')
            setState('closeFacets', 'vis-normal')
            
        } else if (window.matchMedia('(min-width: '+resMD+'px)').matches) {
            setState('facets', 'vis-normal')
        } else {
            setState('facets', 'vis-overlay')
        }
        facetsState = false
    } else { // hide
        setState('facets', 'hidden')
        facetsState = true
    } 
}


function handleStateMiniPlayer(bool) {
    if (bool !== undefined) {
        miniPlayState = str2Bool(bool)
    }
    
    // visable
    if (miniPlayState) {
        if (window.matchMedia('(min-width: '+resLG+'px)').matches) {
            console.log('2');
            setState('results', 'vis-normal')
            setState('facets', 'vis-normal')
            setState('miniPlayer', 'vis-normal')
        } else if (window.matchMedia('(min-width: '+resMD+'px)').matches) {
            console.log('1');
            setState('facets', 'hidden')
            setState('results', 'vis-normal')
            setState('miniPlayer', 'vis-normal')
            setState('facetButton', 'vis-normal')
            

        } else {
            // console.log('3');
            setState('results', 'hidden')
            setState('facets', 'hidden')
            setState('miniPlayer', 'vis-normal')
        }

        miniPlayState = true
    } else { // hide
        console.log('4');
        setState('miniPlayer', 'hidden')
        miniPlayState = false
    } 
}



function handleStateDetailPage(bool) {
    if (bool !== undefined) {
        detailPageState = str2Bool(bool)
    }
    // visable
    if (detailPageState) {
        setState('results', 'hidden')
        setState('facets', 'hidden')
        setState('miniPlayer', 'hidden')
        setState('fullDetail', 'vis-normal')

        detailPageState = true
    } else { // hide
        setState('results', 'vis-normal')
        setState('facets', 'vis-normal')
        setState('miniPlayer', 'vis-normal')
        setState('fullDetail', 'hidden')
        
        detailPageState = false
    } 
}

function handleStateSearchSuggest(bool) {
    if (bool !== undefined) {
        searchSuggestState = str2Bool(bool)
    }
    // visable
    if (searchSuggestState) {

        setState('suggest', 'vis-underlay')

        searchSuggestState = true
    } else { // hide
        setState('suggest', 'hidden')
        
        searchSuggestState = false
    } 
}


function str2Bool(str) {
    if ( (str.toLowerCase() == 'true') || (str.toLowerCase() == '1') ) {
        return true
    }
    if ( (str.toLowerCase() == 'false') || (str.toLowerCase() == '0') ) {
        return false
    }
}
