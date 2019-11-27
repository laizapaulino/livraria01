import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBuscaTituloComponent } from './resultado-busca-titulo.component';

describe('ResultadoBuscaTituloComponent', () => {
  let component: ResultadoBuscaTituloComponent;
  let fixture: ComponentFixture<ResultadoBuscaTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoBuscaTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBuscaTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
