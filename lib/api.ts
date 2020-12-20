import axios from 'axios';

export const postSubscribeEmail = async (data: string) => {
  try {
    const res = await axios.request({
      url: '/api/v1/email-subscription',
      method: 'POST',
      data,
    });
    return { res };
  } catch (err) {
    return { err };
  }
};
