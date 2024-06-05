const categoryList = document.querySelector('#categories');
const categoryDisplay = document.querySelector(".Categories");
const blogList = document.querySelector('#blog');
const BlogDisplay = document.querySelector(".Blog");
const pagesList = document.querySelector('#pages');
const PagesDisplay = document.querySelector(".Pages");

categoryList.addEventListener("click", () =>{
   categoryDisplay.classList.toggle("active")
})

blogList.addEventListener("click", () =>{
  BlogDisplay.classList.toggle("active")
 })
 
 pagesList.addEventListener("click", () =>{
    PagesDisplay.classList.toggle("active")
   })

