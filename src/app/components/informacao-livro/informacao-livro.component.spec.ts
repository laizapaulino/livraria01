import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoLivroComponent } from './informacao-livro.component';

describe('InformacaoLivroComponent', () => {
  let component: InformacaoLivroComponent;
  let fixture: ComponentFixture<InformacaoLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacaoLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
