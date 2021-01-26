import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPreferenceComponent } from './show-preference.component';

describe('ShowPreferenceComponent', () => {
  let component: ShowPreferenceComponent;
  let fixture: ComponentFixture<ShowPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
