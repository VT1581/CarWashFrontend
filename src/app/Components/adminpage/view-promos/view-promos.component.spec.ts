import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPromosComponent } from './view-promos.component';

describe('ViewPromosComponent', () => {
  let component: ViewPromosComponent;
  let fixture: ComponentFixture<ViewPromosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPromosComponent]
    });
    fixture = TestBed.createComponent(ViewPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
