import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetTextboxComponent } from './tweet-textbox.component';

describe('TweetTextboxComponent', () => {
  let component: TweetTextboxComponent;
  let fixture: ComponentFixture<TweetTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
