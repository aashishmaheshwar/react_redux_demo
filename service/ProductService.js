class ProductService {
  constructor() {}

  get() {
    return fetch("https://apiserviceapisync.azurewebsites.net/api/Products");
  }

  post(data) {
    let resp = null;
    resp = fetch("https://apiserviceapisync.azurewebsites.net/api/Products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return resp;
  }
}

export default ProductService;
