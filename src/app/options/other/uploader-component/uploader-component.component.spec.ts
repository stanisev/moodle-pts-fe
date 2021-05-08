import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderComponentComponent } from './uploader-component.component';

describe('UploaderComponentComponent', () => {
  let component: UploaderComponentComponent;
  let fixture: ComponentFixture<UploaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
