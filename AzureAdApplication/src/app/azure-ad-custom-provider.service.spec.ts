import { TestBed } from '@angular/core/testing';

import { AzureAdCustomProviderService } from './azure-ad-custom-provider.service';

describe('AzureAdCustomProviderService', () => {
  let service: AzureAdCustomProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureAdCustomProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
