import axios from 'axios';

export const getNewsletterApi = () => {
  return axios.request({
    url: '/api/newsletter',
    method: 'GET',
  });
};

export const postNewsletterApi = (data: string) => {
  return axios.request({
    url: '/api/newsletter',
    method: 'POST',
    data: { email: data },
  });
};
