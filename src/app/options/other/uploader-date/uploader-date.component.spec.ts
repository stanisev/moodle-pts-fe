import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderDateComponent } from './uploader-date.component';

describe('UploaderDateComponent', () => {
  let component: UploaderDateComponent;
  let fixture: ComponentFixture<UploaderDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
