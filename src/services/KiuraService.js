import {postsData} from './data/posts';

export default class KiuraService {
  static getAllPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const allPosts = postsData;
          resolve(allPosts);
        } catch (error) {
          console.error('KiuraService.js:getAllPosts:error: ', error);
          reject(error);
        }
      }, 500);
    });
  }
}
