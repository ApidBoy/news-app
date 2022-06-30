import React, { Component } from 'react'
import Footer from './Footer';
import Loading from './Loading';
import Navbar from './Navbar';
import NewsBlock from './NewsBlock'
import PropTypes from 'prop-types'

export class newsFeed extends Component {
    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
        country: PropTypes.string
    }
    static defaultProps = {
        pageSize: 12,
        category: "general",
        country: "in"
    }


    disabledButton = "bg-transparent text-grey-500 py-2 px-4 border border-grey-500 cursor-not-allowed rounded"
    enabledButton = "bg-gray-800 hover:bg-red-500 text-white font-bold py-2 px-4 mx-8 rounded"
    articles = []
    constructor() {
        super();
        this.state = {
            article: this.articles,
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6cca4c5e18f48e091b29b03185e4853&${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }
    handlePrevClick = async () => {
        if (this.state.page > 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6cca4c5e18f48e091b29b03185e4853&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                article: parsedData.articles,
                page: this.state.page - 1,
                loading: false
            });
            document.getElementById("newsHeading").scrollIntoView();
        }
        else {
            
        }
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/12))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6cca4c5e18f48e091b29b03185e4853&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                article: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            });
            document.getElementById("newsHeading").scrollIntoView();
        }
    }
    render() {
        // let {pageSize, category, country} = this.props;
        return (
            <>
            <Navbar />
                <section id="newsHeading" className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Top headlines - NewsApp</h1>
                                <div className="h-1 w-20 bg-red-500 rounded"></div>
                            </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                        {this.state.loading && <Loading />}
                        {!this.state.loading && <div className="flex flex-wrap -m-4">
                        {this.state.article.map((element) => {
                            return (
                            <NewsBlock
                            key = {element.url}
                            newsTitle = {element.title?element.title.slice(0,55):""}
                            newsDescription = {element.description?element.description.slice(0,65):"No description for this news"}
                            newsCategory = {element.author}
                            newsImage = {!element.urlToImage?"https://www.vennershipley.co.uk/wp-content/uploads/2021/05/shutterstock_1313385140-1-720x400.jpg":element.urlToImage}
                            newsUrl = {element.url}
                            />)
                        })}
                    </div>}
                    </div>
                </section>
            {!this.state.loading && <Footer
            prevButton = {(this.state.page<=1?this.disabledButton:this.enabledButton)}
            nextButton = {(this.state.page + 1 > Math.ceil(this.state.totalResults/12))?this.disabledButton:this.enabledButton}
            prevClick = {this.handlePrevClick}
            nextClick = {this.handleNextClick}
            />}
        </>
    )
  }
}

export default newsFeed