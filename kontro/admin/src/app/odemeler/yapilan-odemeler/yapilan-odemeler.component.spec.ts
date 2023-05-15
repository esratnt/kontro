import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YapilanOdemelerComponent } from './yapilan-odemeler.component';

describe('YapilanOdemelerComponent', () => {
  let component: YapilanOdemelerComponent;
  let fixture: ComponentFixture<YapilanOdemelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YapilanOdemelerComponent]
    });
    fixture = TestBed.createComponent(YapilanOdemelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
