const apiRequest = async (url = " ", optionsObj = null, errMsg = null) => {
  try {
    const res = await fetch(url, optionsObj);
    if (!res.ok) throw Error("reload it ");
  } catch (err) {
    errMsg = err.Message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
