import { baseUrl } from "../network/baseUrl";
import axios from "axios";

const getProfilePictureUploadHeaders = async (token) => {
    if (token) {
        return {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        };
      } else {
        return {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        };
      }
};

const getHeaders = (token) => {
    if (token) {
      return {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      };
    } else {
      return {
        // 'Authorization': 'Bearer ' + '2|WCtrTT8sPOf2NokAZNVUTTct2LjlJWiuZAAgky9N',
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      };
    }
  };


var authOptions = {
    method: null,
    data: null,
    headers: getHeaders(),
};


export const postMethod = async (url, data, token) => {
    authOptions.method = "POST";
    authOptions.data = data;
    authOptions.headers = await getHeaders(token);

    return axios(baseUrl + url, { ...authOptions, method: "POST", data: data, headers: await getHeaders(token) });
};

export const patchMethod = async (url, data, token) => {
    authOptions.method = "Patch";
    authOptions.data = data;
    authOptions.headers = await getHeaders(token);
    return axios(baseUrl + url, authOptions);
};

export const putMethod = async (url, data, token = null) => {
    authOptions.method = "PUT";
    authOptions.data = data;
    authOptions.headers = await getHeaders(token);
    return axios(baseUrl + url, authOptions);
};

export const getMethod = async (url, token) => {
    authOptions.headers = await getHeaders(token);
    authOptions.method = "GET";
    authOptions.data = null;
    return axios(baseUrl + url, authOptions);
};

export const deleteMethod = async (url, token) => {
    authOptions.method = "DELETE";
    authOptions.data = null;
    authOptions.headers = await getHeaders(token);
    return axios(baseUrl + url, authOptions);
};
