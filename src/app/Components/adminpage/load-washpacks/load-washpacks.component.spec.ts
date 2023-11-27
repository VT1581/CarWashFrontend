import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadWashpacksComponent } from './load-washpacks.component';

describe('LoadWashpacksComponent', () => {
  let component: LoadWashpacksComponent;
  let fixture: ComponentFixture<LoadWashpacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadWashpacksComponent]
    });
    fixture = TestBed.createComponent(LoadWashpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
