import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoemComponent } from './hoem.component';

describe('HoemComponent', () => {
  let component: HoemComponent;
  let fixture: ComponentFixture<HoemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
