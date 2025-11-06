import { useState } from 'react'
import "./App.css"
import "./composent/button/button.css"
import "./composent/input/input.css"

function App() {
  // States Users
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [userId, setUserId] = useState("")

  // States Posts
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [postId, setPostId] = useState("")

  // Fonction fetch
  const fetched = (endpoint: string, method: string, id?: string, bodyData?: object) => {
    const url = id
      ? `http://127.0.0.1:3001/${endpoint}/${id}`
      : `http://127.0.0.1:3001/${endpoint}`

    const options: RequestInit = {
      method,
      headers: { "Content-Type": "application/json" },
    }

    // Si pas d'ID et méthode POST/PUT, on ajoute le body
    if (!id && (method === "POST" || method === "PUT")) {
      options.body = JSON.stringify(bodyData)
    }

    fetch(url, options)
      .then(res => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
        return res.json()
      })
      .then(data => {
        console.log("Réponse :", data)
        alert(`✅ Succès — regarde la console`)
      })
      .catch(err => {
        console.error("Erreur :", err)
        alert(`❌ Erreur: ${err.message}`)
      })
  }

  return (
    <div className="app-container">
      <h1 className="app-title">🚀 API Tester</h1>

      <div className="sections-grid">
        {/* USERS */}
        <div className="section">
          <h2 className="section-title user-title">👤 Users</h2>

          {/* ID */}
          <div className="form-group">
            <label className="label">User ID (optionnel)</label>
            <input
              type="text"
              className="input-field"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Ex: 1 pour /users/1"
            />
          </div>

          {/* Champs visibles seulement si pas d’ID */}
          {!userId && (
            <>
              <div className="form-group">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input-field"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="Enter email"
                />
              </div>
            </>
          )}

          <button
            className="submit-button user-button"
            onClick={() => fetched("users", "POST", userId, { name, mail })}
          >
            {userId ? `POST /users/${userId}` : "POST /users"}
          </button>
        </div>

        {/* POSTS */}
        <div className="section">
          <h2 className="section-title post-title">📝 Posts</h2>

          {/* ID */}
          <div className="form-group">
            <label className="label">Post ID (optionnel)</label>
            <input
              type="text"
              className="input-field"
              value={postId}
              onChange={(e) => setPostId(e.target.value)}
              placeholder="Ex: 5 pour /posts/5"
            />
          </div>

          {/* Champs visibles seulement si pas d’ID */}
          {!postId && (
            <>
              <div className="form-group">
                <label className="label">Title</label>
                <input
                  type="text"
                  className="input-field"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group">
                <label className="label">Body</label>
                <input
                  type="text"
                  className="input-field"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Enter body"
                />
              </div>
            </>
          )}

          <button
            className="submit-button post-button"
            onClick={() => fetched("posts", "POST", postId, { title, body })}
          >
            {postId ? `POST /posts/${postId}` : "POST /posts"}
          </button>
        </div>
      </div>

      <div className="info-section">
        <p>💡 Si un ID est entré, la requête cible /endpoint/:id et n’envoie pas de body</p>
        <p>💡 Sans ID → les champs Name/Mail ou Title/Body sont envoyés dans le body</p>
      </div>
    </div>
  )
}

export default App
