import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import PostComponent from '../components/post/PostComponent';
import KiuraService from '../services/KiuraService';
import BaseScreen from '../components/base_screen/BaseScreen';

class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: undefined,
      posts: [],
    };
  }

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const postsData = await KiuraService.getAllPosts();
      this.setState({posts: postsData});
    } catch (error) {
      console.error('FeedScreen.js:DID-MOUNT:error: ', error);
    } finally {
      this.setState({loading: false});
    }
  }

  handleLike = postId => {
    this.setState(prevState => ({
      posts: prevState.posts.map(post =>
        post.id === postId ? {...post, likes: post.likes + 1} : post,
      ),
    }));
  };

  handleAddComment = (postId, comment) => {
    this.setState(prevState => ({
      posts: prevState.posts.map(post =>
        post.id === postId
          ? {...post, comments: [...post.comments, comment]}
          : post,
      ),
    }));
  };

  render() {
    const {posts, loading} = this.state;

    return (
      <BaseScreen loading={loading}>
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PostComponent
              post={item}
              onLike={this.handleLike}
              onAddComment={this.handleAddComment}
            />
          )}
        />
      </BaseScreen>
    );
  }
}

export default FeedScreen;
