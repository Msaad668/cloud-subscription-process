import axios from "axios";

export class SubscriptionService {
  public listSubscriptions = async (): Promise<any> => {
    try {
      const res = await axios.get(
        "https://cloud-storage-prices-moberries.herokuapp.com/prices"
      );
      return res.data;
    } catch (error) {
      return {};
    }
  };

  public subscribe = async (data: any): Promise<any> => {
    try {
      const res = await axios.post("https://httpbin.org/post", data);
      return res.data;
    } catch (error) {
      return {};
    }
  };
}
