import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGrpComponent } from './product-grp.component';

describe('ProductGrpComponent', () => {
  let component: ProductGrpComponent;
  let fixture: ComponentFixture<ProductGrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
