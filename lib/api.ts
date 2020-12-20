export const postSubscribeEmail = async (data: string) => {
  try {
    const res = await fetch('/api/v1/email-subscription', {
      method: 'POST',
      body: data,
    }).then((response) => response.json());
    return { res };
  } catch (err) {
    return { err };
  }
};
