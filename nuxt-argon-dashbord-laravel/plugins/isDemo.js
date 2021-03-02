export default ({ app }, inject) => {
    const init = process.env.isDemo || 0;
    inject("isDemo", init);
  };
  