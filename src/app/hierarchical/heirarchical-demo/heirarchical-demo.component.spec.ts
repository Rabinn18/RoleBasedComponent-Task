import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeirarchicalDemoComponent } from './heirarchical-demo.component';

describe('HeirarchicalDemoComponent', () => {
  let component: HeirarchicalDemoComponent;
  let fixture: ComponentFixture<HeirarchicalDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeirarchicalDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeirarchicalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
