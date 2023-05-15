import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdemelerComponent } from './odemeler.component';

describe('OdemelerComponent', () => {
  let component: OdemelerComponent;
  let fixture: ComponentFixture<OdemelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdemelerComponent]
    });
    fixture = TestBed.createComponent(OdemelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
