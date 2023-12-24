export const errorReturnHandler = (error) => {
  // it is axios error if error related to network or axios or it is just from the server handle all these cases
  if (error.code === 'ERR_NETWORK') {
    return {
      status: 'error',
      statusCode: error.code,
      message: 'خطأ في الاتصال بالخادم',
    };
  } else {
    return {
      status: 'error',
      message: error.response.data.message,
    };
  }
};
