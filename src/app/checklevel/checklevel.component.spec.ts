import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklevelComponent } from './checklevel.component';

describe('ChecklevelComponent', () => {
  let component: ChecklevelComponent;
  let fixture: ComponentFixture<ChecklevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
