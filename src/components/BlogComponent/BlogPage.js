import React, { useState, useEffect } from 'react';
import HeaderBlog from '../HeaderBlog';
import Footer from '../Footer';
import './BlogPage.scss';
import blogApi from '../../api/blogApi';
import { useNavigate } from 'react-router-dom';
import utils from '../../utils';

function BlogPage(props) {

  const navigate = useNavigate();

  const [userName, setUserName] = useState('')
  const [blogList, setBlogList] = useState([])
  const [valueFilter, setValueFilter] = useState('All')
  const [activeFilter, setActiveFilter] = useState(false)

  // useEffect(() => {
  //   const fetchBlog = async () => {
  //     const response = await blogApi.getBlog('all')
  //     setBlogList(response.data.blogs)
  //   }
  //   fetchBlog()
  // }, [])

  useEffect(() => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      if (!user) return;
      setUserName(user.userName)
    } catch (error) {
      return;
    }
  }, [])

  useEffect(() => {
    utils.topPage()
  },[])

  const handleReadDetailBlog = (blogItem) => {
    const path = `/blogs/${blogItem.id}`
    navigate(path)
  }

  const handleEditBlog = (blogItem) => {
    const path = `/blogs/blog-edit`
    navigate(path, { state: blogItem })
  }

  const handleChooseFilter = (filter) => {
    setValueFilter(filter)
    setActiveFilter(!activeFilter)
  }

  const handleActiveFilter = () => {
    setActiveFilter(!activeFilter)
  }

  return (
    <div className="blog-page">
      <HeaderBlog />
      <div className="container__custom container__blog-page">
        <div className="blog-page__intro">
          <h2 className="blog-page__intro-title">Great&nbsp;<span>website</span>&nbsp;is the language that I speak</h2>
          <div className="blog-page__intro-subtitle">We are a leading branding agency. We lead the creative strategies and development process for our clients. Our initial product and strategy workshops will deliver a much better understanding of your customer's needs. We help brands to feel social by default optimize for generations of consumers wanting to connect with people with brands.</div>
        </div>

        <div className="blog-page__filter">
          <div className="blog-page__filter-title">Latest Blogs</div>

          <ul className="blog-page__filter-list">
            <li className="blog-page__filter-item active-filter">All&nbsp;</li>
            <span>/&nbsp;</span>
            <li className="blog-page__filter-item">Experience&nbsp;</li>
            <span>/&nbsp;</span>
            <li className="blog-page__filter-item">Knowledge&nbsp;</li>
            <span>/&nbsp;</span>
            <li className="blog-page__filter-item">Traveling</li>
          </ul>
          
          <div className={activeFilter ? "blog-page__filter-selector active-filter" : "blog-page__filter-selector"}>
            <input 
              type="text" 
              placeholder="Blog filter" 
              value={valueFilter}
              onClick={handleActiveFilter}
              readOnly
            />
            <div className={activeFilter ? "blog-page__filter-selector-option" : "blog-page__filter-selector-option active-filter-option"}>
              <div onClick={() => handleChooseFilter('All')}>All</div>
              <div onClick={() => handleChooseFilter('Experience')}>Experience</div>
              <div onClick={() => handleChooseFilter('Knowledge')}>Knowledge</div>
              <div onClick={() => handleChooseFilter('Traveling')}>Traveling</div>
            </div>
          </div>
        </div>


        <ul className="blog-page__post-list">
          {blogList.map(blogItem => {
            return (
              <li key={blogItem.id} className="blog-page__post-item">
                <div className="post-item__image" style={{ backgroundImage: `url(${utils.bufferImage(blogItem.image)})` }}></div>
                <div className="post-item__content">
                  <div className="post-item__content-title">{blogItem.title}</div>
                  <div className="post-item__content-subtitle">{blogItem.subtitle}</div>
                  <div className="post-item__content-list-button">
                    <button
                      className="post-item__content-button"
                      onClick={() => handleReadDetailBlog(blogItem)}
                    >Read more</button>
                    {userName && <button
                      className="post-item__content-button"
                      onClick={() => handleEditBlog(blogItem)}
                    >Edit Blog</button>}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;