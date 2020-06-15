import axios, { AxiosInstance } from "axios";
import { Configuration } from "./interfaces/configuration";

export abstract class Api {
  private readonly PRODUCTION_URL: string = "https://api.branvopay.com";
  private readonly SANDBOX_URL: string = "https://sandbox-api.branvopay.com";

  protected client: AxiosInstance;

  public Api(path: string, version: string, configuration: Configuration) {
    const baseUri: string = configuration.isProduction()
      ? this.PRODUCTION_URL
      : this.SANDBOX_URL;

    this.client = axios.create({
      baseURL: `${baseUri}/${path}/${version}/`,
      headers: {
        "Account-Token": configuration.getToken(),
      },
    });
  }
}
