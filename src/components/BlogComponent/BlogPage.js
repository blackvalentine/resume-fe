import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './BlogPage.scss';

function BlogPage(props) {
    return (
        <div className="blog-page">
            <Header />
            <div className="container container__blog-page">
                <div className="blog-page__intro">
                    <h2 className="blog-page__intro-title">Great&nbsp;<span>design</span>&nbsp;is the language we speak</h2>
                    <div className="blog-page__intro-subtitle">We are a leading branding agency. We lead the creative strategies and development process for our clients. Our initial product and strategy workshops will deliver a much better understanding of your customer's needs. We help brands to feel social by default optimize for generations of consumers wanting to connect with people with brands.</div>
                </div>

                <div className="blog-page__filter">
                    <div className="blog-page__filter-title">Latest Blogs</div>
                    <ul className="blog-page__filter-list">
                        <li className="blog-page__filter-item active-filter">All&nbsp;</li>
                        <span>/&nbsp;</span>
                        <li className="blog-page__filter-item">Branding&nbsp;</li>
                        <span>/&nbsp;</span>
                        <li className="blog-page__filter-item">Identity&nbsp;</li>
                        <span>/&nbsp;</span>
                        <li className="blog-page__filter-item">Print</li>
                    </ul>
                </div>

                <ul className="blog-page__post-list">
                    <div className="blog-page__post-item">
                        <div className="post-item__image" style={{backgroundImage: `url("https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/47351295_1869123853184966_2209675839597969408_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=MmvH5fL2nCEAX-4QSPa&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9A-cqUJVPbgBXlulNo4EF0xIO56dYGqfm6TIOk1Wdz5A&oe=629CFD88")`}}></div>
                        <div className="post-item__content">
                            <div className="post-item__content-title">Cảm ơn người đã đến, và trao tôi tấm chân tìnhCảm ơn người đã đến, và trao tôi tấm chân tình</div>
                            <div className="post-item__content-subtitle">We are a leading branding agency. We lead the creative strategies and development process for our clients. Our initial product and strategy workshops will deliver a much better understanding of your customer's needs. We help brands to feel social by default optimize for generations of consumers wanting to connect with people with brands.</div>
                            <button className="post-item__content-button">Read more</button>
                        </div>
                    </div>

                    <div className="blog-page__post-item">
                        <div className="post-item__image" style={{backgroundImage: `url("https://file.hstatic.net/1000273687/file/quan-ly-du-an-hay-project-management-la-gi-1_df1204a605e14ef4a04e0de28cb00525_grande.jpg")`}}></div>
                        <div className="post-item__content">
                            <div className="post-item__content-title">Vì cuộc sống vốn dĩ là không công bằng ...Cảm ơn người đã đến, và trao tôi tấm chân tình</div>
                            <div className="post-item__content-subtitle">We are a leading branding agency. We lead the creative strategies and development process for our clients. Our initial product and strategy workshops will deliver a much better understanding of your customer's needs. We help brands to feel social by default optimize for generations of consumers wanting to connect with people with brands.</div>
                            <button className="post-item__content-button">Read more</button>
                        </div>
                    </div>

                    <div className="blog-page__post-item">
                        <div className="post-item__image" style={{backgroundImage: `url("https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/47351295_1869123853184966_2209675839597969408_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=MmvH5fL2nCEAX-4QSPa&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9A-cqUJVPbgBXlulNo4EF0xIO56dYGqfm6TIOk1Wdz5A&oe=629CFD88")`}}></div>
                        <div className="post-item__content">
                            <div className="post-item__content-title">Cuộc sống vốn dĩ là không công bằng ...</div>
                            <div className="post-item__content-subtitle">We are a leading branding agency. We lead the creative strategies and development process for our clients. Our initial product and strategy workshops will deliver a much better understanding of your customer's needs. We help brands to feel social by default optimize for generations of consumers wanting to connect with people with brands.</div>
                            <button className="post-item__content-button">Read more</button>
                        </div>
                    </div>

                    <div className="blog-page__post-item">
                        <div className="post-item__image" style={{backgroundImage: `url("https://file.hstatic.net/1000273687/file/quan-ly-du-an-hay-project-management-la-gi-1_df1204a605e14ef4a04e0de28cb00525_grande.jpg")`}}></div>
                        <div className="post-item__content">
                            <div className="post-item__content-title">Vì cuộc sống vốn dĩ là không công bằng ...</div>
                            <div className="post-item__content-subtitle">We are a leading branding agency. We lead the creative strategies and development process for our clients. Our initial product and strategy workshops will deliver a much better understanding of your customer's needs. We help brands to feel social by default optimize for generations of consumers wanting to connect with people with brands.</div>
                            <button className="post-item__content-button">Read more</button>
                        </div>
                    </div>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default BlogPage;