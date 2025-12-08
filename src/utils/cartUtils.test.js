import { describe, it, expect } from 'vitest';
import { calcularTotalConIVA } from './cartUtils';

describe('calcularTotalConIVA', () => {
    it('calcula correctamente el total con IVA', () => {
        const items = [
        { precio: 1000, cantidad: 2 },
        { precio: 2000, cantidad: 1 },
        ];

        const total = calcularTotalConIVA(items);
        expect(total).toBe(4760);
    });
});
