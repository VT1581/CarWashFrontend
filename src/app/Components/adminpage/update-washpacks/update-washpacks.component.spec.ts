import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWashpacksComponent } from './update-washpacks.component';

describe('UpdateWashpacksComponent', () => {
  let component: UpdateWashpacksComponent;
  let fixture: ComponentFixture<UpdateWashpacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWashpacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWashpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
