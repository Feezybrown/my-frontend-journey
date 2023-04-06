

const viewMoreBtn = document.getElementById('view-more')
const viewMoreBlog = document.querySelectorAll('.view-more-blog')



viewMoreBlog.forEach(function(blog) {

  viewMoreBtn.addEventListener('click', function() {
    if(blog.style.display === 'none') {
      blog.style.display = 'block'
      viewMoreBtn.innerHTML = 'View Less'
    } else {
      blog.style.display = 'none'
      viewMoreBtn.innerHTML = 'View More'
    }
  })
})


