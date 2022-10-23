import { TestBed } from '@angular/core/testing';

import { StarWarsListService } from './star-wars-list.service';

describe('StarWarsListService', () => {
  let service: StarWarsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
