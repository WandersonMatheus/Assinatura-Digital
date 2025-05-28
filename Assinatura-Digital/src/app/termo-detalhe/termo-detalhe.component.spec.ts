import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoDetalheComponent } from './termo-detalhe.component';

describe('TermoDetalheComponent', () => {
  let component: TermoDetalheComponent;
  let fixture: ComponentFixture<TermoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermoDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
