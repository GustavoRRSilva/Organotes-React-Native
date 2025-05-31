// utils/api.ts
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiRequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
  queryParams?: Record<string, string | number>;
}

export async function callApi<T = any>(
  url: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { method = "GET", headers = {}, body, queryParams = {} } = options;
  const baseUrl = process.env.API_URL + url;
  // Monta os query params
  const query = new URLSearchParams(queryParams as any).toString();
  const fullUrl = query ? `${baseUrl}?${query}` : baseUrl;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...(method !== "GET" && body ? { body: JSON.stringify(body) } : {}),
  };

  try {
    const response = await fetch(fullUrl, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro na requisição");
    }
    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
