import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeWasherComponent } from './welcome-washer.component';

describe('WelcomeWasherComponent', () => {
  let component: WelcomeWasherComponent;
  let fixture: ComponentFixture<WelcomeWasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeWasherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeWasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
