import { NativeDateAdapter } from '@angular/material';

export class JpDateAdapter extends NativeDateAdapter {
  getDateNames(): string[] {
    return Array.from(Array(31), (v, k) => `${k + 1}`);
  }
}