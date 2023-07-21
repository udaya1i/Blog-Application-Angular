import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatagoryComponent } from './single-catagory.component';

describe('SingleCatagoryComponent', () => {
  let component: SingleCatagoryComponent;
  let fixture: ComponentFixture<SingleCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
