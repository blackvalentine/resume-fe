import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogApi from '../../api/blogApi';
import HeaderBlog from '../HeaderBlog';
import Footer from '../Footer';
import './BlogDetail.scss';
import {Buffer} from 'buffer';
import moment from 'moment';

function BlogDetail(props) {

  const [blogData, setBlogData] = useState({})

  const { id } = useParams();
  // useEffect(() => {
  //   const fetchBlog = async () => {
  //     const response = await blogApi.getBlog(id)
  //     setBlogData(response.data.blogs)
  //   }
  //   fetchBlog()
  // }, [id])

  const bufferImage = (image) => {
    if(image) {
      return new Buffer(image, 'base64').toString('binary')
    }
    else return ''
  }

  return (
    <div className="blog-detail">
      <HeaderBlog />
      <div className="container blog-detail__container">
        <div className="blog-detail__title">{blogData?.title}</div>
        <img 
          className="blog-detail__author-img"
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/47351295_1869123853184966_2209675839597969408_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Yjwfji9ED-cAX8f8h_p&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8QScFVfJe3t5COomoNI8L__bDjqujjvG4wwo71YKVZig&oe=62B0C408"
          alt="author"
        />
        <div className="blog-detail__info">By Black Valentine, Updated on {moment(blogData?.updatedAt).format('LL')}</div>
        <div className="blog-detail__subtitle">{blogData?.subtitle}</div>
        <div 
          className="blog-detail__image"
          style={{backgroundImage: `url(${bufferImage(blogData?.image)})`}}
        ></div>
        <div 
          className="blog-detail__content"
          dangerouslySetInnerHTML={{__html: `${blogData?.content}`}}
        ></div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;