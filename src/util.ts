import { Permit } from './providers/user/user';
import { AdminPermit } from './providers/admin/admin';
import { Validators } from '@angular/forms';

export function getPermitValidity(product: Permit | AdminPermit) {
  if (product.rev === 1) {
    return 'revoked';
  }
  const now = parseInt('' + Date.now() / 1000, 10);
  if (product.fr < now) {
    return now < product.to ? 'active' : 'expired';
  }
  return 'inactive';
}

export const validators = {
  password: [Validators.required, Validators.minLength(6), Validators.maxLength(16)],
  fullname: [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
  phone: [Validators.required, Validators.pattern(/^\+?[\d\-\s\(\)]{5,25}$/)],
  username: [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
  activationCode: [Validators.required, Validators.pattern(/^\d{4}$/)],
};
