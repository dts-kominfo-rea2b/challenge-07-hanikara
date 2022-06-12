const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    const dataEmosi = await theaterIXX.concat(theaterVGC);
    return dataEmosi.filter((x) => x.hasil == emosi).length;
  } catch (error) {
    return error;
  }
};

module.exports = {
  promiseOutput,
};
