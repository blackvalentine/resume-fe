import React, { useState, useEffect } from 'react';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import HeaderBlog from '../HeaderBlog'
import Footer from '../Footer'
import './BlogEdit.scss'

import utils from '../../utils'
import blogApi from '../../api/blogApi';

import { useLocation, useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';

const mdParser = new MarkdownIt();

function BlogEdit(props) {

  const { state } = useLocation();
  const navigate = useNavigate();

  const id = state?.id;

  const [titleBlog, setTitleBlog] = useState(state ? state.title : '')
  const [subtitleBlog, setSubtitleBlog] = useState(state ? state.subtitle : '')
  const [contentBlog, setContentBlog] = useState(state ? state.content : '')
  const [rawContentBlog, setRawContentBlog] = useState(state ? state.rawContent : '')
  const [imageBlog, setImageBlog] = useState(state ? new Buffer(state.image, 'base64').toString('binary') : '')
  const [previewImageURL, setPreviewImageURL] = useState(state ? new Buffer(state.image, 'base64').toString('binary') : '')
  const handleEditorChange = ({ html, text }) => {
    setContentBlog(html)
    setRawContentBlog(text)
  }

  useEffect(() => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      if (user) return;
      const path = '/admin/login'
      navigate(path)
    } catch (e) {
      return;
    }
  })

  const onImageUpload = (file) => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = data => {
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  const handleInputTitleBlog = (e) => {
    setTitleBlog(e.target.value)
  }

  const handleInputSubtitle = (e) => {
    setSubtitleBlog(e.target.value)
  }

  const hangelInputImage = async (e) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let base64 = await utils.getBase64(file)
      let objectUrl = URL.createObjectURL(file);
      setPreviewImageURL(objectUrl)
      setImageBlog(base64)
    }
  }

  const handleUploadBlog = async () => {
    await blogApi.createBlog({
      titleBlog,
      subtitleBlog,
      contentBlog,
      imageBlog,
      rawContentBlog
    })
    const path = '/blogs'
    navigate(path)
  }

  const handleEditBlog = async () => {
    await blogApi.editBlog({
      id,
      titleBlog,
      subtitleBlog,
      contentBlog,
      imageBlog,
      rawContentBlog
    })
    const path = '/blogs'
    navigate(path)
  }

  return (
    <div className="blog-edit">
      <HeaderBlog />

      <div className="space-header">
        <input
          type="text"
          name="title"
          className="blog-edit__input-title"
          placeholder="Type Blog Title ..."
          onChange={handleInputTitleBlog}
          value={titleBlog}
        />
      </div>

      <div style={{ display: 'flex' }}>
        <div className="blog-edit__add-img">
          <input
            id="blogImg"
            type="file"
            hidden
            onChange={(e) => hangelInputImage(e)}
          />
          <label htmlFor="blogImg" className="add-img__btn" style={{ backgroundImage: `url(${previewImageURL})` }}>
            <span style={{ margin: 'auto' }}>{previewImageURL === '' ? 'Thêm ảnh' : ''}</span>
          </label>
        </div>
        <div>
          <textarea
            className="blog-edit__input-subtitle"
            cols="100"
            placeholder="Type Blog Subtitle ..."
            onChange={(e) => handleInputSubtitle(e)}
            value={subtitleBlog}
          />
        </div>
      </div>

      <MdEditor
        style={{ height: '500px' }}
        renderHTML={text => mdParser.render(text)}
        onChange={handleEditorChange}
        onImageUpload={onImageUpload}
        className="blog-edit__markdown"
        value={rawContentBlog}
        placeholder="Write something for your blog here ..."
      />

      {state ?
        <button
          className="blog-edit__confirm"
          onClick={handleEditBlog}
        >
          Complete Edit Blog
        </button> :
        <button
          className="blog-edit__confirm"
          onClick={handleUploadBlog}
        >
          Upload New Blog
        </button>}

      <Footer />
    </div>
  );
}

export default BlogEdit;