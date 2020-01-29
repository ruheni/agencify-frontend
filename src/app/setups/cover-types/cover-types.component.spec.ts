import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverTypesComponent } from './cover-types.component';

describe('CoverTypesComponent', () => {
  let component: CoverTypesComponent;
  let fixture: ComponentFixture<CoverTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
