/**
 * Indoor sauna calculator pricing.
 * Set to null to hide numbers (the calculator then sends a "please calculate" request to WhatsApp).
 * perM2: AZN per m² of room floor, standard linden interior, without heater/extras.
 * wood: multiplier added on top for premium interior wood (0.15 = +15%).
 * extras: fixed AZN range added per selected extra.
 */
export const INDOOR_PRICING: null | {
  perM2: [number, number];
  wood: Record<string, number>;
  extras: Record<string, [number, number]>;
} = {
  // confirmed by the owner 2026-10-13: ordinary room, linden — 1500–2000 AZN per m²
  perM2: [1500, 2000],
  // premium wood / extras: no figures yet → shown as "+" (added on top), not invented
  wood: {},
  extras: {},
};
