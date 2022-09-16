import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';


describe('PokemonService', () => {
  let service: PokemonService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it( 'function getPokemonById' , () => {
    let id: number = 2
    service.getPokemonById(id).subscribe((response) => {
    });

    const url = 'https://pokeapi.co/api/v2/ability/2'
    const req = httpTestingController.expectOne(url);
    const request = req.request
    expect(request.method).toBe('GET');
  });

  it( 'function getPokemonAll' , () => {
    
    service.getPokemonAll().subscribe((response) => {
    });

    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
    const req = httpTestingController.expectOne(url);
    const request = req.request
    expect(request.method).toBe('GET');
  });

  it( 'function getPokemonGeneration' , () => {
    
    let name: string = 'bulbasaur'
    service.getPokemonGeneration(name).subscribe((response) => {
    });

    const url = 'https://pokeapi.co/api/v2/generation/bulbasaur'
    const req = httpTestingController.expectOne(url);
    const request = req.request
    expect(request.method).toBe('GET');
  });


});
