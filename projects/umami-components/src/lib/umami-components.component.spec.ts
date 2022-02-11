import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmamiComponentsComponent } from './umami-components.component';

describe('UmamiComponentsComponent', () => {
  let component: UmamiComponentsComponent;
  let fixture: ComponentFixture<UmamiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmamiComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmamiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
