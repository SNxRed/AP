import React, { useState } from 'react';
import Navbar from './Navbar';

function Blog({ onLogout }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Admin',
      date: '2023-05-15',
      content: '¡Mi primer día en el gimnasio! 💪',
      image: 'https://via.placeholder.com/600x400',
      video: '',
      comments: [
        { id: 1, author: 'Usuario1', text: '¡Bienvenido!' },
        { id: 2, author: 'Usuario2', text: 'Ánimo con el entrenamiento' }
      ]
    }
  ]);

  const [newPost, setNewPost] = useState({
    content: '',
    image: '',
    video: ''
  });

  const [newComments, setNewComments] = useState({});

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleCommentChange = (postId, value) => {
    setNewComments(prev => ({
      ...prev,
      [postId]: value
    }));
  };

  const addPost = (e) => {
    e.preventDefault();
    if (!newPost.content) return;
    
    const post = {
      id: posts.length + 1,
      author: 'Admin',
      date: new Date().toISOString().split('T')[0],
      content: newPost.content,
      image: newPost.image,
      video: newPost.video,
      comments: []
    };
    
    setPosts([post, ...posts]);
    setNewPost({ content: '', image: '', video: '' });
  };

  const addComment = (postId) => {
    if (!newComments[postId]) return;
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: post.comments.length + 1,
              author: 'Usuario',
              text: newComments[postId]
            }
          ]
        };
      }
      return post;
    }));
    
    setNewComments(prev => ({ ...prev, [postId]: '' }));
  };

  return (
    <div>
      <Navbar isAuthenticated={true} onLogout={onLogout} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold mb-6">Blog Comunitario</h1>
          
          <form onSubmit={addPost} className="mb-8">
            <div className="mb-4">
              <textarea
                name="content"
                value={newPost.content}
                onChange={(e) => handlePostChange(e)}
                placeholder="¿Qué estás pensando?"
                className="w-full px-3 py-2 border rounded"
                rows="3"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">URL de imagen (opcional)</label>
                <input
                  type="url"
                  name="image"
                  value={newPost.image}
                  onChange={(e) => handlePostChange(e)}
                  placeholder="https://ejemplo.com/imagen.jpg"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">URL de video (opcional)</label>
                <input
                  type="url"
                  name="video"
                  value={newPost.video}
                  onChange={(e) => handlePostChange(e)}
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="bg-[#7f00b2] text-white px-4 py-2 rounded hover:bg-[#6c009f]"
            >
              Publicar
            </button>
          </form>
          
          <div className="space-y-6">
            {posts.map(post => (
              <div key={post.id} className="border rounded-lg p-4 post">
                <div className="flex items-center mb-3">
                  <div className="bg-[#7f00b2] text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
                
                <p className="mb-3">{post.content}</p>
                
                {post.image && (
                  <div className="mb-3">
                    <img src={post.image} alt="Post" className="max-w-full h-auto rounded" />
                  </div>
                )}
                
                {post.video && (
                  <div className="mb-3 relative pb-[56.25%] h-0">
                    <iframe
                      src={post.video.includes('youtube.com') ? 
                        post.video.replace('watch?v=', 'embed/') : 
                        post.video}
                      title="Video"
                      className="absolute top-0 left-0 w-full h-full rounded"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t">
                  <h3 className="font-medium mb-2">Comentarios ({post.comments.length})</h3>
                  
                  <div className="space-y-3 mb-4">
                    {post.comments.map(comment => (
                      <div key={comment.id} className="flex">
                        <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                          {comment.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{comment.author}</p>
                          <p>{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex">
                    <input
                      type="text"
                      value={newComments[post.id] || ''}
                      onChange={(e) => handleCommentChange(post.id, e.target.value)}
                      placeholder="Añade un comentario..."
                      className="flex-grow px-3 py-2 border rounded-l"
                    />
                    <button
                      onClick={() => addComment(post.id)}
                      className="bg-[#7f00b2] text-white px-3 py-2 rounded-r hover:bg-[#6c009f]"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;