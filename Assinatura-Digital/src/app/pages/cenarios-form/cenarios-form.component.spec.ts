import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenariosFormComponent } from './cenarios-form.component';

describe('CenariosFormComponent', () => {
  let component: CenariosFormComponent;
  let fixture: ComponentFixture<CenariosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenariosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
