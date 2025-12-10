// src/services/apiClient.js

const API_BASE_URL = "http://localhost:8080/api";

async function handleResponse(response) {
    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Error HTTP ${response.status}`);
    }
    // Si no hay contenido
    if (response.status === 204) return null;
    return response.json();
    }

    export async function apiGet(path) {
    const res = await fetch(`${API_BASE_URL}${path}`);
    return handleResponse(res);
    }

    export async function apiPost(path, body) {
    const res = await fetch(`${API_BASE_URL}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    return handleResponse(res);
    }

    export async function apiPut(path, body) {
    const res = await fetch(`${API_BASE_URL}${path}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    return handleResponse(res);
    }

    export async function apiDelete(path) {
    const res = await fetch(`${API_BASE_URL}${path}`, { method: "DELETE" });
    return handleResponse(res);
}
