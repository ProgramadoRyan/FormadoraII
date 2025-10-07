import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardVerPage } from './card-ver.page';

describe('CardVerPage', () => {
  let component: CardVerPage;
  let fixture: ComponentFixture<CardVerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
