import { firebase_blogs, firebase_blog } from "../../modules/firebase/getBlog.js";
import { getParameter } from "../../modules/functions/getParameters.js";
// COMPONENTS
import { blogItem } from '../../modules/component/blogItem.js';
import { menuItems } from "../../modules/component/headerMenu.js";;

const ABOUT = (() => {
    document.addEventListener('DOMContentLoaded', init);

    let currentShown = 3;

    function init(){
        document.querySelector('header').innerHTML += menuItems(false);
        // ADD EVENT LISTENERS
        addEventListeners();
        // GET DATA
        const id = Number(getParameter('id'));
        getDataById(id,getDataById_afterFetch)
        getDataBlogs(currentShown,getDataBlogs_afterFetch)
    }

    // INTERACTIONS
    function addEventListeners() {
        const elbtnA = document.querySelector('#btnA');
        const blogElement = document.querySelector('#all_blogs');
        // SHOW MORE
        elbtnA.addEventListener('click', () => {
            currentShown += 1;
            const blog = firebase_blog(currentShown);
            blogElement.innerHTML += blogItem(blog.id,blog.title,blog.content);
        });
    }

    // GET BLOG BY ID
    function getDataById(id,cb) {
        const blog = firebase_blog(id);
        cb(blog)
    }
    function getDataById_afterFetch(blog) {
        document.querySelector('#blog_title').innerHTML = blog.title;
        document.querySelector('#blog_content').innerHTML = blog.content;
    }

    // GET ALL BLOG
    function getDataBlogs(blogCount,cb) {
        const blogs = firebase_blogs(blogCount);
        cb(blogs)
    }
    function getDataBlogs_afterFetch(blogs) {
        let blogElement = document.querySelector('#all_blogs');
        let blogElementContent = '';
        for(let i = 0; i < blogs.length; i++) {
            blogElementContent += blogItem(blogs[i].id,blogs[i].title,blogs[i].content);
        }
        blogElement.innerHTML = blogElementContent;
    }

})();