// src/services/productService.js
import { apiGet, apiPost, apiPut, apiDelete } from "./apiClient";

export const productService = {
  // GET /api/productos
  getAll: () => apiGet("/productos"),

  // GET /api/productos/{id}
  getById: (id) => apiGet(`/productos/${id}`),

  // POST /api/productos
  create: (product) => apiPost("/productos", product),

  // PUT /api/productos/{id}
  update: (id, product) => apiPut(`/productos/${id}`, product),

  // DELETE /api/productos/{id}
  remove: (id) => apiDelete(`/productos/${id}`),
};
