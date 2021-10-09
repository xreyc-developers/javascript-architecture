const blogItem = (id,title,content) => {
    const cn_title = `<h3><a href="/pages/blog/index.html?id=${id}">${title}</a></h3>`;
    const cn_content = `<p class="blog_content">${content}</p>`;
    return `<div>${cn_title} ${cn_content}</div>`
}

export { blogItem }