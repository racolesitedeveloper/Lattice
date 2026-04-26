export {};

/** Minimal typing for PayPal subscription buttons (official SDK is not fully typed). */
type PayPalButtonsInstance = {
  render: (container: HTMLElement | string) => Promise<void>;
  close: () => void;
};

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: Record<string, unknown>) => PayPalButtonsInstance;
    };
  }
}
