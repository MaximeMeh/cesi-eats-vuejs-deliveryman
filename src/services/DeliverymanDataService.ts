import http from "@/http-common";

/* eslint-disable */
class TutorialDataService {
  getAll(): Promise<any> {
    return http.get("/deliveryman");
  }

  get(id: any): Promise<any> {
    return http.get(`/deliveryman/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/deliveryman", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/deliveryman/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/deliveryman/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/deliveryman`);
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`/deliveryman?title=${title}`);
  }
}

export default new TutorialDataService();