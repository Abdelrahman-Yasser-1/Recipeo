import axios from "axios";
import type { ServerError, ServerErrorResponse } from "@src/core";
import ConsoleColors from "./ConsoleColors";
import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const getLogMessage = (message: string) => `## HttpClient:: ${message}`;

const addHeaders = (config: InternalAxiosRequestConfig<any>) => {
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";
  config.headers["cache-control"] = "no-cache";
  config.headers["x-api-key"] = process.env.REACT_APP_API_KEY;
};

const getLogMethodColor = (method?: string) => {
  let methodColor: string | undefined;

  switch (method) {
    case "GET":
      methodColor = ConsoleColors.get;
      break;
    case "HEAD":
      methodColor = ConsoleColors.head;
      break;

    case "POST":
      methodColor = ConsoleColors.post;
      break;

    case "PUT":
      methodColor = ConsoleColors.put;
      break;

    case "PATCH":
      methodColor = ConsoleColors.patch;
      break;

    case "DELETE":
      methodColor = ConsoleColors.delete;
      break;

    case "OPTIONS":
      methodColor = ConsoleColors.options;
      break;

    default:
      methodColor = undefined;
      break;
  }

  return methodColor;
};

const getErrorMessage = (error: AxiosError<ServerErrorResponse>) => {
  // TODO: Construct error message base on "ServerErrorResponse" constructed from API.
  let errorMessage: string = "unknown_error";

  if (error.response?.data?.error) {
    errorMessage = error.response?.data?.error;
  } else if (
    error.response?.data?.errors &&
    typeof error.response.data.errors === "string"
  ) {
    errorMessage = error.response?.data?.errors;
  } else if (
    error.response?.data?.errors &&
    typeof error.response.data.errors === "object" &&
    error.response?.data?.errors?.message?.length
  ) {
    errorMessage = error.response?.data?.errors?.message?.join("\n");
  } else if (error.response?.data?.message) {
    errorMessage = error.response?.data?.message;
  } else if (error.message) {
    errorMessage = error.message;
  }

  return errorMessage;
};

const handleAxiosError = (error: AxiosError<ServerErrorResponse>) => {
  console.info(getLogMessage("handleAxiosError"), error);

  const severError: ServerError = {
    ...error,
    date: new Date(),
    status: error.response?.status,
    data: error.response?.data,
    errorMessage: getErrorMessage(error),
  };

  return Promise.reject(severError);
};

const requestFulfilledInterceptor = (
  config: InternalAxiosRequestConfig<any>
) => {
  addHeaders(config);
  const method = config.method?.toUpperCase();
  const methodColor = getLogMethodColor(method);

  console.info(
    getLogMessage(`🚀 Sending %c${method}%c Request to %c${config.url}`),
    `color: ${methodColor}`,
    "color: undefined",
    `color: ${ConsoleColors.url}`,
    config
  );

  return config;
};

const requestRejectedInterceptor = (error: any) => {
  console.error(
    getLogMessage(
      `🚫 Error Sending Request to %c${error.response?.config?.url}`
    ),
    `color: ${ConsoleColors.url}`,
    error
  );

  return Promise.reject(error as Error);
};

const responseFulfilledInterceptor = (response: AxiosResponse<any, any>) => {
  console.info(
    getLogMessage(`✅ Got Response from %c${response.config.url}`),
    `color: ${ConsoleColors.url}`,
    response
  );

  return response;
};

const responseRejectedInterceptor = (error: any) => {
  console.error(
    getLogMessage(`❌ Got Error from %c${error.response?.config?.url}`),
    `color: ${ConsoleColors.url}`,
    error
  );

  if (axios.isAxiosError<ServerErrorResponse>(error)) {
    return handleAxiosError(error);
  }

  const severError: ServerError = {
    ...error,
    errorMessage: "unknown_error",
  };

  return Promise.reject(severError);
};

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60 * 1 * 1000,
  timeoutErrorMessage: "network_error",
});

httpClient.interceptors.request.use(
  requestFulfilledInterceptor,
  requestRejectedInterceptor
);

httpClient.interceptors.response.use(
  responseFulfilledInterceptor,
  responseRejectedInterceptor
);

export default httpClient;
