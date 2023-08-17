import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountByIdComponent } from './list-account-by-id.component';

describe('ListAccountByIdComponent', () => {
  let component: ListAccountByIdComponent;
  let fixture: ComponentFixture<ListAccountByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccountByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAccountByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
