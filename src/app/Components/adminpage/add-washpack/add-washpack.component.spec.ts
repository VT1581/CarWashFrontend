import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWashpackComponent } from './add-washpack.component';

describe('AddWashpackComponent', () => {
  let component: AddWashpackComponent;
  let fixture: ComponentFixture<AddWashpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWashpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWashpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
