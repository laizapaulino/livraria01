import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornoCategoriaComponent  } from './retorno-categoria.component';

describe('RetornoBuscaComponent', () => {
  let component: RetornoCategoriaComponent;
  let fixture: ComponentFixture<RetornoCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetornoCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
