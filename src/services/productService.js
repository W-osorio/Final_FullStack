// src/services/productService.js
import { apiGet, apiPost, apiPut, apiDelete } from "./apiClient";

export const productService = {
  getAll: () => apiGet("/productos"),

  getById: (id) => apiGet(`/productos/${id}`),

  create: (product) => apiPost("/productos", product),

  update: (id, product) => apiPut(`/productos/${id}`, product),

  remove: (id) => apiDelete(`/productos/${id}`),
};
