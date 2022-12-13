import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProdsComponent } from './show-prods.component';

describe('ShowProdsComponent', () => {
  let component: ShowProdsComponent;
  let fixture: ComponentFixture<ShowProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
