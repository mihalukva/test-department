class Connector {
  fetch(url: string, method: string, data: any | null): Promise<any> {
    return fetch(this.prefix + url, {
      method: method,
      body: data === null ? null : JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
  }
  constructor(public prefix: string = "") {}
  get(url: string): Promise<any> {
    return this.fetch(url, "GET", null);
  }
  post(url: string, data: any): Promise<any> {
    return this.fetch(url, "POST", data);
  }
  patch(url: string, data: any): Promise<any> {
    return this.fetch(url, "PATCH", data);
  }
  delete(url: string): Promise<any> {
    return this.fetch(url, "DELETE", null);
  }
}
const connector = new Connector("/api");
export default connector;
