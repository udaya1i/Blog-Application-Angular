import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryNavbarComponent } from './catagory-navbar.component';

describe('CatagoryNavbarComponent', () => {
  let component: CatagoryNavbarComponent;
  let fixture: ComponentFixture<CatagoryNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
