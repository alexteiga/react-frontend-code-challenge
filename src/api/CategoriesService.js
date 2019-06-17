import config from "./config";

class CategoriesService {
  getData() {
    const myPromise = new Promise((resolve, reject) => {
      fetch(config.url.CATEGORIES_API_URL, { method: "GET" })
        .then(resp => resp.json())
        .then(data => {
          resolve(
            data.filter(item => {
              return item.hidden === false;
            })
          );
        })
        .catch(error => {
          reject(error);
        });
    });
    return myPromise;
  }
}

export default CategoriesService;
