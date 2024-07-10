export class ShipmentNotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}
