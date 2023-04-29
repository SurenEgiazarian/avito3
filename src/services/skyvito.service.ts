import axios from 'axios';
import {
  AdProps,
  EditAdProps,
  EditUser,
  NewAdProps,
  NewAdPropsNoPhoto,
  NewReview,
  NewUser,
  RefreshToken,
  Review,
  SignInProps,
  User
} from '../types/types';

export const API_URL = 'https://main--heroic-sherbet-08fe0f.netlify.app/api/';

axios.defaults.baseURL = API_URL;

export const SkyvitoService = {
  // ads
  async getAllAds() {
    return axios.get<AdProps[]>('/ads');
  },
  async getAd(id: string | undefined) {
    return axios.get<AdProps>(`/ads/${id}`);
  },
  async getUserAds() {
    return axios.get<AdProps[]>('/ads/me');
  },
  async createAd({ title, description, price, data }: NewAdProps) {
    return axios.post('/ads', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      params: { title, description, price }
    });
  },
  async createAdNoPhoto(data: NewAdPropsNoPhoto) {
    return axios.post('/adstext', data, {
      headers: { 'Content-Type': 'application/json' }
    });
  },
  async editAd(data: EditAdProps, id: string) {
    return axios.patch(`/ads/${id}`, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  },
  async addPhotoInAd(id: string, data: FormData) {
    return axios.post(`/ads/${id}/image`, data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  async deletePhotoInAd(id: string, url: string) {
    return axios.delete(`/ads/${id}/image`, {
      headers: { 'Content-Type': 'application/json' },
      params: { file_url: url }
    });
  },
  async deleteAd(id: string | undefined) {
    return axios.delete(`/ads/${id}`);
  },
  // reviews
  async getReviews(id: string | undefined) {
    return axios.get<Review[]>(`/ads/${id}/comments`);
  },
  async addReview(id: string | undefined, text: NewReview) {
    return axios.post(`/ads/${id}/comments`, text, {
      headers: { 'Content-Type': 'application/json' }
    });
  },
  // users
  async getAllUsers() {
    return axios.get<User[]>('/user/all');
  },
  async createUser(data: NewUser) {
    return axios.post('/auth/register', data, { headers: { 'Content-Type': 'application/json' } });
  },
  async getUser() {
    return axios.get<User>('/user');
  },
  async editUser(data: EditUser) {
    return axios.patch('/user', data, { headers: { 'Content-Type': 'application/json' } });
  },
  async editAvatar(data: FormData) {
    return axios.post('/user/avatar', data, { headers: { 'Content-Type': 'multipart/form-data' } });
  },
  // auth
  async signIn(data: SignInProps) {
    return axios.post('/auth/login', data, { headers: { 'Content-Type': 'application/json' } });
  },
  async refreshToken(data: RefreshToken) {
    return axios.put('/auth/login', data, { headers: { 'Content-Type': 'application/json' } });
  }
};
