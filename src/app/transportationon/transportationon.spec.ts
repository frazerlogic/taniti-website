import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transportationon } from './transportationon';

describe('Transportationon', () => {
  let component: Transportationon;
  let fixture: ComponentFixture<Transportationon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transportationon],
    }).compileComponents();

    fixture = TestBed.createComponent(Transportationon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
