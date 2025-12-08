// src/pages/admin/AdminProductoForm.jsx
import { Link } from "react-router-dom";

export const AdminProductoForm = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1>Nuevo producto</h1>
          <Link to="/admin/productos" className="btn btn-outline-secondary btn-sm">
            Volver
          </Link>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Marca</label>
            <input className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Estado</label>
            <select className="form-select">
              <option value="Nuevo">Nuevo</option>
              <option value="Reacondicionado">Reacondicionado</option>
              <option value="Usado">Usado</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input type="number" className="form-control" min="0" />
          </div>

          <div className="mb-3">
            <label className="form-label">URL imagen (poster)</label>
            <input className="form-control" placeholder="/img/archivo.jpg" />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea className="form-control" rows="3" />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Guardar producto
          </button>
        </form>
      </div>
    </div>
  );
};
