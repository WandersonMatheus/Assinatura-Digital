import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenariosListaComponent } from './cenarios-lista.component';

describe('CenariosListaComponent', () => {
  let component: CenariosListaComponent;
  let fixture: ComponentFixture<CenariosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenariosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenariosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
