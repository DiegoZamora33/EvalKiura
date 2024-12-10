import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import Carousel from '../carousel/Carousel';

interface PostProps {
  post: {
    id: string;
    title: string;
    content: string;
    likes: number;
    comments: string[];
    images: string[];
  };
  onLike: (postId: string) => void;
  onAddComment: (postId: string, comment: string) => void;
}

const PostComponent: React.FC<PostProps> = ({post, onLike, onAddComment}) => {
  const {colors} = useTheme();
  const [comment, setComment] = useState<string>('');

  const handleAddComment = () => {
    if (comment.trim()) {
      onAddComment(post.id, comment);
      setComment('');
    }
  };

  const renderImage = ({item}: {item: string}) => (
    <Image source={{uri: item}} style={styles.carouselImage} />
  );

  return (
    <View
      style={[
        styles.postContainer,
        {backgroundColor: colors.background, borderBottomColor: colors.text},
      ]}>
      <Text style={[styles.title, {color: colors.text}]}>{post.title}</Text>
      <Text style={[styles.content, {color: colors.text}]}>{post.content}</Text>

      {post.images.length === 1 ? (
        <Image source={{uri: post.images[0]}} style={styles.singleImage} />
      ) : post.images.length > 1 ? (
        <Carousel images={post.images} />
      ) : null}

      <View style={styles.likesContainer}>
        <Button
          title={`Like (${post.likes})`}
          onPress={() => onLike(post.id)}
        />
      </View>
      <FlatList
        data={post.comments}
        keyExtractor={(item, index) => `${post.id}-comment-${index}`}
        renderItem={({item}) => (
          <Text style={[styles.comment, {color: colors.text}]}>- {item}</Text>
        )}
      />
      <View style={styles.commentInputContainer}>
        <TextInput
          style={[styles.commentInput, {color: colors.text}]}
          placeholder="Add a comment..."
          value={comment}
          onChangeText={setComment}
        />
        <Button title="Post" onPress={handleAddComment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    marginBottom: 8,
  },
  singleImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  carouselImage: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
  likesContainer: {
    marginTop: 7,
    marginBottom: 8,
  },
  comment: {
    fontSize: 12,
    marginBottom: 4,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  commentInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
});

export default PostComponent;
