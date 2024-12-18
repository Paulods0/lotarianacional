import axios from "../config/axios"
import { INews } from "../interfaces"

export const getNews = async (): Promise<INews[]> => {
  const result = await axios.get("/news")
  return result.data
}

export const getNewsById = async (id: string): Promise<INews> => {
  const result = await axios.get(`/news/${id}`)
  return result.data
}

export const createNews = async (
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.post("news", data)
  return response.data
}

export const deleteNews = async (id: string): Promise<{ message: string }> => {
  const response = await axios.delete(`/news/${id}`)
  return response.data
}

export const updateNews = async (
  id: string,
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.put(`/news/${id}`, data)
  return response.data
}
