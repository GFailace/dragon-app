export const redirectRule = (url) => {
  try {
    const redirectUrl = url;
    window.location.assign(redirectUrl);
  } catch (error) {
    console.error(error);
  }
};
