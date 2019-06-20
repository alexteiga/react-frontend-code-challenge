import config from "./config";

class ProService {
  cleanItems = items => {
    try {
      let newItems = [];
      items.forEach(element => {
        const itemsArray = element.name.split(" ");
        const elementLength =
          element.name.length - itemsArray[itemsArray.length - 1].length;
        element.name = element.name.substring(0, elementLength);
        newItems.push(element);
      });
      return newItems;
    } catch (error) {
      console.log("ProService.cleanItems.error", error);
    }
  };

  getData(query) {
    const promise = new Promise((resolve, reject) => {
      let responseHeaders = {};
      fetch(config.url.SEARCH_PROS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-pagination-offset": query.headers.paginationOffset,
          "x-pagination-limit": query.headers.paginationLimit
        },
        body: JSON.stringify(query.query)
      })
        .then(response => {
          responseHeaders = {
            paginationCount: response.headers.get("x-pagination-count"),
            paginationLimit: response.headers.get("x-pagination-limit"),
            paginationOffset: response.headers.get("x-pagination-offset")
          };
          return response.json();
        })
        .then(data => {
          var cleanedPros = this.cleanItems(data.response.pros);
          var result = {
            meta: responseHeaders,
            data: cleanedPros
          };
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
    return promise;
  }
}

export default ProService;
