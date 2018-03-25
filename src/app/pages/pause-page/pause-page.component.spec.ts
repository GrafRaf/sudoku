import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PausePageComponent } from './pause-page.component';

describe('PausePageComponent', () => {
  let component: PausePageComponent;
  let fixture: ComponentFixture<PausePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PausePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PausePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
