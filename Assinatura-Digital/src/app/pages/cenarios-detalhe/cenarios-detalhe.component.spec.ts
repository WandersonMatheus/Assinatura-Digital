import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenariosDetalheComponent } from './cenarios-detalhe.component';

describe('CenariosDetalheComponent', () => {
  let component: CenariosDetalheComponent;
  let fixture: ComponentFixture<CenariosDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenariosDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenariosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
