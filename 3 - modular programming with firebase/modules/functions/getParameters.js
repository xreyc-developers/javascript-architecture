const getParameter = function(param) {
    // REPLACE ? BY EMPTY 
    // Input : ?id=0&x=2
    // Output: id=0&x=2
    const urlSplitA = window.location.search.replace('?','');

    // SPLIT URL BY &
    // Input : id=0&x=2
    // Output: ['id=0', 'x=2']
    const urlSplitB = urlSplitA.split('&');
    // LOOP SPLITB
    for(let i = 0; i < urlSplitB.length; i++) {
        // SPLIT URL BY
        // Input 'id=0'
        // Output: ['id','0']
        const urlSplitC = urlSplitB[i].split('=');
        if(urlSplitC[0] == param) {
            return urlSplitC[1] 
        }
    }
}

export { getParameter }