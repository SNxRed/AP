import React, { useState } from 'react';
import Navbar from './Navbar';

function Blog({ onLogout }) {
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
    
    // Simular una pequeña demora para la UX
    setTimeout(() => {
      const post = {
        id: posts.length + 1,
        author: 'UsuarioActual',
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
              author: 'Tú',
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
      <Navbar isAuthenticated={true} onLogout={onLogout} />
      
      <div className="blog-container">
        <div className="blog-content">
          <h1 className="blog-title">Comunidad Fitness</h1>
          
          <form onSubmit={addPost} className="post-form">
            <div className="form-group">
              <textarea
                name="content"
                value={newPost.content}
                onChange={(e) => handlePostChange(e)}
                placeholder="Comparte tus pensamientos, logros o consejos..."
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
                  onChange={(e) => handlePostChange(e)}
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
                  onChange={(e) => handlePostChange(e)}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-app {
          min-height: 100vh;
          background-color: #f8f9fa;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .blog-content {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding: 30px;
          margin-top: 20px;
        }
        
        .blog-title {
          color: #7f00b2;
          font-size: 2.5rem;
          margin-bottom: 30px;
          text-align: center;
          font-weight: 700;
        }
        
        .post-form {
          margin-bottom: 40px;
          border-bottom: 1px solid #eee;
          padding-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .post-input {
          width: 100%;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          resize: none;
          transition: border 0.3s;
        }
        
        .post-input:focus {
          outline: none;
          border-color: #7f00b2;
          box-shadow: 0 0 0 2px rgba(127, 0, 178, 0.1);
        }
        
        .media-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .input-group {
          margin-bottom: 15px;
        }
        
        .input-group label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: #555;
          font-weight: 500;
        }
        
        .media-input {
          width: 100%;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 0.9rem;
        }
        
        .submit-btn {
          background-color: #7f00b2;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }
        
        .submit-btn:hover {
          background-color: #6c009f;
          transform: translateY(-1px);
        }
        
        .submit-btn:disabled {
          background-color: #b39fcc;
          cursor: not-allowed;
          transform: none;
        }
        
        .posts-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .post-card {
          border: 1px solid #eee;
          border-radius: 10px;
          padding: 25px;
          transition: box-shadow 0.3s;
        }
        
        .post-card:hover {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }
        
        .post-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .author-avatar {
          background-color: #7f00b2;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          margin-right: 15px;
        }
        
        .author-info {
          flex: 1;
        }
        
        .author-name {
          font-weight: 600;
          margin: 0;
          color: #333;
        }
        
        .post-date {
          color: #777;
          font-size: 0.85rem;
          margin: 3px 0 0;
        }
        
        .post-content {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 20px;
          white-space: pre-line;
        }
        
        .post-media {
          margin-bottom: 20px;
        }
        
        .post-image {
          max-width: 100%;
          border-radius: 8px;
          height: auto;
          display: block;
        }
        
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 8px;
        }
        
        .post-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .comments-section {
          border-top: 1px solid #eee;
          padding-top: 20px;
          margin-top: 25px;
        }
        
        .comments-title {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 15px;
        }
        
        .comments-list {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .comment {
          display: flex;
          gap: 10px;
        }
        
        .comment-avatar {
          background-color: #e0e0e0;
          color: #555;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: bold;
          flex-shrink: 0;
        }
        
        .comment-content {
          flex: 1;
        }
        
        .comment-author {
          font-weight: 600;
          font-size: 0.9rem;
          margin: 0 0 3px;
          color: #444;
        }
        
        .comment-text {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #333;
          margin: 0;
        }
        
        .comment-form {
          display: flex;
          margin-top: 15px;
        }
        
        .comment-input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 20px 0 0 20px;
          font-size: 0.95rem;
          outline: none;
        }
        
        .comment-input:focus {
          border-color: #7f00b2;
        }
        
        .comment-btn {
          background-color: #7f00b2;
          color: white;
          border: none;
          padding: 0 20px;
          border-radius: 0 20px 20px 0;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .comment-btn:hover {
          background-color: #6c009f;
        }
        
        @media (max-width: 768px) {
          .media-inputs {
            grid-template-columns: 1fr;
          }
          
          .blog-content {
            padding: 20px;
          }
          
          .blog-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Blog;