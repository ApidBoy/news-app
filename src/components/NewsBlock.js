import React, { Component } from 'react'

export class NewsBlock extends Component {
  render() {
    let {newsTitle, newsDescription, newsCategory, newsImage, newsUrl} = this.props;
    return (
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={newsImage} alt="content"/>
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">{newsCategory}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{newsTitle}...</h2>
                <p className="leading-relaxed text-base">{newsDescription}...</p>
              <a rel="noreferrer" target="_blank" href={newsUrl} className="text-red-500 inline-flex items-center my-1">Read More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
              </svg>
              </a>
                </div>
            </div>
    )
  }
}

export default NewsBlock