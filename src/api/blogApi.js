import axiosClient from './axiosClient'

const createBlog = (dataBlog) => {
  const url = '/blog/create-blog';
  return axiosClient.post(url, {
    title: dataBlog.titleBlog,
    subtitle: dataBlog.subtitleBlog,
    image: dataBlog.imageBlog,
    content: dataBlog.contentBlog,
    rawContent: dataBlog.rawContentBlog
  })
}

const getBlog = (blogId) => {
  const url = `/blog/get-blogs?id=${blogId}`
  return axiosClient.get(url)
}

const editBlog = (dataBlog) => {
  const url = '/blog/edit-blog';
  return axiosClient.put(url, {
    id: dataBlog.id,
    title: dataBlog.titleBlog,
    subtitle: dataBlog.subtitleBlog,
    image: dataBlog.imageBlog,
    content: dataBlog.contentBlog,
    rawContent: dataBlog.rawContentBlog
  })
}

const blogApi = {
  createBlog,
  getBlog,
  editBlog
}

export default blogApi;