const menuItems = (isPrivate) => {
    let menuItemsContent = `
    <a href="/">Home</a>
    <a href="/pages/about/">About</a>
    <a href="/pages/contact/">Contact</a>
    `;
    if(isPrivate) {
        menuItemsContent += `
        <span>
            <a href="/pages/signup/">Logout</a>
        </span>
        `;
    } else {
        menuItemsContent += `
        <span>
            <a href="/pages/signup/">Signup</a>
            <a href="/pages/login/">Login</a>
        </span>
        `;
    }
    return menuItemsContent
}

export { menuItems }

