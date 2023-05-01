import { TestBed } from '@angular/core/testing';

import { MostrarLoginService } from './mostrar-login.service';

describe('MostrarLoginService', () => {
  let service: MostrarLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
