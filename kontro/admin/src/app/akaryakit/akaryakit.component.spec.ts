import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaryakitComponent } from './akaryakit.component';

describe('AkaryakitComponent', () => {
  let component: AkaryakitComponent;
  let fixture: ComponentFixture<AkaryakitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkaryakitComponent]
    });
    fixture = TestBed.createComponent(AkaryakitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
