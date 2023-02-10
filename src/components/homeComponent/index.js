import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import {KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_PIC } from './images';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            tweets: [
                {
                    id: 0,
                    author: 'KZ today',
                    username: '@kztoday',
                    img: KZ_IMG_PATH,
                    content: 'UPDATE: The key is to preserve statehood, President Tokayev',
                    replies: 111,
                    retweets: 222,
                    likes: 333 ,
                    views: 444 ,
                    shares: 555 ,
                    isTwitterBlue: false
                },
                {
                    id: 1,
                    author: 'nFactorial School',
                    username: '@nfactorial',
                    img: NFACTORIAL_IMG_PATH,
                    content: 'UPDATE: New batch starts on Monday, February 6!',
                    replies: 777777,
                    retweets: 777777,
                    likes: 777777 ,
                    views: 777777 ,
                    shares: 777777 ,
                    isTwitterBlue: true,
                },
                {
                    id: 2,
                    author: 'nFactorial School',
                    username: '@nfactorial',
                    img: NFACTORIAL_IMG_PATH,
                    content: 'UPDATE: New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6!',
                    replies: 1,
                    retweets: 2,
                    likes: 3 ,
                    views: 4 ,
                    shares: 5 ,
                    isTwitterBlue: true,
                }
            ],
            substring: this.props.substring
        }
    }

    onChangeTextInput = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    addToTweets = () => {
        const newPost = {
            id: this.state.tweets.length,
            author: 'Arsen',
            username: '@arsenbaiseupov',
            img: PROFILE_PIC,
            content: this.state.content,
            replies: 0,
            retweets: 0,
            likes: 0 ,
            views: 0 ,
            shares: 0 ,
            isTwitterBlue: true,
        }
        if (newPost.content !== "") {
            this.setState({
                tweets: [newPost, ...this.state.tweets],
                content: ''
            }) 
        }

    }

    deleteTweet = (id) => {
        this.setState({
            tweets: this.state.tweets.filter(item=>item.id !== id)
        })
    }

    render() {
        return (
            <div className="w-50 mt-3">
                <h5 className="mx-3">Home</h5>
                <NewTweet content={this.state.content} onChangeTextInput={this.onChangeTextInput} addToTweets={this.addToTweets} />
                <TweetsList tweets={this.state.tweets} deleteTweet={this.deleteTweet} substring={this.props.substring} />
            </div>  
        )
    }
}

export default Home;

// export default function Home(){
//     return (
//         <div className="w-50 mt-3">
//             <h5 className="mx-3">Home</h5>
//             <NewTweet />
//             <TweetsList />
//         </div>
//     )
// }