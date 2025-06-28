import React, { useState } from 'react';
import Navbar from './Navbar';

function Blog({ user, onLogout }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Admin',
      date: '2023-05-15',
      content: '¡Mi primer día en el gimnasio! 💪 Estoy emocionado por comenzar este viaje de fitness.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      video: '',
      comments: [
        { id: 1, author: 'Usuario1', text: '¡Bienvenido! El primer paso es el más importante.' },
        { id: 2, author: 'Usuario2', text: 'Ánimo con el entrenamiento, verás resultados pronto.' }
      ]
    },
    {
      id: 2,
      author: 'FitnessLover',
      date: '2023-05-10',
      content: 'Consejo del día: Mantén la hidratación durante tus entrenamientos. ¡El agua es clave para el rendimiento!',
      image: '',
      video: 'https://www.youtube.com/watch?v=9R5OWh7luL4',
      comments: []
    }
  ]);

  const [newPost, setNewPost] = useState({
    content: '',
    image: '',
    video: ''
  });

  const [newComments, setNewComments] = useState({});
  const [isPosting, setIsPosting] = useState(false);

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
    if (!newPost.content.trim()) return;
    
    setIsPosting(true);
    
    setTimeout(() => {
      const post = {
        id: posts.length + 1,
        author: user.name,
        date: new Date().toLocaleDateString('es-ES', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        content: newPost.content,
        image: newPost.image,
        video: newPost.video,
        comments: []
      };
      
      setPosts([post, ...posts]);
      setNewPost({ content: '', image: '', video: '' });
      setIsPosting(false);
    }, 800);
  };

  const addComment = (postId) => {
    const commentText = newComments[postId]?.trim();
    if (!commentText) return;
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: post.comments.length + 1,
              author: user.name,
              text: commentText
            }
          ]
        };
      }
      return post;
    }));
    
    setNewComments(prev => ({ ...prev, [postId]: '' }));
  };

  return (
    <div className="blog-app">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="blog-container">
        <div className="blog-content">
          <h1 className="blog-title">Comunidad Fitness</h1>
          
          {user.role === 'admin' && (
            <>
              <div className="admin-notice mb-6 p-4 bg-blue-100 border-l-4 border-blue-500">
                <p className="text-blue-700">Modo administrador: Puedes crear publicaciones.</p>
              </div>
              
              <form onSubmit={addPost} className="post-form">
                <div className="form-group">
                  <textarea
                    name="content"
                    value={newPost.content}
                    onChange={handlePostChange}
                    placeholder="Escribe una nueva publicación..."
                    className="post-input"
                    rows="4"
                    required
                  />
                </div>
                
                <div className="media-inputs">
                  <div className="input-group">
                    <label>URL de imagen (opcional)</label>
                    <input
                      type="url"
                      name="image"
                      value={newPost.image}
                      onChange={handlePostChange}
                      placeholder="https://ejemplo.com/imagen.jpg"
                      className="media-input"
                    />
                  </div>
                  
                  <div className="input-group">
                    <label>URL de video (opcional)</label>
                    <input
                      type="url"
                      name="video"
                      value={newPost.video}
                      onChange={handlePostChange}
                      placeholder="https://youtube.com/watch?v=..."
                      className="media-input"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isPosting}
                >
                  {isPosting ? 'Publicando...' : 'Publicar'}
                </button>
              </form>
            </>
          )}
          
          <div className="posts-list">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="author-avatar">
                    {post.author.charAt(0)}
                  </div>
                  <div className="author-info">
                    <p className="author-name">{post.author}</p>
                    <p className="post-date">{post.date}</p>
                  </div>
                </div>
                
                <p className="post-content">{post.content}</p>
                
                {post.image && (
                  <div className="post-media">
                    <img src={post.image} alt="Post" className="post-image" />
                  </div>
                )}
                
                {post.video && (
                  <div className="post-media video-container">
                    <iframe
                      src={post.video.includes('youtube.com') ? 
                        post.video.replace('watch?v=', 'embed/') : 
                        post.video}
                      title="Video"
                      className="post-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                
                <div className="comments-section">
                  <h3 className="comments-title">Comentarios ({post.comments.length})</h3>
                  
                  <div className="comments-list">
                    {post.comments.map(comment => (
                      <div key={comment.id} className="comment">
                        <div className="comment-avatar">
                          {comment.author.charAt(0)}
                        </div>
                        <div className="comment-content">
                          <p className="comment-author">{comment.author}</p>
                          <p className="comment-text">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {user && (
                    <div className="comment-form">
                      <input
                        type="text"
                        value={newComments[post.id] || ''}
                        onChange={(e) => handleCommentChange(post.id, e.target.value)}
                        placeholder="Escribe un comentario..."
                        className="comment-input"
                      />
                      <button
                        onClick={() => addComment(post.id)}
                        className="comment-btn"
                      >
                        Enviar
                      </button>
                    </div>
                  )}
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