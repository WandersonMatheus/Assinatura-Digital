import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosListaComponent } from './termos-lista.component';

describe('TermosListaComponent', () => {
  let component: TermosListaComponent;
  let fixture: ComponentFixture<TermosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
