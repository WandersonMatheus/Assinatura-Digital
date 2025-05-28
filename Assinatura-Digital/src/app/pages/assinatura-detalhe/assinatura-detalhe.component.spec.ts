import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinaturaDetalheComponent } from './assinatura-detalhe.component';

describe('AssinaturaDetalheComponent', () => {
  let component: AssinaturaDetalheComponent;
  let fixture: ComponentFixture<AssinaturaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssinaturaDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssinaturaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
