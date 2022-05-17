import React, {useState} from 'react';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import Header from '../Header'
import Footer from '../Footer'
import './BlogEdit.scss'

const mdParser = new MarkdownIt();

function BlogEdit(props) {

    const [titleBlog, setTitleBlog] = useState('')
    const [contentBlog, setContentBlog] = useState('')
    const [previewImageURL, setPreviewImageURL] = useState('')
    const handleEditorChange = ({html, text}) => {
        setContentBlog(html)
    }
    
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

    const hangelInputImage = (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            setPreviewImageURL(objectUrl)
        }
    }
    
    const handleUploadBlog = () => {
        console.log({titleBlog, contentBlog});
    }

    return (
        <div className="blog-edit">
            <Header />

            <div>
                <input 
                    type="text" 
                    name="title" 
                    className="blog-edit__input-title"
                    placeholder="Type Blog Title ..."
                    onChange={handleInputTitleBlog}
                    value={titleBlog}
                />
            </div>

            <div className="blog-edit__add-img">
                <input 
                    id="blogImg" 
                    type="file" 
                    hidden
                    onChange={(e) => hangelInputImage(e)}
                />
                <label htmlFor="blogImg" className="add-img__btn" style={{backgroundImage: `url(${previewImageURL})`}}>
                    <span style={{margin: 'auto'}}>{previewImageURL === '' ? 'Thêm ảnh' : ''}</span>
                </label>
            </div>

            <MdEditor
                style={{ height: '500px' }} 
                renderHTML={text => mdParser.render(text)} 
                onChange={handleEditorChange}
                onImageUpload={onImageUpload}
                className="blog-edit__markdown"
            />
            
            <button 
                className="blog-edit__confirm"
                onClick={handleUploadBlog}
            >
                Upload New Blog
            </button>

            <Footer />
        </div>
    );
}

export default BlogEdit;