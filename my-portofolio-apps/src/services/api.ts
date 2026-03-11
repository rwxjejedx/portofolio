import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
})

// Auto attach JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('blog_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// ─── Article ────────────────────────────────────────────────
export const getArticles = (params?: { search?: string; tag?: string; page?: number; limit?: number }) =>
  api.get('/articles', { params })

export const getArticleBySlug = (slug: string) =>
  api.get(`/articles/${slug}`)

export const getAdminArticles = () =>
  api.get('/articles/admin/all')

export const getStats = () =>
  api.get('/articles/admin/stats')

export const createArticle = (data: object) =>
  api.post('/articles', data)

export const updateArticle = (id: string, data: object) =>
  api.put(`/articles/${id}`, data)

export const deleteArticle = (id: string) =>
  api.delete(`/articles/${id}`)

// ─── Comment ────────────────────────────────────────────────
export const createComment = (data: object) =>
  api.post('/comments', data)

export const getPendingComments = () =>
  api.get('/comments/pending')

export const approveComment = (id: string) =>
  api.patch(`/comments/${id}/approve`)

export const deleteComment = (id: string) =>
  api.delete(`/comments/${id}`)

// ─── Auth ────────────────────────────────────────────────────
export const login = (email: string, password: string) =>
  api.post('/auth/login', { email, password })

export const getMe = () =>
  api.get('/auth/me')

// ─── Upload ─────────────────────────────────────────────────
export const uploadImage = (file: File) => {
  const form = new FormData()
  form.append('image', file)
  return api.post('/upload/image', form, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export default api
